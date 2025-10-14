// Blog post loader
async function loadBlogPosts() {
    const blogGrid = document.getElementById('blog-posts');
    
    try {
        // Fetch all blog posts from GitHub
        const response = await fetch('https://api.github.com/repos/Niaz-Ul-Haque/sn-pest-friend/contents/_posts');
        const files = await response.json();
        
        if (!files || files.length === 0) {
            blogGrid.innerHTML = '<p>No blog posts available yet.</p>';
            return;
        }
        
        // Get all markdown files
        const posts = [];
        for (const file of files) {
            if (file.name.endsWith('.md')) {
                const contentResponse = await fetch(file.download_url);
                const content = await contentResponse.text();
                const post = parseMarkdownPost(content, file.name);
                if (post && post.published) {
                    posts.push(post);
                }
            }
        }
        
        // Sort by date (newest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Render posts
        renderBlogPosts(posts);
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogGrid.innerHTML = `<p data-en="Error loading blog posts. Please try again later." data-fr="Erreur lors du chargement des articles. Veuillez réessayer plus tard.">Erreur lors du chargement des articles. Veuillez réessayer plus tard.</p>`;
    }
}

function parseMarkdownPost(content, filename) {
    // Extract frontmatter
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    
    if (!match) return null;
    
    const frontmatter = match[1];
    const body = content.replace(frontmatterRegex, '').trim();
    
    // Parse frontmatter fields
    const post = {
        slug: filename.replace('.md', ''),
        filename: filename
    };
    
    const lines = frontmatter.split('\n');
    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            
            // Remove quotes
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            if (value.startsWith("'") && value.endsWith("'")) {
                value = value.slice(1, -1);
            }
            
            // Convert boolean strings
            if (value === 'true') value = true;
            if (value === 'false') value = false;
            
            post[key] = value;
        }
    });
    
    return post;
}

function renderBlogPosts(posts) {
    const blogGrid = document.getElementById('blog-posts');
    const currentLang = window.currentLanguage || 'fr';
    
    if (posts.length === 0) {
        blogGrid.innerHTML = currentLang === 'en' 
            ? '<p>No blog posts available yet.</p>' 
            : '<p>Aucun article de blog disponible pour le moment.</p>';
        return;
    }
    
    blogGrid.innerHTML = posts.map(post => {
        const title = post[`title_${currentLang}`] || post.title_en || 'Untitled';
        const excerpt = post[`excerpt_${currentLang}`] || post.excerpt_en || '';
        const date = new Date(post.date).toLocaleDateString(currentLang === 'fr' ? 'fr-CA' : 'en-CA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const image = post.featured_image || '../images/logo.png';
        const readMore = currentLang === 'en' ? 'Read More →' : 'Lire Plus →';
        
        return `
            <article class="blog-card">
                <img src="${image}" alt="${title}" class="blog-card-image" onerror="this.src='../images/logo.png'">
                <div class="blog-card-content">
                    <div class="blog-card-date">${date}</div>
                    <h2 class="blog-card-title">${title}</h2>
                    <p class="blog-card-excerpt">${excerpt}</p>
                    <a href="post.html?slug=${post.slug}" class="blog-card-link">${readMore}</a>
                </div>
            </article>
        `;
    }).join('');
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.loadBlogPosts = loadBlogPosts;
}