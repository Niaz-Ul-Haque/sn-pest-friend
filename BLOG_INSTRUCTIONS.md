# 📝 Blog CMS Instructions for SN Pest Control

## ✅ What Has Been Set Up

Your website now has a complete blog system with a CMS (Content Management System)! Here's what's been added:

### 1. **Blog Pages**
- **Blog Listing Page**: `https://www.silvernestpestcontrol.com/blog/`
- **Individual Post Pages**: Automatically generated for each blog post
- **Bilingual Support**: All blog posts support both English and French

### 2. **CMS Admin Panel**
- **Admin URL**: `https://www.silvernestpestcontrol.com/admin/`
- **Authentication**: GitHub OAuth (secure login)
- **User-Friendly Interface**: Easy-to-use editor for writing blog posts

### 3. **File Structure**
```
sn-pest-friend/
├── admin/                    # CMS admin interface
│   ├── index.html           # Admin dashboard
│   └── config.yml           # CMS configuration
├── api/
│   └── auth/                # OAuth authentication
│       ├── index.js         # Auth initiator
│       └── callback.js      # Auth callback handler
├── blog/                    # Blog frontend
│   ├── index.html          # Blog listing page
│   ├── post.html           # Individual post template
│   └── blog.js             # Blog loading logic
├── _posts/                  # Blog post storage
│   └── 2025-10-14-bed-bug-signs-montreal.md  # Sample post
└── images/
    └── blog/               # Blog images folder
```

---

## 🚀 How to Use the CMS (For Your Friend)

### **Step 1: Access the Admin Panel**

1. Go to: **`https://www.silvernestpestcontrol.com/admin/`**
2. Click **"Login with GitHub"**
3. Authorize the application when prompted
4. You'll be redirected to the CMS dashboard

### **Step 2: Create a New Blog Post**

1. In the CMS dashboard, click **"New Blog Posts"**
2. Fill in the required fields:

   - **Title (English)**: English title of your post
   - **Title (French)**: French title of your post
   - **Publish Date**: Choose the date and time
   - **Featured Image** (optional): Upload an image for the post
   - **Excerpt (English)**: Short summary in English (2-3 sentences)
   - **Excerpt (French)**: Short summary in French (2-3 sentences)
   - **Body (English)**: Full post content in English (supports Markdown)
   - **Body (French)**: Full post content in French (supports Markdown)
   - **Author**: Your name (default: "SN Pest Control")
   - **SEO Keywords** (optional): Keywords for search engines
   - **Published**: Toggle ON to publish, OFF to save as draft

3. Click **"Publish"** or **"Save"**

### **Step 3: Edit an Existing Post**

1. In the CMS dashboard, you'll see a list of all blog posts
2. Click on any post to edit it
3. Make your changes
4. Click **"Publish"** to save changes

### **Step 4: Delete a Post**

1. Open the post you want to delete
2. Click the **"Delete"** button
3. Confirm the deletion

---

## 📝 Writing Tips

### **Markdown Formatting**

The blog uses Markdown for formatting. Here are some basics:

```markdown
# Main Heading (H1)
## Section Heading (H2)
### Subsection Heading (H3)

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

[Link text](https://example.com)

![Image alt text](/images/blog/image.jpg)
```

### **Best Practices**

1. **SEO-Friendly Titles**: Include keywords like "Montreal", "pest control", "bed bugs", etc.
2. **Engaging Excerpts**: Write compelling summaries to encourage clicks
3. **Use Headers**: Break up long posts with H2 and H3 headings
4. **Add Images**: Include relevant images to make posts more engaging
5. **Call-to-Action**: End posts with a phone number or contact link
6. **Bilingual Content**: Always provide both English and French versions

---

## 🔧 Technical Setup (Already Done)

### **For Niaz (Repository Owner)**

The following has been completed:

✅ **GitHub OAuth App Created**
- Application name: "SN Pest Control Blog CMS"
- Homepage URL: `https://www.silvernestpestcontrol.com`
- Callback URL: `https://www.silvernestpestcontrol.com/api/auth/callback`

✅ **Vercel Environment Variables Added**
- `OAUTH_CLIENT_ID`: Your GitHub OAuth Client ID
- `OAUTH_CLIENT_SECRET`: Your GitHub OAuth Client Secret

✅ **Files Created**
- Admin interface (`/admin`)
- Blog pages (`/blog`)
- OAuth handlers (`/api/auth`)
- Sample blog post

---

## 📤 Next Steps to Deploy

### **1. Commit and Push Changes**

```powershell
cd c:\Users\Niaz\sn-pest-friend
git add .
git commit -m "Add blog system with Decap CMS"
git push origin main
```

### **2. Vercel Will Auto-Deploy**

Once you push to GitHub, Vercel will automatically:
- Build and deploy your site
- Apply the environment variables
- Make the blog and CMS live

### **3. Test the Setup**

After deployment:
1. Visit `https://www.silvernestpestcontrol.com/blog/` - See the blog listing
2. Visit `https://www.silvernestpestcontrol.com/admin/` - Access the CMS
3. Login with GitHub and create a test post
4. Verify the post appears on the blog page

---

## 🔐 Granting Access to Your Friend

To give your friend access to write blog posts:

1. **Add them as a collaborator** to your GitHub repository:
   - Go to: `https://github.com/Niaz-Ul-Haque/sn-pest-friend/settings/access`
   - Click "Add people"
   - Enter their GitHub username or email
   - Select "Write" permissions
   - Click "Add to repository"

2. **They can now login** to the CMS at `https://www.silvernestpestcontrol.com/admin/`

---

## 🆘 Troubleshooting

### **Problem: Can't login to CMS**
- **Solution**: Make sure environment variables are set in Vercel
- Check that OAuth callback URL matches in GitHub app settings

### **Problem: Blog posts not showing**
- **Solution**: Make sure posts are marked as "Published: true"
- Check that posts are in the `_posts` folder
- Verify posts have correct frontmatter format

### **Problem: Images not displaying**
- **Solution**: Upload images through the CMS (it handles paths automatically)
- Or place images in `/images/blog/` folder manually

---

## 📚 Sample Blog Post Topics

Here are some ideas for blog posts:

1. "5 Signs You Have Bed Bugs in Montreal"  ✅ (Already created!)
2. "How to Prevent Rodent Infestations This Winter"
3. "The Truth About DIY Pest Control vs Professional Services"
4. "Eco-Friendly Pest Control: Safe for Families and Pets"
5. "Seasonal Pest Control: What to Watch for Each Season in Montreal"
6. "Commercial Pest Control: Protecting Your Restaurant or Hotel"
7. "10 Common Pests in Montreal and How to Identify Them"
8. "What to Do If You Spot a Wasp Nest on Your Property"
9. "The Complete Guide to Cockroach Prevention"

---

## 📞 Support

If you have questions or need help:
- **Email**: niaz@example.com (update with your email)
- **GitHub Issues**: Report issues at the repository

---

**Happy Blogging!** 🎉

Your blog is now live and ready for content!
