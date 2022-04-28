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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoStrategy = void 0;
const dotenv_1 = require("dotenv");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_kakao_1 = require("passport-kakao");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_2 = require("typeorm");
(0, dotenv_1.config)();
let KakaoStrategy = class KakaoStrategy extends (0, passport_1.PassportStrategy)(passport_kakao_1.Strategy, "kakao") {
    constructor(usersRepository) {
        super({
            clientID: "1d5a9351679231555b4398177f99f927",
            clientSecret: "",
            redirect_uri: "http://127.0.0.1:3000/auth/login/kakao",
        });
        this.usersRepository = usersRepository;
    }
    async validate(accessToken, refreshToken, profile, done) {
        if (!profile)
            throw new common_1.UnauthorizedException();
        const { id, provider, username, email } = profile;
        let changedId = null;
        if (typeof id !== "string") {
            changedId = Number(id);
        }
        else
            changedId = id;
        const exist = await this.usersRepository.findOne({
            where: { provider: "kakao", email: email },
        });
        if (exist) {
            const rest = __rest(exist, []);
            return done(null, rest);
        }
        let user = await this.usersRepository.save({
            email: profile._json &&
                profile._json.kakao_account.has_email &&
                profile._json.kakao_account.email,
            nickname: username,
            password: null,
            snsId: changedId,
            provider,
        });
        let rest = __rest(user, []);
        return done(null, rest);
    }
};
KakaoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KakaoStrategy);
exports.KakaoStrategy = KakaoStrategy;
//# sourceMappingURL=kakao.strategy.js.map