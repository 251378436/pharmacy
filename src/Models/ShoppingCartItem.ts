import { Product } from '@/Models/Product';

export class ShoppingCartItem extends Product {
    quantity: number;
    constructor(output: any = null) {
        super(output);
        this.quantity = output.quantity;
    }

    get calculatedAmount() {
        return this.quantity * this.currentPrice;
    }
}