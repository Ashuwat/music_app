export type DataType = {
    current: {
        url: string;
        name:string;
        artists: string;
        videoId: string;
    },
    Queue: {
        url: string;
        name:string;
        artists: string;
        index: number;
    }[],
    play: boolean,
    groupCode: string,
    username: string
}

export type SpotifyJsonType = {
    id: string;
    name: string;
    artists: { name: string }[];
    album: {
        name: string;
        images: { url: string }[];
    };
    preview_url: string;
    explicit: boolean;
}

//FIX THIS TYPE PLSS (actually I don't think i need this wait)
export type Spotify = any

export type VideoItems = {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            default: {
                url: string;
            };
    };
  };
}

export type RGB = 
    [
        number: Number, 
        number: Number, 
        number: Number, 
        number: Number
    ]
