import axios from "axios";
import SpotifyAuthToken from "./spotifyAuthToken"
import { SpotifyJsonType } from "../../types/types";

const spotifyFetchSearch = async (query: string) => {
    try {
        const result = await SpotifyAuthToken()
        const searchResponse= await axios.get(`https://api.spotify.com/v1/search`, {
        headers: {
            Authorization: `Bearer ${result}`,
        },
        params: {
            q: query,
            type: 'track',
            limit: 10
        },
        });

        return searchResponse.data;
      
    } catch {
        return({status: 500})
    }
}

export default spotifyFetchSearch;