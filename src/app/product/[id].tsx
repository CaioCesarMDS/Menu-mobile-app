import { AddCartButton } from "@/components/add-cart-button";
import { ReturnButton } from "@/components/return-button";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

const Product = () => {
    const { id } = useLocalSearchParams();

    const product = PRODUCTS.filter((item) => item.id === id)[0];

    return (
        <View className="flex-1 relative">
            <Image source={product.cover} className="w-full h-52" resizeMode="cover" />
            <ReturnButton href="/" title="Voltar" />
            <View className="p-5 mt-4 flex-1">
                <Text className="text-lime-400 text-2xl font-heading">
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
                <AddCartButton>
                    <AddCartButton.Icon>
                        <Feather name="plus-circle" size={16} color="#000" />
                    </AddCartButton.Icon>
                    <AddCartButton.Text>Adicionar ao pedido</AddCartButton.Text>
                </AddCartButton>
            </View>
        </View>
    );
};

export default Product;
