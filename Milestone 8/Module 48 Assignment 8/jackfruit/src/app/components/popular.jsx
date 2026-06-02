"use client";

import React from 'react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import products from '../data/products.json';
import { MoveUpRight } from 'lucide-react';

const PopularProduct = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
    const popularProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="card rounded-3xl max-w-10/12 mx-auto p-6">
            <h2 className="text-4xl font-bold text-center mb-8 text-sky-700">Popular Products</h2>
            <div className="grid gap-6 md:grid-cols-3 ">
                {popularProducts.map((product) => (
                    <article
                        key={product.id}
                        className="card bg-sky-100/20 rounded-2xl shadow-xl overflow-hidden"
                    >
                        <figure className="px-4 pt-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-xl object-cover h-48 w-full"
                            />
                        </figure>
                        <div className="card-body items-center text-center px-4 pb-6 pt-4">
                            {user ? (
                                <Link href={`/products/${product.id}`}>
                                    <h3 className="card-title text-2xl font-bold text-sky-700 cursor-pointer hover:text-sky-900">
                                        {product.name}
                                    </h3>
                                </Link>
                            ) : (
                                <Link href="/login">
                                    <h3 className="card-title text-2xl font-bold text-sky-700 cursor-pointer hover:text-sky-900">
                                        {product.name}
                                    </h3>
                                </Link>
                            )}
                            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mt-2">
                                {product.brand}
                            </p>
                            <p className="mt-3 text-sm text-sky-700/85">
                                {product.description}
                            </p>
                            <div className="mt-4 mb-3 flex flex-wrap items-center justify-center gap-3 text-sm text-white">
                                <span className="rounded-full bg-[var(--accent)]/80 px-3 py-1">
                                    ${product.price}
                                </span>
                                <span className="rounded-full bg-[var(--accent)]/80 px-3 py-1">
                                    {product.rating} ★
                                </span>
                            </div>
                            <Link href={user ? `/products/${product.id}` : '/login'} className='btn flex flex-row w-fit mx-auto bg-sky-500 text-white rounded-full p-2 mt-3'>More Details <MoveUpRight height={15}/></Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PopularProduct;