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
exports.Order = void 0;
const class_validator_1 = require("class-validator");
const core_entitiy_1 = require("../../common/entities/core.entitiy");
const typeorm_1 = require("typeorm");
let Order = class Order extends core_entitiy_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Order.prototype, "buyerFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Order.prototype, "cancelDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Order.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Order.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Order.prototype, "freePointDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Order.prototype, "confirmDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Order.prototype, "isCancel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Order.prototype, "isConfirm", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Order.prototype, "isGroupOrder", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Order.prototype, "isPayback", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Order.prototype, "pixelPointDiscount", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map