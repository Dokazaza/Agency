import React from "react";
import Image from "next/image";


type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: "btn_dark_blue" | "btn_blue" | "btn_white_text" | "btn_white" | "btn_dark_blue_outline";
    full?: boolean;
}

const Button = ({type, title, icon, variant, full}: ButtonProps) => {
    return (
        <button
            className={`font-serif flexCenter gap-3 rounded-2xl border ${variant} ${full && "w-full"}`}
            type={type}>
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label className="bold-16 whitespace-nowrap cursor-pointer">
                {title}
            </label>
        </button>
    )
}

export default Button;