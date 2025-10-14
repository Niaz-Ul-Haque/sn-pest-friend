module.exports = async (req, res) => {
  const { OAUTH_CLIENT_ID } = process.env;
  
  if (!OAUTH_CLIENT_ID) {
    return res.status(500).json({ error: 'OAuth not configured - OAUTH_CLIENT_ID missing' });
  }

  // Get the redirect URI from the request or use default
  const redirectUri = `${req.headers.origin || 'https://www.silvernestpestcontrol.com'}/api/auth/callback`;
  
  // Build GitHub OAuth URL
  const authUrl = new URL('https://github.com/login/oauth/authorize');
  authUrl.searchParams.set('client_id', OAUTH_CLIENT_ID);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('scope', 'repo,user');
  
  // Redirect to GitHub
  res.writeHead(302, { Location: authUrl.toString() });
  res.end();
};
