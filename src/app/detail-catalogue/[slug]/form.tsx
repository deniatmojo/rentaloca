'use client'
import formatRupiah from "@/function/formatRupiah"
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function FormCatalogue({ data }: { data: any }) {

    const { dispatch } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(data.size[0] ?? '');

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                id: data.id,
                name: data.name,
                size: selectedSize,
                retail_price: data.retail_price,
                rental: data.rental,
                quantity: quantity,
                image: data.foto.main,
                maxquantity: data.quantity
            },
        });
    };

    const toggleCart = () => {
        dispatch({ type: "TOGGLE_CART" });
    }

    const toggleRent = () => {
        dispatch({ type: "TOGGLE_RENT" });
    }
    
    const sizes = ["S", "M", "L", "XL"];

    return (
        <>
            <div>
                <h1 className="text-[26px] lg:text-[48px] font-medium font-beautiqueMed">{data.name}</h1>
                <h5 className="text-[16px] lg:text-[24px] font-normal">{formatRupiah(data.rental)}</h5>
            </div>

            <div>
                <h6 className="text-[18px] font-medium mb-2">Size</h6>
                <div className="flex gap-x-[16px] flex-wrap gap-y-2">
                    {sizes.map((size) => (
                        <button 
                            key={size} 
                            disabled={!data.size.includes(size)}
                            onClick={() => setSelectedSize(size)} 
                            className={`px-[16px] lg:px-[30px] py-[12px] lg:py-[24px] border border-macaronidark rounded-[7px] lg:rounded-[14px] 
                                ${selectedSize === size ? 'bg-macaronidark text-white' : 'text-macaronidark'}
                                ${!data.size.includes(size) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {data.quantity == 0 ? (
                <>
                    <div>
                        <h6 className="text-[18px] font-medium mb-2">Quantity</h6>
                        <select value={0} className="px-[16px] lg:px-[30px] py-[12px] lg:py-[24px] border border-macaronidark rounded-md appearance-none">
                            <option value={0}>0</option>
                        </select>
                    </div>
                    <div className="text-red-500">Mohon maaf, stok habis.</div>
                </>
            ) : (
                <div>
                    <h6 className="text-[18px] font-medium mb-2">Quantity</h6>
                    <select onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity} className="px-[16px] lg:px-[30px] py-[12px] lg:py-[24px] border border-macaronidark rounded-md appearance-none">
                        {Array.from({ length: data.quantity }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div className="w-full flex gap-5">
                <button disabled={data.quantity == 0} onClick={() =>  {handleAddToCart(); toggleCart()}} className={`${data.quantity == 0 ? 'cursor-not-allowed opacity-50' : ''} px-6 text-[16px] lg:text-[24px] flex-1 py-5 border border-macaronidark rounded-[14px] hover:bg-macaronilight`}>Add To Cart</button>
                <button disabled={data.quantity == 0} onClick={() => {toggleRent(); handleAddToCart()}} className={`${data.quantity == 0 ? 'cursor-not-allowed opacity-50' : ''} px-6 text-[16px] lg:text-[24px] flex-1 py-5 border border-macaronidark rounded-[14px] hover:bg-macaronidark3 bg-macaronidark text-white`}>Rent It Now</button>
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