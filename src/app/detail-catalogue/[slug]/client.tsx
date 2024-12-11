"use client"
import Image from "next/image"
import { Inter } from 'next/font/google'
import FormCatalogue from "./form"
import Also from "./also"
// import RentModal from "../../component/rent-modal"
// @ts-ignore
import ReactImageMagnify from 'react-image-magnify';
import './form.css'
import { useState } from "react"

const inter = Inter({
    subsets: ['latin']
})

export default function ClientPage({
    params,
}: {
    params: any
}) {

    const [fotoMain, setFotoMain] = useState(params.foto.main)

    return (
        <div className={`${inter.className} py-[100px] lg:bg-white bg-gradient-to-r bg-[#FEFAF3] via-[#FBF0DA] to-[#FEFAF3]`}>
            <div className={`container h-full mx-auto text-macaronidark px-5 grid md:grid-cols-2 grid-cols-1 gap-y-10`}>
                <div className="flex flex-col items-center">
                    <div className="mb-4 w-full md:w-[300px] lg:w-[400px]">
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Main Image',
                                    isFluidWidth: true,
                                    src: fotoMain,
                                },
                                largeImage: {
                                    src: fotoMain,
                                    width: 1200,
                                    height: 1600,
                                },
                                imageClassName: 'w-full aspect-[3/4] object-cover rounded-lg',
                            }}
                        />
                    </div>
                    <div className="grid grid-cols-3 w-full md:w-[300px] lg:w-[400px] gap-5">
                        {fotoMain !== params.foto.thumbnail1 && params.foto.thumbnail1 &&
                            <Image
                                src={params.foto.thumbnail1}
                                alt="Thumbnail 1"
                                className="w-full aspect-[3/4] object-cover rounded-lg"
                                width={300}
                                height={400}
                                onClick={() => setFotoMain(params.foto.thumbnail1)}
                            />
                        }
                        {fotoMain !== params.foto.thumbnail2 && params.foto.thumbnail2 &&
                            <Image
                                src={params.foto.thumbnail2}
                                alt="Thumbnail 1"
                                className="w-full aspect-[3/4] object-cover rounded-lg"
                                width={300}
                                height={400}
                                onClick={() => setFotoMain(params.foto.thumbnail2)}
                            />
                        }
                        {fotoMain !== params.foto.thumbnail3 && params.foto.thumbnail3 &&
                            <Image
                                src={params.foto.thumbnail3}
                                alt="Thumbnail 1"
                                className="w-full aspect-[3/4] object-cover rounded-lg"
                                width={300}
                                height={400}
                                onClick={() => setFotoMain(params.foto.thumbnail3)}
                            />
                        }
                        {fotoMain !== params.foto.main &&
                            <Image
                                src={params.foto.main}
                                alt="Thumbnail 1"
                                className="w-full aspect-[3/4] object-cover rounded-lg"
                                width={300}
                                height={400}
                                onClick={() => setFotoMain(params.foto.main)}
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
            {/* <RentModal/> */}
            <Also 
                data={params}
            />
        </div>
    )
}