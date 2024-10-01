//youtube data api v3
'use server'
import axios from "axios"
import { VideoItems } from "../../types/types"


const callYoutubeEmbed = async (title: string, artist: string) => {
    try {
        const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
        const query = `${title} by ${artist} - topic`
        const url = 'https://www.googleapis.com/youtube/v3/search'
            const response = await axios.get(url, {
                params: {
                    key: YOUTUBE_API_KEY,
                    part: 'snippet',
                    q: query,
                    type: 'video',
                    maxResults: 1,
                    videoCategoryId: '10'
                }
            })            
            const videoItem: VideoItems[] = response.data.items
            if (videoItem.length === 0) {
                console.log('No videos in query')
                return null
            } else {
                console.log('player id', videoItem[0].id.videoId)
                return (videoItem[0].id.videoId)
            }
    } catch (error) {
        console.log(error)
    }
    
}

export default callYoutubeEmbed;