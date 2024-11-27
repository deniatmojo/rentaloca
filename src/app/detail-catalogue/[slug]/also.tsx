import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import formatRupiah from "@/function/formatRupiah";

function getRandomProducts(products: any, count = 4) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export default function Also() {

    const [randomProducts, setRandomProducts] = useState<any>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/data/product.json");
                const products = await response.json();
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