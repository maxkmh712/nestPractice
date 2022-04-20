import { MovieService } from "./movie.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Movie } from "./entities/movie.entity";
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    create(movieDate: CreateMovieDto): Promise<void>;
    findAll(): Promise<Movie[]>;
    findOne(movieId: string): Promise<Movie>;
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie>;
    deleteMovie(movieId: string): Promise<Movie>;
}
