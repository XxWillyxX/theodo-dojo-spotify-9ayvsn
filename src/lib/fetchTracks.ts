const apiToken: string = 'BQA6sQw4Zo1ZaaF5CoXPQKyVjyu0ZDchDEd_S4xDY0zP3b1GBCt7vBzuVQH2GJ3aeBnofNHBIJdHEOYE3G9f6YdT0ZXV5QNF0BAwkFWPXq45yDv8wQmmDHOEjJDSn3m0ZLhbdrlypwsuthNOBBta7dclpN085OIxI7FAX8E2fD62Ux8FYNjL-AETCNX6-DXWz8zyNaFQYC12cQbR3Hjs9cwQiA';


export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};