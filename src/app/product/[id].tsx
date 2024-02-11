import { AddCartButton } from "@/components/add-cart-button";
import { ReturnButton } from "@/components/return-button";
import { useCartStore } from "@/stores/cart-store";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Feather } from "@expo/vector-icons";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { Image, Text, View } from "react-native";

const Product = () => {
    const { id } = useLocalSearchParams();

    const cartStore = useCartStore();

    const navigation = useNavigation();

    const product = PRODUCTS.find((item) => item.id === id);

    function handleAddToCart() {
        if (product) {
            cartStore.addProduct(product);
            navigation.goBack();
        }
    }

    if (!product) {
        return <Redirect href="/" />;
    }

    return (
        <View className="flex-1 relative">
            <Image source={product.cover} className="w-full h-52" resizeMode="cover" />
            <ReturnButton href="/" title="Voltar" />
            <View className="p-5 mt-4 flex-1">
                <Text className="text-lime-400 text-xl font-heading">
                    {product.title}
                </Text>
                <Text className="text-slate-400 text-base leading-6 font-body mt-3">
                    {product.description}
                </Text>
                <Text className="text-lime-400  text-2xl font-heading mt-6">
                    {formatCurrency(product.price)}
                </Text>
                <Text className="text-slate-100 text-xl  font-subtitle mt-6 mb-3">
                    Ingredientes:
                </Text>
                {product.ingredients.map((ingredient) => (
                    <Text
                        key={ingredient}
                        className="text-slate-400 text-base font-body  leading-6 "
                    >
                        {`\u2022 ${ingredient}`}
                    </Text>
                ))}
            </View>
            <View className="p-5 pb-8 gap-5">
                <AddCartButton onPress={handleAddToCart}>
                    <AddCartButton.Icon>
                        <Feather name="plus-circle" size={16} />
                    </AddCartButton.Icon>
                    <AddCartButton.Text>Adicionar ao pedido</AddCartButton.Text>
                </AddCartButton>
            </View>
        </View>
    );
};

export default Product;
