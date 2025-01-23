import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number | string;
    price: number;
    product_price?: number;
    product_count?: number;
    image?: string;
    title?: string;
}

interface ProductState {
    product_list: Product[];
    count: number;
    totalPrice: number;
}

const initialState: ProductState = {
    product_list: [],
    count: 0,
    totalPrice: 0,
};

const productReducer = createSlice({
    name: "product",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.product_list.find(
                (item) => item.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.product_count =
                    (existingProduct.product_count ?? 0) + 1;
                existingProduct.product_price =
                    (existingProduct.product_count ?? 0) *
                    existingProduct.price;
            } else {
                state.product_list.push({
                    ...action.payload,
                    product_price: action.payload.price,
                    product_count: 1,
                });
            }

            state.totalPrice = state.product_list.reduce(
                (total, item) => total + (item.product_price ?? 0),
                0
            );
            state.count = state.product_list.length;
        },
        toggleAmount: (
            state,

            action: PayloadAction<{
                id: number | string;
                type: "increment" | "decrement";
            }>
        ) => {
            const product = state.product_list.find(
                (item) => item.id === action.payload.id
            );

            if (product) {
                if (action.payload.type === "increment") {
                    product.product_count = (product.product_count ?? 0) + 1;
                } else if (
                    action.payload.type === "decrement" &&
                    (product.product_count ?? 0) > 1
                ) {
                    product.product_count = (product.product_count ?? 0) - 1;
                }

                product.product_price =
                    (product.product_count ?? 0) * product.price;
            }

            state.totalPrice = state.product_list.reduce(
                (total, item) => total + (item.product_price ?? 0),
                0
            );
        },
        deleteProduct: (
            state,
            action: PayloadAction<{ id: number | string }>
        ) => {
            state.product_list = state.product_list.filter(
                (item) => item.id !== action.payload.id
            );

            state.totalPrice = state.product_list.reduce(
                (total, item) => total + (item.product_price ?? 0),
                0
            );
            state.count = state.product_list.length;
        },
        totalCount: (state) => {
            state.count = state.product_list.length;
        },
    },
});

export default productReducer.reducer;
export const { addCart, toggleAmount, deleteProduct, totalCount } =
    productReducer.actions;
