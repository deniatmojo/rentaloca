"use client"
import { useState, useEffect } from "react";
import ClientPage from "./client";

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
                const data = await fetchProductData(params.slug);
                setProduct(data);
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
