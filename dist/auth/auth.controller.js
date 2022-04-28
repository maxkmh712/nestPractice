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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const login_user_dto_1 = require("./dto/login-user.dto");
const auth_error_1 = require("./error/auth.error");
const kakao_guard_1 = require("./guard/kakao.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    getProfile(req) {
        return req.user;
    }
    async login(loginUserInput) {
        return await this.authService.login(loginUserInput);
    }
    async googleAuth(req) { }
    async googleAuthRedirect(req) {
        return await this.authService.googleLogin(req);
    }
    async getToken(query, req) {
        console.log("1");
        return this.authService.kakaoLogin(req["guard"]);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)("profile"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("local")),
    (0, common_1.Post)("local"),
    (0, swagger_1.ApiOperation)({ summary: "유저 로그인 API", description: "로컬 유저 로그인" }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "로컬 유저 로그인",
        type: login_user_dto_1.LoginUserOutput,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: new auth_error_1.AuthError().getDescription([auth_error_1.AUTH_ERROR.USER_NOT_CONNECT]),
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("google"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("google")),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)("google/callback"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("google")),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, common_1.Get)("/login/kakao"),
    (0, common_1.UseGuards)(kakao_guard_1.KakaoGuard),
    (0, swagger_1.ApiOperation)({
        summary: "카카오 토큰 확인",
        description: "access token과 refresh token 확인",
    }),
    (0, swagger_1.ApiOkResponse)({ description: "access token 과 refresh 토큰 발급 완료" }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getToken", null);
AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Auth API"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map