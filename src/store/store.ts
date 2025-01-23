import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
} from "@reduxjs/toolkit";
import productReducer, {
    addCart,
    deleteProduct,
    totalCount,
} from "@/slice/slice";
import { loadState, saveState } from "@/storage/page";

const totalCountMiddleware = createListenerMiddleware();

totalCountMiddleware.startListening({
    matcher: isAnyOf(addCart, deleteProduct),
    effect: (action, api) => {
        api.dispatch(totalCount());
    },
});

const preloadedState = (() => {
    try {
        const savedState = loadState("products");

        return savedState || { product_list: [], count: 0, totalPrice: 0 };
    } catch (error) {
        return { product_list: [], count: 0, totalPrice: 0 };
    }
})();

export const store = configureStore({
    reducer: {
        product: productReducer,
    },
    preloadedState: {
        product: preloadedState,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(totalCountMiddleware.middleware),
});

store.subscribe(() => {
    try {
        saveState("products", store.getState().product);
    } catch (error) {
        console.error("Failed to save state:", error);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
