import { Feather } from "@expo/vector-icons";
import { Link, LinkProps } from "expo-router";

type ReturnButtonProps = LinkProps<string> & {
    title: string;
};

export const ReturnButton = ({ title, ...rest }: ReturnButtonProps) => {
    return (
        <Link
            className="text-slate-300 text-center text-base font-body absolute z-10 top-12 left-4"
            {...rest}
        >
            {" "}
            <Feather name="arrow-left" size={24} />
        </Link>
    );
};
