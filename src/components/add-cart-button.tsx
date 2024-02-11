import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type AddCartButtonProps = TouchableOpacityProps & {
    children: ReactNode;
};

type ButtonTextProps = {
    children: ReactNode;
};

type ButtonIconProps = {
    children: ReactNode;
};

function AddCartButton({ children, ...rest }: AddCartButtonProps) {
    return (
        <TouchableOpacity
            {...rest}
            className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row opacity-70"
        >
            {children}
        </TouchableOpacity>
    );
}

function ButtonText({ children }: ButtonTextProps) {
    return <Text className="text-black font-subtitle text-base mx-2">{children}</Text>;
}

function ButtonIcon({ children }: ButtonIconProps) {
    return children;
}

AddCartButton.Text = ButtonText;
AddCartButton.Icon = ButtonIcon;

export { AddCartButton };
