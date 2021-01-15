import { Album } from "./album";
import { Artist } from "./artist";

export class Track {
    id: number;
    title: string;
    preview: string;
    album: Album;
    artist: Artist
}

