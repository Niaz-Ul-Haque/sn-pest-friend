module.exports = (req, res) => {
  // Redirect to GitHub OAuth
  const clientId = process.env.OAUTH_CLIENT_ID;
  const redirectUri = `${req.headers.origin || 'https://www.silvernestpestcontrol.com'}/api/auth/callback`;
  const scope = 'repo,user';
  
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
  
  res.writeHead(302, { Location: authUrl });
  res.end();
};
