"use client"
import Image from "next/image"
import { Inter } from 'next/font/google'
import FormCatalogue from "./form"
import Also from "./also"
import RentModal from "../../component/rent-modal"
import { useState } from "react"
// @ts-ignore
import ReactImageMagnify from 'react-image-magnify';
import './form.css'

const inter = Inter({
    subsets: ['latin']
})

export default function ClientPage({
    params,
}: {
    params: any
}) {
    return (
        <div className={`${inter.className} my-[100px]`}>
            <div className={`container h-full mx-auto text-macaronidark px-5 grid md:grid-cols-2 grid-cols-1 gap-y-10`}>
                <div className="flex flex-col items-center">
                    <div className="mb-4 w-full md:w-[300px] lg:w-[400px]">
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Main Image',
                                    isFluidWidth: true,
                                    src: params.foto.main,
                                },
                                largeImage: {
                                    src: params.foto.main,
                                    width: 1200,
                                    height: 1600,
                                },
                                imageClassName: 'w-full aspect-[3/4] object-cover rounded-lg',
                            }}
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
                    />
                </div>
            </div>
            <RentModal/>
            <Also 
                data={params}
            />
        </div>
    )
}