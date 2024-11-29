"use client"
import { Modal } from "@mui/material";
import { useCart } from "@/context/CartContext";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { useRouter } from 'next/navigation';

export default function RentModal() {

    const router = useRouter();
    const { state, dispatch } = useCart();

    const handleClose = () => {
        dispatch({ type: "TOGGLE_RENT" });
    }

    const toggleCart = () => {
        if (state.startDate !== null && state.endDate !== null) {
            handleClose();
        }
    };

    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(state.startDate));
    const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(state.endDate));
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

    const setStartDateContext = (date: null | Dayjs) => {
        dispatch({ type: "SET_START_DATE", payload: date });
    };

    const setEndDateContext = (date: null | Dayjs) => {
        dispatch({ type: "SET_END_DATE", payload: date });
    };

    return (
        <div>
            <Modal
                open={state.isRentOpen}
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
                        <button
                            type="button"
                            disabled={state.startDate === null || state.endDate === null}
                            className={`text-[12px] lg:text-[16px] flex-1 py-3 border border-macaronidark rounded-[14px] 
                                    ${state.startDate !== null && state.endDate !== null
                                    ? 'bg-macaronidark text-white cursor-pointer'
                                    : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                            onClick={() => {
                                if (state.startDate !== null && state.endDate !== null) {
                                    toggleCart();
                                    router.push('/checkout');
                                }
                            }}
                        >
                            Lanjut ke Checkout
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
