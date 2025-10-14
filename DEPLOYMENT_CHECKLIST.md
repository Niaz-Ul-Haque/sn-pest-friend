# 🚀 Deployment Checklist - SN Pest Control Blog

## ✅ Pre-Deployment Checklist

### 1. **GitHub OAuth App** ✅ DONE
- [x] Created GitHub OAuth App
- [x] Set Homepage URL: `https://www.silvernestpestcontrol.com`
- [x] Set Callback URL: `https://www.silvernestpestcontrol.com/api/auth/callback`
- [x] Copied Client ID and Client Secret

### 2. **Vercel Environment Variables** ✅ DONE
- [x] Added `OAUTH_CLIENT_ID` to Vercel
- [x] Added `OAUTH_CLIENT_SECRET` to Vercel
- [x] Set variables for Production, Preview, and Development

### 3. **Files Created** ✅ DONE
- [x] `/admin/index.html` - CMS admin interface
- [x] `/admin/config.yml` - CMS configuration
- [x] `/api/auth/index.js` - OAuth initiator
- [x] `/api/auth/callback.js` - OAuth callback handler
- [x] `/blog/index.html` - Blog listing page
- [x] `/blog/post.html` - Blog post template
- [x] `/blog/blog.js` - Blog loading logic
- [x] `/_posts/2025-10-14-bed-bug-signs-montreal.md` - Sample post
- [x] `/images/blog/` - Blog images directory
- [x] Updated main navigation with Blog link

---

## 📤 Deployment Steps

### **Step 1: Commit All Changes to Git**

Run these commands in PowerShell:

```powershell
cd c:\Users\Niaz\sn-pest-friend

# Check what files will be committed
git status

# Add all new files
git add .

# Commit with a descriptive message
git commit -m "Add blog system with Decap CMS

- Added Decap CMS admin interface at /admin
- Created blog listing and post pages at /blog
- Added OAuth authentication handlers at /api/auth
- Created sample blog post about bed bugs
- Updated main navigation with Blog link
- Added bilingual support (English/French)"

# Push to GitHub
git push origin main
```

### **Step 2: Verify Deployment on Vercel**

1. Go to your Vercel dashboard: `https://vercel.com/dashboard`
2. Find your project: `sn-pest-friend`
3. Wait for the deployment to complete (usually 1-2 minutes)
4. Look for the green ✅ checkmark

### **Step 3: Test the Blog**

Once deployed, test these URLs:

#### **Test 1: Blog Listing Page**
- URL: `https://www.silvernestpestcontrol.com/blog/`
- Expected: Should show blog listing with 1 sample post
- ✅ Pass / ❌ Fail: ___________

#### **Test 2: Sample Blog Post**
- URL: Click on the sample post from the blog listing
- Expected: Should show full blog post content in English/French
- ✅ Pass / ❌ Fail: ___________

#### **Test 3: CMS Admin Access**
- URL: `https://www.silvernestpestcontrol.com/admin/`
- Expected: Should show "Login with GitHub" button
- ✅ Pass / ❌ Fail: ___________

#### **Test 4: CMS Login**
- Click "Login with GitHub"
- Expected: Redirects to GitHub, then back to CMS dashboard
- ✅ Pass / ❌ Fail: ___________

#### **Test 5: Create a Test Post**
- In CMS, click "New Blog Posts"
- Fill in all fields
- Click "Publish"
- Expected: Post appears in blog listing
- ✅ Pass / ❌ Fail: ___________

### **Step 4: Grant Access to Your Friend**

To give your friend permission to write blog posts:

1. **Go to GitHub Repository Settings:**
   ```
   https://github.com/Niaz-Ul-Haque/sn-pest-friend/settings/access
   ```

2. **Add Collaborator:**
   - Click "Add people"
   - Enter their GitHub username or email
   - Grant "Write" permissions
   - Click "Add to repository"

3. **Send Them Instructions:**
   - Share the `BLOG_INSTRUCTIONS.md` file
   - Give them the admin URL: `https://www.silvernestpestcontrol.com/admin/`
   - Let them know they need a GitHub account

---

## 🐛 Troubleshooting Guide

### **Problem: "Login with GitHub" not working**

**Possible Causes:**
1. Environment variables not set in Vercel
2. OAuth callback URL mismatch

**Solutions:**
```
1. Check Vercel environment variables:
   - Go to Vercel project → Settings → Environment Variables
   - Verify OAUTH_CLIENT_ID and OAUTH_CLIENT_SECRET exist

2. Check GitHub OAuth app settings:
   - Go to: https://github.com/settings/developers
   - Verify callback URL: https://www.silvernestpestcontrol.com/api/auth/callback
   
3. Redeploy in Vercel:
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"
```

### **Problem: Blog posts not showing**

**Possible Causes:**
1. Posts not in `_posts` folder
2. Posts not marked as published
3. GitHub API rate limit

**Solutions:**
```
1. Check _posts folder in GitHub:
   https://github.com/Niaz-Ul-Haque/sn-pest-friend/tree/main/_posts
   
2. Open post file, verify:
   published: true
   
3. Wait a few minutes and refresh (GitHub API has rate limits)
```

### **Problem: Images not displaying**

**Possible Causes:**
1. Image path incorrect
2. Image not uploaded to GitHub

**Solutions:**
```
1. Upload images through CMS (recommended)
   - The CMS automatically handles paths correctly
   
2. Or manually add to /images/blog/ folder
   - Use path: /images/blog/your-image.jpg
```

### **Problem: Changes not appearing after publish**

**Possible Causes:**
1. Browser cache
2. CDN cache
3. Git commit not pushed

**Solutions:**
```
1. Hard refresh browser:
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R
   
2. Check GitHub:
   - Verify your commit is on GitHub
   - Check if post file exists in _posts folder
   
3. Clear Vercel cache:
   - Go to Vercel dashboard
   - Redeploy the project
```

---

## 📊 Post-Deployment Monitoring

### **Things to Check Weekly:**

- [ ] Blog loads correctly
- [ ] New posts are appearing
- [ ] Images are loading
- [ ] CMS login working
- [ ] Both English and French content displaying properly

### **SEO Optimization:**

- [ ] Submit sitemap to Google Search Console
- [ ] Add blog URLs to sitemap.xml
- [ ] Monitor blog post performance in Google Analytics

---

## 📞 Need Help?

If you encounter issues:

1. **Check the logs:**
   - Vercel Dashboard → Deployments → View Function Logs
   - Look for any error messages

2. **Test locally first:**
   ```powershell
   # Run a local server to test
   python -m http.server 8000
   # Visit: http://localhost:8000/blog/
   ```

3. **GitHub Issues:**
   - Check if others have similar issues
   - Search: "Decap CMS" + your error message

---

## ✅ Deployment Complete!

Once all tests pass, your blog is live and ready! 🎉

**Share these URLs:**
- Blog: `https://www.silvernestpestcontrol.com/blog/`
- Admin: `https://www.silvernestpestcontrol.com/admin/`

**Next Steps:**
1. Create your first real blog post
2. Add more helpful content for your customers
3. Share posts on social media
4. Monitor traffic and engagement

---

**Good luck with your blog!** 🚀
