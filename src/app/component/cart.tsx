"use client"
import { Drawer } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Cart() {

    const { state, dispatch } = useCart();

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
                                                className="w-4 h-4 lg:w-5 lg:h-5 rounded-full flex flex-col items-center justify-center border-2 text-[10px] lg:text-xs cursor-pointer text-macaronidark3 border-macaronidark3"
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
                                                className="w-4 h-4 lg:w-5 lg:h-5 rounded-full flex flex-col items-center justify-center border-2 text-[10px] lg:text-xs cursor-pointer text-macaronidark3 border-macaronidark3"
                                                onClick={() =>
                                                    handleUpdateQuantity(item.id, item.size, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </div>
                                            <div
                                                className="ml-2 cursor-pointer lg:w-5 w-4 h-4 lg:h-5"
                                                onClick={() => handleRemoveItem(item.id, item.size)}
                                            >
                                                🗑
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
                        <Link onClick={toggleCart} href={'/checkout'}>
                            <button className="w-full py-3 mb-2 bg-[#3f3d33] text-white rounded-md hover:bg-[#2e2c27] transition">
                                Checkout - Rp {totalPrice.toLocaleString()}
                            </button>
                        </Link>
                        <p className="text-center text-macaronidark">
                            Shipping & taxes calculated at
                        </p>
                    </div>
                )}
            </Drawer>
        </div>
    );
}
