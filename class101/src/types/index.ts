export interface Product {
    id: string;
    title: string;
    coverImage: string;
    price: number;
    score: number;
    availableCoupon?: boolean;
}

export interface GlobalState {
    cart: Product[];
}

export interface Action {
    type: string;
    payload: Product | number;
}
