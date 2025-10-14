module.exports = async (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }
  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        code: code,
      }),
    });
    const data = await tokenResponse.json();
    if (data.error) {
      return res.status(400).json({ error: data.error_description });
    }
    const content = <html><body><script>(function() { window.opener.postMessage('authorization:github:success:' + JSON.stringify({token: 'ata.access_token', provider: 'github'}), '*'); })();</script></body></html>;
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(content);
  } catch (error) {
    console.error('OAuth error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};