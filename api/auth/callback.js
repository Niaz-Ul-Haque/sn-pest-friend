module.exports = async (req, res) => {
  const { code } = req.query;
  const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env;
  
  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided' });
  }

  if (!OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
    return res.status(500).json({ error: 'OAuth not configured' });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code: code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return res.status(400).json({ error: data.error_description || data.error });
    }

    // Return HTML that will send the token back to the CMS
    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Authorization Complete</title>
</head>
<body>
  <script>
    (function() {
      function receiveMessage(e) {
        console.log("receiveMessage", e);
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify({
            token: data.access_token,
            provider: 'github'
          })}',
          e.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      
      console.log("Posting message to opener");
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
  <p>Authorization complete. You can close this window.</p>
</body>
</html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    console.error('OAuth error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};