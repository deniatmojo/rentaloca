"use client"
import { Modal } from "@mui/material";
// @ts-ignore
import { DateRangePicker } from "@nextui-org/date-picker";
import "./range-date-picker.css"
import { useCart } from "@/context/CartContext";

export default function RentModal({ open, setOpen } : { open:any, setOpen:any }) {

    const { dispatch } = useCart();

    const handleClose = () => setOpen(false);

    const toggleCart = () => {
        handleClose();
        dispatch({ type: "TOGGLE_CART" });
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="absolute top-1/2 left-1/2 bg-macaronilight w-[calc(100%-20px)] lg:w-[600px] -translate-x-1/2 -translate-y-1/2 text-macaronidark rounded-[24px] p-[32px]">
                    <div className="text-center">
                        <h1 className="font-beautiqueMed text-[32px]">Select Delivery Date</h1>
                        <h2 className="text-[14px]">Batasan waktu sewa maksimal 3 hari</h2>
                    </div>
                    <div className="flex flex-col items-center my-5">
                        <DateRangePicker
                            label=""
                            className="max-w-sm"
                        />
                    </div>
                    <div className="w-full flex gap-5">
                        <button className="text-[12px] lg:text-[16px] flex-1 py-3 border border-macaronidark rounded-[14px]" onClick={handleClose}>Kembali</button>
                        <button className="text-[12px] lg:text-[16px] flex-1 py-3 border border-macaronidark rounded-[14px] bg-macaronidark text-white" onClick={toggleCart}>Lanjut ke Checkout</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
