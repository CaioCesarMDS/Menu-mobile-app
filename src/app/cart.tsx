import { AddCartButton } from "@/components/add-cart-button";
import { Header } from "@/components/header";
import { InputUserData } from "@/components/input-user-data";
import { Product } from "@/components/product";
import { ReturnButton } from "@/components/return-button";

import { ProductCartProps, useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";

import { Feather } from "@expo/vector-icons";
import { Alert, ScrollView, Text, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "tailwindcss/colors";

const Cart = () => {
    const cartStore = useCartStore();

    const total = formatCurrency(
        cartStore.products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        )
    );

    function handleProductRemove(product: ProductCartProps) {
        Alert.alert("Remover produto", `Deseja remover ${product.title} do carrinho?`, [
            {
                text: "Cancelar",
            },
            {
                text: "Remover",
                onPress: () => cartStore.removeProduct(product.id),
            },
        ]);
    }

    return (
        <View className="flex-1 pt-10">
            <Header title="Seu carrinho" />
            <ReturnButton
                title="Voltar"
                href="/"
                className="top-32 transform scale-110"
            />
            <KeyboardAwareScrollView>
                <ScrollView>
                    <View className="p-5 flex-1">
                        {cartStore.products.length > 0 ? (
                            <View className=" border-b border-slate-700 my-4 pt-2">
                                {cartStore.products.map((product) => (
                                    <Product
                                        key={product.id}
                                        data={product}
                                        onPress={() => handleProductRemove(product)}
                                    />
                                ))}
                            </View>
                        ) : (
                            <View className="flex-1 justify-center items-center mt-52">
                                <Feather
                                    name="shopping-cart"
                                    size={32}
                                    color={colors.white}
                                />
                                <Text className="font-body text-white text-base my-8">
                                    Seu carrinho está vazio
                                </Text>
                            </View>
                        )}
                        {cartStore.products.length > 0 ? (
                            <View>
                                <View className="flex-row gap-2 items-center mb-4 ml-4">
                                    <Text className="text-white text-xl font-subtitle">
                                        Total:
                                    </Text>
                                    <Text className="text-lime-400 text-2xl font-heading">
                                        {total}
                                    </Text>
                                </View>
                                <InputUserData placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento." />
                            </View>
                        ) : (
                            <></>
                        )}
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
            {cartStore.products.length > 0 ? (
                <View className="p-5 gap-5">
                    <AddCartButton>
                        <AddCartButton.Text>Enviar pedido</AddCartButton.Text>
                        <AddCartButton.Icon>
                            <Feather name="arrow-right-circle" size={20} />
                        </AddCartButton.Icon>
                    </AddCartButton>
                </View>
            ) : (
                <View className="p-5 gap-5">
                    <AddCartButton className="bg-gray-300" disabled>
                        <AddCartButton.Text>Enviar pedido</AddCartButton.Text>
                        <AddCartButton.Icon>
                            <Feather name="arrow-right-circle" size={20} />
                        </AddCartButton.Icon>
                    </AddCartButton>
                </View>
            )}
        </View>
    );
};

export default Cart;
