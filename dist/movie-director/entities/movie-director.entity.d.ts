import { CoreEntity } from "src/common/entities/core.entitiy";
import { Movie } from "src/movie/entities/movie.entity";
export declare class MovieDirector extends CoreEntity {
    name: string;
    age: number;
    movies: Movie[];
}
