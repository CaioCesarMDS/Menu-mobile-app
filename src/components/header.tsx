import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import colors from "tailwindcss/colors";
import { CartIcon } from "./cartIcon";

type HeaderProps = {
    title: string;
    cartQuantityItems?: number;
};

export const Header = ({ title, cartQuantityItems = 0 }: HeaderProps) => {
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1">
                <Image
                    source={require("@/assets/logo.png")}
                    alt="Logo"
                    className="w-32 h-6"
                />
                <Text className="text-white text-xl font-heading pt-2 ">{title}</Text>
            </View>

            <Link href={"/cart"} asChild>
                {cartQuantityItems > 0 ? (
                    <CartIcon className="relative">
                        <View className="bg-lime-400 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5 opacity-90">
                            <CartIcon.QuantityIcon>
                                {cartQuantityItems}
                            </CartIcon.QuantityIcon>
                        </View>
                        <CartIcon.Icon>
                            <Feather name="shopping-bag" size={24} color={colors.white} />
                        </CartIcon.Icon>
                    </CartIcon>
                ) : (
                    <Link href={"/"} asChild>
                        <CartIcon className="pt-4">
                            <CartIcon.Icon>
                                <View className="bg-red-500 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5 opacity-90">
                                    <CartIcon.QuantityIcon>
                                        <Feather
                                            name="x"
                                            size={12}
                                            color={colors.white}
                                        />
                                    </CartIcon.QuantityIcon>
                                </View>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color={colors.white}
                                />
                            </CartIcon.Icon>
                        </CartIcon>
                    </Link>
                )}
            </Link>
        </View>
    );
};
