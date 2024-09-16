// import 'server-only'
'use server'
import axios from "axios"
import { URLSearchParams } from 'url'

const SpotifyAuthToken = async () => {

    const url = 'https://accounts.spotify.com/api/token'
    const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET; 

    if (SPOTIFY_CLIENT_ID && SPOTIFY_CLIENT_SECRET) {
        const authResponse = await axios.post(url, null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
            },
            params: {
                grant_type: 'client_credentials'
            },
        });

        const token:string = authResponse.data.access_token
        console.log(token)
        return token;
    }
}

export default SpotifyAuthToken;