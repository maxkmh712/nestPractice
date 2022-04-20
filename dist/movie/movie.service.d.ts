import { Repository } from "typeorm";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Movie } from "./entities/movie.entity";
export declare class MovieService {
    private readonly movieRepository;
    constructor(movieRepository: Repository<Movie>);
    createMovie(createMovieDto: CreateMovieDto): Promise<void>;
    findAll(): Promise<Movie[]>;
    findOne(id: string): Promise<Movie>;
    update(id: any, updateMovieDto: UpdateMovieDto): Promise<Movie>;
    deleteOne(id: string): Promise<void>;
}
