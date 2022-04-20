import { CoreEntity } from "src/common/entities/core.entitiy";
import { MovieDirector } from "src/movie-director/entities/movie-director.entity";
export declare class Movie extends CoreEntity {
    title: string;
    director: string;
    year: number;
    moviedirector: MovieDirector;
}
