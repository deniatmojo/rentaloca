"use client"
import { useState, useEffect } from "react";
import ClientPage from "./client";
import { getSheetData } from "@/server/get-data";

async function fetchProductData(slug: string) {
    const response = await fetch("/data/product.json");
    const products = await response.json();
    return products.find((product: { slug: string }) => product.slug === slug);
}

export default function Page({ params }: { params: { slug: string } }) {
    const [product, setProduct] = useState<null | object>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProduct() {
            try {
                setLoading(true);
                const response = await getSheetData();
                const data = response?.data?.find((val) => val[23]?.trim() === params.slug) ?? [];
                const parsePrice = (price: string) => price ? parseInt(price.replace(/[^\d]/g, ""), 10) : null;
                const checkValue = (value: string) => (value?.trim() === "" ? null : value.trim());
                const result = {
                    id: data[0],
                    name: data[1],
                    slug: data[23],
                    available: parseInt(data[8], 10) !== 0,
                    foto: {
                        main: data[24]?.trim(),
                        ...(data[25] ? { thumbnail1: data[25].trim() } : {}),
                        ...(data[26] ? { thumbnail2: data[26].trim() } : {}),
                        ...(data[27] ? { thumbnail3: data[27].trim() } : {}),
                    },
                    size: (() => {
                        const sizeMap: any = { 3: "S", 4: "M", 5: "L", 6: "XL", 7: "S" };
                        for (let i = 3; i <= 7; i++) {
                            if (data[i]?.trim() === "X") {
                                return sizeMap[i];
                            }
                        }
                        return null;
                    })(),
                    quantity: parseInt(data[8], 10),
                    bust: checkValue(data[9]),
                    waist: checkValue(data[10]),
                    hip: checkValue(data[11]),
                    length: checkValue(data[12]),
                    sleeves: checkValue(data[13]),
                    abdomen: checkValue(data[14]),
                    suggested_weight: checkValue(data[15]),
                    shoulders: checkValue(data[16]),
                    bahan: data[17]?.trim(),
                    retail_price: parsePrice(data[18]),
                    rental: parsePrice(data[19]),
                    discount: parsePrice(data[20]),
                    note: data[21]?.trim(),
                };
                setProduct(result);
            } catch (error) {
                console.error("Error fetching product data:", error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        }

        getProduct();
    }, [params.slug]);

    if (loading) {
        return <div className="text-macaronidark flex justify-center items-center flex-col mt-10">Loading...</div>;
    }

    if (!product) {
        return <div className="text-macaronidark flex justify-center items-center flex-col mt-10">No Product Found</div>;
    }

    return <ClientPage params={product} />;
}
