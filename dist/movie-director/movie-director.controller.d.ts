import { MovieDirectorService } from "./movie-director.service";
import { CreateMovieDirectorDto } from "./dto/create-movie-director.dto";
import { UpdateMovieDirectorDto } from "./dto/update-movie-director.dto";
export declare class MovieDirectorController {
    private readonly movieDirectorService;
    constructor(movieDirectorService: MovieDirectorService);
    create(createMovieDirectorDto: CreateMovieDirectorDto): Promise<void>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMovieDirectorDto: UpdateMovieDirectorDto): string;
    remove(id: string): string;
}
