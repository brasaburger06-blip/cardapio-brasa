
export type ProductVariation = {
    imageUrl?: string;
    category: string;
    price?: string;
    description?: string | null;
    status: boolean;
};


export type ProductType = {
    id: string;
    name: string;
    typeMenu: boolean;
    imageUrl?: string;
    imageUrlPry?: string;
    categoryTitle: string;
    variations: ProductVariation[];


};
