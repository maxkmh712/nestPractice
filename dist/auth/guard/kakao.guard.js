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
exports.KakaoGuard = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const base_guard_1 = require("../../common/guard/base.guard");
const auth_error_1 = require("../error/auth.error");
let KakaoGuard = class KakaoGuard extends base_guard_1.BaseGuard {
    constructor(authError) {
        super();
        this.authError = authError;
    }
    async handleRequest(context) {
        try {
            const request = context.switchToHttp().getRequest();
            console.log("1");
            const kakao = await this._getTokenKakao(request.query);
            console.log("2");
            console.log(kakao);
            return kakao.kakao_account.email;
        }
        catch (error) {
            throw new common_1.BadRequestException(this.authError.errorHandler(error.message));
        }
    }
    async _getTokenKakao(query) {
        try {
            const { code } = query;
            const tokenRequest = await axios_1.default
                .post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=336bd9d260649e0cf6748a8021e30879&redirect_uri=http://127.0.0.1:3000/auth/login/kakao&code=${code}`, {
                headers: {
                    Content_type: "application/x-www-form-urlencoded;charset=utf-8",
                },
            })
                .then((res) => res.data)
                .catch((e) => console.log(e.response.data));
            console.log("3");
            const userInfoKakao = await axios_1.default
                .get("https://kapi.kakao.com/v2/user/me", {
                headers: {
                    Authorization: `Bearer ${tokenRequest.access_token}`,
                },
            })
                .then((res) => res.data)
                .catch((e) => console.log(e.response.data));
            console.log("4");
            return userInfoKakao;
        }
        catch (error) {
            throw new common_1.UnauthorizedException("에ㅐ러!");
        }
    }
};
KakaoGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_error_1.AuthError])
], KakaoGuard);
exports.KakaoGuard = KakaoGuard;
//# sourceMappingURL=kakao.guard.js.map