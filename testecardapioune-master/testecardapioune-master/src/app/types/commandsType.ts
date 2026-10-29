import { ProductType } from "./ProductTypes";

export type commandType = {
    id: string;
    tame: string;
    price: string | null;
    itens: ProductType[];
    open: boolean;

}   