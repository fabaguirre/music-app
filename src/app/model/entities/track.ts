import { Album } from "./album";
import { Artist } from "./artist";

export class Track {
    id: number;
    title: string;
    preview: string;
    type: string;
    album: Album;
    artist: Artist
}

