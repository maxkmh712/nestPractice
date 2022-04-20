"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreError = void 0;
class CoreError {
    errorHandler(message) {
        const error = this.errorHandle[message];
        if (!error) {
            return {
                id: `Out.of.control.error`,
                message,
            };
        }
        return error;
    }
    getErrorHandle() {
        return this.errorHandle;
    }
    getDescription(handlers) {
        const description = handlers.reduce((acc, cur) => {
            const txt = `${this.errorHandle[cur].id} : ${this.errorHandle[cur].message}\n\n`;
            return acc + txt;
        }, "");
        return description;
    }
}
exports.CoreError = CoreError;
//# sourceMappingURL=common.error.js.map