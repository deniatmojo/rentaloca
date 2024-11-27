"use client"
import Image from "next/image"
import { Inter } from 'next/font/google'
import FormCatalogue from "./form"
import Also from "./also"
import RentModal from "./rent-modal"
import { useState } from "react"

const inter = Inter({
    subsets: ['latin']
})

export default function ClientPage({
    params,
}: {
    params: any
}) {
    
    const [open, setOpen] = useState(false);

    return (
        <div className={`${inter.className} my-[100px]`}>
            <div className={`container h-full mx-auto text-macaronidark px-5 grid md:grid-cols-2 grid-cols-1 gap-y-10`}>
                <div className="flex flex-col items-center">
                    <div className="mb-4 w-full md:w-[300px] lg:w-[400px] ">
                        <Image
                            src={params.foto.main}
                            alt="Main"
                            className="w-full aspect-[3/4] object-cover rounded-lg"
                            width={300}
                            height={400}
                        />
                    </div>
                    <div className="grid grid-cols-3 w-full md:w-[300px] lg:w-[400px] gap-5">
                        {params.foto.thumbnail1 && 
                            <Image
                                src={params.foto.thumbnail1}
                                alt="Thumbnail 1"
                                className="w-full aspect-[3/4] object-cover rounded-lg"
                                width={300}
                                height={400}
                            />
                        }
                        {params.foto.thumbnail2 && 
                            <Image
                                src={params.foto.thumbnail2}
                                alt="Thumbnail 1"
                                className="w-full aspect-[3/4] object-cover rounded-lg"
                                width={300}
                                height={400}
                            />
                        }
                        {params.foto.thumbnail3 && 
                            <Image
                                src={params.foto.thumbnail3}
                                alt="Thumbnail 1"
                                className="w-full aspect-[3/4] object-cover rounded-lg"
                                width={300}
                                height={400}
                            />
                        }
                    </div>
                </div>
                <div className="space-y-10">
                    <FormCatalogue
                        data={params}
                        setOpenModal={setOpen}
                    />
                </div>
            </div>
            <RentModal
                open={open}
                setOpen={setOpen}
            />
            <Also/>
        </div>
    )
}