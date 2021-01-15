import { Artist } from "./artist";
import { Track } from "./track";

export class Album {
    id: number;
    title: string;
    cover_xl: string; //pic
    genre: string; //genres:data[0]:name
    release_date: Date;
    artist: Artist;
    tracks: Track[] = new Array()
}
