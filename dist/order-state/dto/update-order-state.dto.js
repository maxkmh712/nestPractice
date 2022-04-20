"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderStateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_order_state_dto_1 = require("./create-order-state.dto");
class UpdateOrderStateDto extends (0, swagger_1.PartialType)(create_order_state_dto_1.CreateOrderStateDto) {
}
exports.UpdateOrderStateDto = UpdateOrderStateDto;
//# sourceMappingURL=update-order-state.dto.js.map