"use client"
import { Modal } from "@mui/material";
import { useCart } from "@/context/CartContext";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function RentModal({ open, setOpen }: { open: any, setOpen: any }) {

    const { dispatch } = useCart();

    const handleClose = () => setOpen(false);

    const toggleCart = () => {
        handleClose();
        dispatch({ type: "TOGGLE_CART" });
    };

    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleDateChange = (start: Dayjs | null, end: Dayjs | null) => {
        setStartDate(start);
        setStartDateContext(start);
        setEndDate(end);
        setEndDateContext(end);

        if (start && end) {
            const diffInDays = end.diff(start, 'day');
            if (diffInDays > 3) {
                setError('Batasan waktu sewa maksimal 3 hari.');
                setStartDate(null);
                setEndDate(null);
                setStartDateContext(null);
                setEndDateContext(null);
            } else {
                setError(null);
            }
        }
    };

    const setStartDateContext = (date: Date | null | Dayjs) => {
        dispatch({ type: "SET_START_DATE", payload: date });
      };
      
    const setEndDateContext = (date: Date | null | Dayjs) => {
        dispatch({ type: "SET_END_DATE", payload: date });
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
                    <div className="flex flex-col items-center my-10">
                        <div className="flex items-center gap-5 max-w-md">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Start Date"
                                    value={startDate}
                                    onChange={(newValue) => handleDateChange(newValue, endDate)}
                                    slotProps={{ textField: { size: 'small' } }}
                                />
                            </LocalizationProvider>
                            <div>-</div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="End Date"
                                    value={endDate}
                                    onChange={(newValue) => handleDateChange(startDate, newValue)}
                                    slotProps={{ textField: { size: 'small' } }}
                                />
                            </LocalizationProvider>
                        </div>
                        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
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
