import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

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
                    <TouchableOpacity className="relative">
                        <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5 opacity-90">
                            <Text className="text-slate-950 font-bold text-xs ">
                                {cartQuantityItems}
                            </Text>
                        </View>

                        <Feather name="shopping-bag" size={24} color={colors.white} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity className="pt-4">
                        <Feather name="shopping-bag" size={24} color={colors.white} />
                    </TouchableOpacity>
                )}
            </Link>
        </View>
    );
};
