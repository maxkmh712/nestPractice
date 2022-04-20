import { Repository } from "typeorm";
import { CreateMovieDirectorDto } from "./dto/create-movie-director.dto";
import { UpdateMovieDirectorDto } from "./dto/update-movie-director.dto";
import { MovieDirector } from "./entities/movie-director.entity";
export declare class MovieDirectorService {
    private readonly moviedirectorRepository;
    constructor(moviedirectorRepository: Repository<MovieDirector>);
    createMovieDirector(createMovieDirectorDto: CreateMovieDirectorDto): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMovieDirectorDto: UpdateMovieDirectorDto): string;
    remove(id: number): string;
}
