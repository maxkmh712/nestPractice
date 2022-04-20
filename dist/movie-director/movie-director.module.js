"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieDirectorModule = void 0;
const common_1 = require("@nestjs/common");
const movie_director_service_1 = require("./movie-director.service");
const movie_director_controller_1 = require("./movie-director.controller");
const typeorm_1 = require("@nestjs/typeorm");
const movie_entity_1 = require("../movie/entities/movie.entity");
const movie_director_entity_1 = require("./entities/movie-director.entity");
let MovieDirectorModule = class MovieDirectorModule {
};
MovieDirectorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([movie_director_entity_1.MovieDirector, movie_entity_1.Movie])],
        controllers: [movie_director_controller_1.MovieDirectorController],
        providers: [movie_director_service_1.MovieDirectorService],
        exports: [movie_director_service_1.MovieDirectorService],
    })
], MovieDirectorModule);
exports.MovieDirectorModule = MovieDirectorModule;
//# sourceMappingURL=movie-director.module.js.map