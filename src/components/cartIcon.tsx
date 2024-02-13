import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type CartIconProps = TouchableOpacityProps & {
    children: ReactNode;
};

type IconProps = {
    children: ReactNode;
};

type QuantityIconProps = {
    children: ReactNode;
};

function CartIcon({ children, ...rest }: CartIconProps) {
    return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
}

function Icon({ children }: IconProps) {
    return children;
}

function QuantityIcon({ children }: QuantityIconProps) {
    return <Text className="text-slate-950 font-bold text-xs ">{children}</Text>;
}

CartIcon.Icon = Icon;
CartIcon.QuantityIcon = QuantityIcon;

export { CartIcon };
