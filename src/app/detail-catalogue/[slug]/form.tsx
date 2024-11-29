'use client'
import formatRupiah from "@/function/formatRupiah"
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function FormCatalogue({ data }: { data: any }) {

    const { dispatch } = useCart();

    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                id: data.id,
                name: data.name,
                size: data.size,
                retail_price: data.retail_price,
                rental: data.rental,
                quantity: quantity,
                image: data.foto.main
            },
        });
    };
    
    const toggleCart = () => {
        dispatch({ type: "TOGGLE_CART" });
    }

    const toggleRent = () => {
        dispatch({ type: "TOGGLE_RENT" });
    }

    return (
        <>
            <div>
                <h1 className="text-[26px] lg:text-[48px] font-medium font-beautiqueMed">{data.name}</h1>
                <h5 className="text-[16px] lg:text-[24px] font-normal">{formatRupiah(data.rental)}</h5>
            </div>

            <div>
                <h6 className="text-[18px] font-medium mb-2">Size</h6>
                <div className="flex gap-x-[16px] flex-wrap gap-y-2">
                    <button className={`px-[16px] lg:px-[30px] py-[12px] lg:py-[24px] border border-macaronidark rounded-[7px] lg:rounded-[14px] ${data.size === 'ALL SIZE' ? 'bg-macaronidark text-white' : 'text-macaronidark'}`}>All Size</button>
                    <button className={`px-[16px] lg:px-[30px] py-[12px] lg:py-[24px] border border-macaronidark rounded-[7px] lg:rounded-[14px] ${data.size === 'S' ? 'bg-macaronidark text-white' : 'text-macaronidark'}`}>S</button>
                    <button className={`px-[16px] lg:px-[30px] py-[12px] lg:py-[24px] border border-macaronidark rounded-[7px] lg:rounded-[14px] ${data.size === 'M' ? 'bg-macaronidark text-white' : 'text-macaronidark'}`}>M</button>
                    <button className={`px-[16px] lg:px-[30px] py-[12px] lg:py-[24px] border border-macaronidark rounded-[7px] lg:rounded-[14px] ${data.size === 'L' ? 'bg-macaronidark text-white' : 'text-macaronidark'}`}>L</button>
                    <button className={`px-[16px] lg:px-[30px] py-[12px] lg:py-[24px] border border-macaronidark rounded-[7px] lg:rounded-[14px] ${data.size === 'XL' ? 'bg-macaronidark text-white' : 'text-macaronidark'}`}>XL</button>
                </div>
            </div>

            <div>
                <h6 className="text-[18px] font-medium mb-2">Quantity</h6>
                <select onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity} className="px-[16px] lg:px-[30px] py-[12px] lg:py-[24px] border border-macaronidark rounded-md appearance-none">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div className="w-full flex gap-5">
                <button onClick={() =>  {handleAddToCart(); toggleCart()}} className="px-6 text-[16px] lg:text-[24px] flex-1 py-5 border border-macaronidark rounded-[14px] hover:bg-macaronilight">Add To Cart</button>
                <button onClick={() => {toggleRent(); handleAddToCart()}} className="px-6 text-[16px] lg:text-[24px] flex-1 py-5 border border-macaronidark rounded-[14px] hover:bg-macaronidark3 bg-macaronidark text-white">Rent It Now</button>
            </div>

            <div className="text-[14px] bg-macaronilight2/60 text-macaronidark border border-macaronidark px-[24px] py-[12px] rounded-[10px]">
                Keseluruhan Barang Sewa Akan Dikenakan Biaya Deposit Sebesar IDR 120.000! Akan Dikembalikan Setelah Pengembalian Selesai Ya Dear.
            </div>

            <div className="border-l-2 border-l-macaronidark pl-5 text-[14px] lg:text-[24px] font-normal">
                <h6 className="mb-2">Bahan:</h6>
                <p>{data.bahan}</p>
            </div>

            <div className="border-l-2 border-l-macaronidark pl-5 text-[14px] lg:text-[24px] font-normal">
                <h6 className="mb-2">Measurements:</h6>
                <div className="grid grid-cols-2 gap-y-1">
                    {data.bust && <p>Bust {data.bust}</p>}
                    {data.sleeves && <p>Sleeves {data.sleeves}</p>}
                    {data.waist && <p>Waist {data.waist}</p>}
                    {data.abdomen && <p>Abdomen {data.abdomen}</p>}
                    {data.hip && <p>Hip {data.hip}</p>}
                    {data.suggested_weight && <p>Suggested Weight {data.suggested_weight}</p>}
                    {data.length && <p>Length {data.length}</p>}
                    {data.shoulders && <p>Shoulders {data.shoulders}</p>}
                </div>
            </div>
        </>
    )
}