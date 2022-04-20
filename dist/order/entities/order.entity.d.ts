import { CoreEntity } from "src/common/entities/core.entitiy";
export declare class Order extends CoreEntity {
    buyerFee: number;
    cancelDate: Date;
    price: number;
    code: string;
    type: string;
    freePointDiscount: number;
    confirmDate: Date;
    isCancel: boolean;
    isConfirm: boolean;
    isGroupOrder: boolean;
    isPayback: boolean;
    pixelPointDiscount: number;
}
