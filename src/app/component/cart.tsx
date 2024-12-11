"use client"
import { Drawer } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Cart() {

    const { state, dispatch } = useCart();
    const router = useRouter();

    const handleRemoveItem = (id: string, size: string) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: { id, size },
        });
    };

    const handleUpdateQuantity = (id: string, size: string, quantity: number) => {
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: { id, size, quantity },
        });
    };

    const totalPrice = state.items.reduce(
        (total, item) => total + item.rental * item.quantity,
        0
    );

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.matchMedia("(max-width: 1200px)").matches); // lg breakpoint
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleCart = () => {
        dispatch({ type: "TOGGLE_CART" });
    };

    const handleCheckout = () => {
        toggleCart();
        dispatch({ type: "TOGGLE_RENT" });
    };

    return (
        <div>
            <Drawer
                anchor={isSmallScreen ? "top" : "right"}
                open={state.isCartOpen}
                onClose={toggleCart}
                PaperProps={{
                    sx: {
                        height: isSmallScreen ? 600 : "100%",
                        width: isSmallScreen ? "100%" : 600,
                        padding: 2,
                        backgroundColor: "#FEFAF3"
                    },
                }}
            >
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                        <div className="font-beautiqueBlack text-[20px] lg:text-[32px]">Cart</div>
                        <div className="text-[12px] lg:text-[14px]">({state.items.length} Item{state.items.length > 1 ? "s" : ""})</div>
                    </div>
                    <div className="cursor-pointer h-6 w-6 rounded-full border-2 font-bold border-macaronidark flex flex-col items-center justify-center text-xs" onClick={toggleCart}>
                        X
                    </div>
                </div>

                <p className="text-xs lg:text-sm text-gray-500">
                    FREE shipping will be applied at checkout
                </p>
                <hr className="my-4 border-gray-300" />

                <div className="flex-1">
                    {state.items.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        state.items.map((item) => (
                            <div key={item.id + item.size} className="flex items-center mb-4 gap-5">
                                <div className="shrink-0 w-[65px] h-[65px] lg:w-[100px] lg:h-[100px] rounded-lg">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full mr-4 object-cover rounded-lg"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="flex justify-between self-start w-full">
                                    <div>
                                        <h2 className="text-[12px] lg:text-[16px] font-medium font-beautiqueMed">
                                            {item.name}
                                        </h2>
                                        <p className="text-xs lg:text-sm text-gray-500 ">
                                            Size: {item.size}
                                        </p>
                                        <div className="flex gap-2 mt-4">
                                            <div
                                                className="select-none w-4 h-4 lg:w-5 lg:h-5 rounded-full flex flex-col items-center justify-center border-2 text-[10px] lg:text-xs cursor-pointer text-macaronidark3 border-macaronidark3"
                                                onClick={() =>
                                                    handleUpdateQuantity(
                                                        item.id,
                                                        item.size,
                                                        Math.max(1, item.quantity - 1)
                                                    )
                                                }
                                            >
                                                -
                                            </div>
                                            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full flex flex-col items-center justify-center border-2 text-[10px] lg:text-xs cursor-pointer text-macaronidark border-macaronidark">
                                                {item.quantity}
                                            </div>
                                            <div
                                                className="select-none w-4 h-4 lg:w-5 lg:h-5 rounded-full flex flex-col items-center justify-center border-2 text-[10px] lg:text-xs cursor-pointer text-macaronidark3 border-macaronidark3"
                                                onClick={() =>
                                                    handleUpdateQuantity(item.id, item.size, Math.min(item.maxquantity, item.quantity + 1))
                                                }
                                            >
                                                +
                                            </div>
                                            <div
                                                className="ml-2 cursor-pointer lg:w-5 w-4 h-4 lg:h-5"
                                                onClick={() => handleRemoveItem(item.id, item.size)}
                                            >
                                            <div className="w-4 h-5">
                                                <svg width="100%" height="100%" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.125 2.25H7.25V1.875C7.25 1.57663 7.13147 1.29048 6.9205 1.0795C6.70952 0.868526 6.42337 0.75 6.125 0.75H3.875C3.57663 0.75 3.29048 0.868526 3.0795 1.0795C2.86853 1.29048 2.75 1.57663 2.75 1.875V2.25H0.875C0.775544 2.25 0.680161 2.28951 0.609835 2.35984C0.539509 2.43016 0.5 2.52554 0.5 2.625C0.5 2.72446 0.539509 2.81984 0.609835 2.89016C0.680161 2.96049 0.775544 3 0.875 3H1.25V9.75C1.25 9.94891 1.32902 10.1397 1.46967 10.2803C1.61032 10.421 1.80109 10.5 2 10.5H8C8.19891 10.5 8.38968 10.421 8.53033 10.2803C8.67098 10.1397 8.75 9.94891 8.75 9.75V3H9.125C9.22446 3 9.31984 2.96049 9.39017 2.89016C9.46049 2.81984 9.5 2.72446 9.5 2.625C9.5 2.52554 9.46049 2.43016 9.39017 2.35984C9.31984 2.28951 9.22446 2.25 9.125 2.25ZM3.5 1.875C3.5 1.77554 3.53951 1.68016 3.60984 1.60984C3.68016 1.53951 3.77554 1.5 3.875 1.5H6.125C6.22446 1.5 6.31984 1.53951 6.39017 1.60984C6.46049 1.68016 6.5 1.77554 6.5 1.875V2.25H3.5V1.875ZM8 9.75H2V3H8V9.75ZM4.25 4.875V7.875C4.25 7.97446 4.21049 8.06984 4.14016 8.14017C4.06984 8.21049 3.97446 8.25 3.875 8.25C3.77554 8.25 3.68016 8.21049 3.60984 8.14017C3.53951 8.06984 3.5 7.97446 3.5 7.875V4.875C3.5 4.77554 3.53951 4.68016 3.60984 4.60984C3.68016 4.53951 3.77554 4.5 3.875 4.5C3.97446 4.5 4.06984 4.53951 4.14016 4.60984C4.21049 4.68016 4.25 4.77554 4.25 4.875ZM6.5 4.875V7.875C6.5 7.97446 6.46049 8.06984 6.39017 8.14017C6.31984 8.21049 6.22446 8.25 6.125 8.25C6.02554 8.25 5.93016 8.21049 5.85983 8.14017C5.78951 8.06984 5.75 7.97446 5.75 7.875V4.875C5.75 4.77554 5.78951 4.68016 5.85983 4.60984C5.93016 4.53951 6.02554 4.5 6.125 4.5C6.22446 4.5 6.31984 4.53951 6.39017 4.60984C6.46049 4.68016 6.5 4.77554 6.5 4.875Z" fill="#55482F"/>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] lg:text-[14px]">
                                            Rp {item.rental.toLocaleString()}
                                        </p>
                                        {/* <p className="text-[10px] lg:text-[14px] line-through">
                                            Rp {item.originalPrice.toLocaleString()}
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {state.items.length > 0 && (
                    <div className="text-xs lg:text-sm lg:mt-0">
                        <button 
                            onClick={handleCheckout} 
                            className="w-full py-3 mb-2 bg-[#3f3d33] text-white rounded-md hover:bg-[#2e2c27] transition"
                        >
                            Checkout - Rp {totalPrice.toLocaleString()}
                        </button>
                        <p className="text-center text-macaronidark">
                            Shipping & taxes calculated at
                        </p>
                    </div>
                )}
            </Drawer>
        </div>
    );
}
