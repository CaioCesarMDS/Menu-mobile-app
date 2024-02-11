import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ProductDataProps = {
    title: string;
    description: string;
    thumbnail: ImageProps;
};

type ProductProps = TouchableOpacityProps & {
    data: ProductDataProps;
};

export const Product = ({ data, ...rest }: ProductProps) => {
    return (
        <TouchableOpacity
            className="w-full flex-row items-center pb-4"
            {...rest}
        >
            <Image source={data.thumbnail} className="w-20 h-20 rounded-md"/>
            <View className="flex-1 ml-3">
                <Text className="flex-1 text-slate-100 font-subtitle text-base ">{data.title}</Text>
                <Text className="text-slate-400 text-xs leading-5 mt-0.5">{data.description}</Text>
            </View>
        </TouchableOpacity>
    );
};