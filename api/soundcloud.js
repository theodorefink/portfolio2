 export default async function handler(req, res) {
    const client_id = 'pBOtnFXSovQGu3Xby3dIdgbSXj1EgVS0'; //last update 4th Sep
    const { path } = req.query;
  
    const fullUrl = `https://api-v2.soundcloud.com/${path}?client_id=${client_id}`;
  
    try {
      const response = await fetch(fullUrl);
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch from SoundCloud' });
    }
  }

  