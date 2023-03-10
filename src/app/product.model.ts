export interface CategoryProduct{
    id: number;
    name: string;
    typeImg: string;
}

export interface Product {
    id?:number
    description: string
    title:string
    price: number
    images:string[];
    category: CategoryProduct
}