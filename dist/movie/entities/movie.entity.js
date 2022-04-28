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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const class_validator_1 = require("class-validator");
const core_entitiy_1 = require("../../common/entities/core.entitiy");
const movie_director_entity_1 = require("../../movie-director/entities/movie-director.entity");
const typeorm_1 = require("typeorm");
let Movie = class Movie extends core_entitiy_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Movie.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Movie.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => movie_director_entity_1.MovieDirector, (moviedirector) => moviedirector.movies, {
        onDelete: "SET NULL",
    }),
    __metadata("design:type", movie_director_entity_1.MovieDirector)
], Movie.prototype, "moviedirector", void 0);
Movie = __decorate([
    (0, typeorm_1.Entity)()
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movie.entity.js.map