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
    images:Array<string>;
    category: CategoryProduct
}