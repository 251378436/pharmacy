export class Product {
    id: string;
    description: string;
    regularPrice: number;
    specialPrice: number;
    isHotProduct: boolean;
    categoryId: string;
    photo: any;
    constructor(product: any = null) {
        this.id = product.id || '';
        this.description = product.description || '';
        this.regularPrice = product.regularPrice;
        this.specialPrice = product.specialPrice;
        this.isHotProduct = product.isHotProduct || false;
        this.categoryId = product.categoryId || '';
        this.photo= product.photo;
    }

    get photoUrl() {
        return require(`@/assets/${this.photo}.png`);
    }

    get currentPrice() {
        return this.specialPrice ? this.specialPrice : this.regularPrice;
    }
}