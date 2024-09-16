export type DataType = {
    url: string | undefined;
    animatetype:string | undefined;
    groupCode: number | undefined;
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

//FIX THIS TYPE PLSS
export type Spotify = any