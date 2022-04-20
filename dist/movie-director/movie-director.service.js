"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDirectorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movie_director_entity_1 = require("./entities/movie-director.entity");
let MovieDirectorService = class MovieDirectorService {
    constructor(moviedirectorRepository) {
        this.moviedirectorRepository = moviedirectorRepository;
        this.moviedirectorRepository = moviedirectorRepository;
    }
    async createMovieDirector(createMovieDirectorDto) {
        const moviedirector = new movie_director_entity_1.MovieDirector();
        moviedirector.name = createMovieDirectorDto.name;
        moviedirector.age = createMovieDirectorDto.age;
        moviedirector.movies = createMovieDirectorDto.movies;
        await this.moviedirectorRepository.save(moviedirector);
    }
    findAll() {
        return `This action returns all movieDirector`;
    }
    findOne(id) {
        return `This action returns a #${id} movieDirector`;
    }
    update(id, updateMovieDirectorDto) {
        return `This action updates a #${id} movieDirector`;
    }
    remove(id) {
        return `This action removes a #${id} movieDirector`;
    }
};
MovieDirectorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_director_entity_1.MovieDirector)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovieDirectorService);
exports.MovieDirectorService = MovieDirectorService;
//# sourceMappingURL=movie-director.service.js.map