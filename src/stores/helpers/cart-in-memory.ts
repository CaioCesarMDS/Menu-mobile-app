import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";

export const add = (products: ProductCartProps[], newProduct: ProductProps) => {
    const existingProduct = products.find((product) => product.id === newProduct.id);

    if (existingProduct) {
        return products.map((product) =>
            product.id === existingProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
        );
    }

    return [...products, { ...newProduct, quantity: 1 }];
};

export const remove = (products: ProductCartProps[], productToRemoveId: string) => {
    const updateProducts = products.map((product) =>
        product.id === productToRemoveId
            ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 0 }
            : product
    );

    return updateProducts.filter((product) => product.quantity > 0);
};
