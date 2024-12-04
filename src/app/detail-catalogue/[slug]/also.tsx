import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import formatRupiah from "@/function/formatRupiah";
import { getSheetData } from "@/server/get-data";

function getRandomProducts(products: any, count = 4) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export default function Also( {data} : {data: any}) {

    const [randomProducts, setRandomProducts] = useState<any>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await getSheetData();
                const parsePrice = (price: string) => price ? parseInt(price.replace(/[^\d]/g, ""), 10) : null;
                const checkValue = (value: string) => (value?.trim() === "" ? null : value.trim());
                const dataSpreadsheet = response?.data?.map((val, index) => {
                    return {
                        id: val[0],
                        name: val[1],
                        slug: val[23],
                        available: parseInt(val[8], 10) !== 0,
                        foto: {
                            main: val[24]?.trim(),
                            ...(val[25] ? { thumbnail1: val[25].trim() } : {}),
                            ...(val[26] ? { thumbnail2: val[26].trim() } : {}),
                            ...(val[27] ? { thumbnail3: val[27].trim() } : {}),
                        },
                        size: (() => {
                            const sizeMap: any = { 3: "S", 4: "M", 5: "L", 6: "XL", 7: "S" };
                            for (let i = 3; i <= 7; i++) {
                                if (val[i]?.trim() === "X") {
                                    return sizeMap[i];
                                }
                            }
                            return null;
                        })(),
                        quantity: parseInt(val[8], 10),
                        bust: checkValue(val[9]),
                        waist: checkValue(val[10]),
                        hip: checkValue(val[11]),
                        length: checkValue(val[12]),
                        sleeves: checkValue(val[13]),
                        abdomen: checkValue(val[14]),
                        suggested_weight: checkValue(val[15]),
                        shoulders: checkValue(val[16]),
                        bahan: val[17]?.trim(),
                        retail_price: parsePrice(val[18]),
                        rental: parsePrice(val[19]),
                        discount: parsePrice(val[20]),
                        note: val[21]?.trim(),
                    };
                }) ?? []
                const products = dataSpreadsheet.filter((product: { slug: any; }) => product.slug !== data.slug);
                const randomItems = getRandomProducts(products);
                setRandomProducts(randomItems);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto mt-[100px] text-macaronidark">
            <h1 className="font-medium font-beautiqueMed text-[32px] lg:text-[48px] text-center text-pretty mb-5">You May Also Like</h1>
            <div className="flex justify-center flex-wrap gap-x-10 gap-y-10">
                {randomProducts.map((product: any) => (
                    <Link
                        key={product.slug}
                        href={`/detail-catalogue/${product.slug}`}
                        className="w-[305px]"
                    >
                        <Image
                            src={product.foto.main}
                            alt={product.name}
                            className="w-full aspect-[3/4] rounded-[14px] object-cover"
                            width={305}
                            height={407}
                        />
                        <div className="mt-5">
                            <h1 className="text-[24px] font-beautiqueMed">{product.name}</h1>
                            <h5 className="text-[20px]">{formatRupiah(product.rental)}</h5>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}