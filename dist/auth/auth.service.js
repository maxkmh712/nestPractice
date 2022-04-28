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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const auth_error_1 = require("./error/auth.error");
const roles_enum_1 = require("../users/entities/roles.enum");
let AuthService = class AuthService {
    constructor(jwtService, authError, usersRepository) {
        this.jwtService = jwtService;
        this.authError = authError;
        this.usersRepository = usersRepository;
    }
    async validateUser(username, password) {
        const user = await this.usersRepository.findOneBy({
            username,
        });
        if (!user) {
            throw Error(auth_error_1.AUTH_ERROR.USER_NOT_CONNECT);
        }
        const valid = await this.isHashValid(password, user.password);
        if (!valid) {
            throw Error(auth_error_1.AUTH_ERROR.USER_NOT_CONNECT);
        }
        return user;
    }
    async googleLogin(req) {
        try {
            if (!req.user) {
                throw Error(auth_error_1.AUTH_ERROR.USER_NOT_CONNECT);
            }
            const user = await this.usersRepository.findOneBy({
                email: req.user.email,
            });
            if (!user) {
                throw Error(auth_error_1.AUTH_ERROR.USER_NOT_CONNECT);
            }
        }
        catch (error) {
            console.log(error);
            return this.authError.errorHandler(error.message);
        }
    }
    async kakaoLogin(email) {
        try {
            let user = await this.usersRepository.findOneBy({ email: email });
            if (!user) {
                user = await this.usersRepository.create({
                    username: "test",
                    email,
                    provider: "kakao",
                    password: null,
                    role: roles_enum_1.Role.USER,
                });
            }
            const payload = {
                id: user.id,
            };
            return Object.assign(Object.assign({}, user), { jwt: this.jwtService.sign(payload) });
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(this.authError.errorHandler(error.message));
        }
    }
    async login(user) {
        try {
            const payload = {
                username: user.username,
                sub: user.id,
            };
            const users = await this.usersRepository.findOneBy({
                username: user.username,
            });
            if (!users) {
                throw Error(auth_error_1.AUTH_ERROR.USER_NOT_CONNECT);
            }
            return {
                jwt: this.jwtService.sign(payload),
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(this.authError.errorHandler(error.message));
        }
    }
    async isHashValid(password, hashPassword) {
        return await bcrypt.compare(password, hashPassword);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        auth_error_1.AuthError,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map