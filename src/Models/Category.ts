export class Category {
    id: string;
    displayName: string;
    constructor(category: any = null) {
        this.id = category.id || '';
        this.displayName = category.displayName || '';
    }
}

