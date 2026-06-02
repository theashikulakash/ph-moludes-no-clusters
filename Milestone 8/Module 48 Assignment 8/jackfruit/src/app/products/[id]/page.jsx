"use client"; // Required because we use params and potentially state/auth
import React from "react";
import productsData from "@/app/data/products.json";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams(); // Gets the ID from the URL (e.g., /product/1)
  const router = useRouter();

  // Find the specific product that matches the ID from our JSON
  // We use Number(id) because the URL param is usually a string
  const product = productsData.find((p) => p.id === Number(id));

  // If product doesn't exist, show a simple message or redirect
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold">Product not found!</h2>
        <button onClick={() => router.push("/")} className="btn btn-primary">
          Go Back Home
        </button>
      </div>
    );
  }

  const { name, image, brand, price, rating, stock, description, category } = product;

  return (
    <section className=" bg-white text-[#ff7401]">
      <div className="container mx-auto p-5 md:py-20">
        
        {/* <div className="text-sm breadcrumbs mb-6">
           <ul>
          <li><Link href="/">Home</Link></li>
          <li>Products</li>
          <li className="text-primary font-bold">{name}</li>
        </ul>

          <h2 className="text-center text-3xl font-extrabold">Product Details Page</h2> 
        </div> */}

        <div className="grid w-10/12 mx-auto grid-cols-1 lg:grid-cols-2 gap-12 bg-base-100 p-8 shadow-2xl rounded-3xl border border-base-200">

          
          <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-4">
            <img
              src={image}
              alt={name}
              className="rounded-xl max-h-[500px] object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="badge badge-primary mb-2 px-4 text-red-600">{category}</div>
              <h1 className="text-4xl font-bold text-neutral">{name}</h1>
              <p className="text-lg text-gray-500 font-medium">Brand: {brand}</p>
            </div>

            <div className="divider"></div>

            <p className="text-gray-600 leading-relaxed text-lg italic">
              "{description}"
            </p>

            <div className="flex flex-col items-left gap-4">
              <span className="text-3xl font-bold text-primary">${price}</span>
              <div className="badge badge-outline w-fit badge-lg p-4">Rating: ⭐ {rating}</div>
            </div>

            <div className="space-y-2">
              <p className={`font-bold ${stock > 0 ? "text-success" : "text-error"}`}>
                {stock > 0 ? `✅ In Stock: ${stock} items available` : "❌ Out of Stock"}
              </p>
            </div>

            {/* button  */}
            <div className="card-actions flex justify-start pt-4 gap-4">
              <a href="/" className="btn btn-primary border rounded-xl p-1 px-4 bg-[#ff7401] text-white">
                Add to cart
              </a>
              <a href="/allproducts" className="btn btn-primary border rounded-xl p-1 px-4 bg-[#ff7401] text-white">
                Back to Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ProductDetails;