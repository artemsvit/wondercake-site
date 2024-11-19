'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dessert } from '@/data/types';
import { useState } from 'react';

type DessertCardProps = {
  name: string;
  category: string;
  image: string;
  description: string;
  slug: string;
}

export default function DessertCard({ name, category, image, description, slug }: DessertCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article className="group relative flex flex-col h-full">
      <Link
        href={`/recipes/${slug}`}
        className="flex-1 focus:outline-none focus:ring-2 focus:ring-[#0abab5] focus:ring-offset-2 rounded-lg"
      >
        <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100 aspect-[4/3]">
          {/* Loading Spinner */}
          <div
            className={`transition-opacity duration-300 ${
              isLoading ? 'opacity-100' : 'opacity-0'
            } absolute inset-0 flex items-center justify-center bg-gray-50`}
            aria-hidden={!isLoading}
          >
            <div className="w-8 h-8 border-2 border-[#0abab5] border-t-transparent rounded-full animate-spin" />
          </div>

          {/* Image */}
          <Image
            src={imageError ? '/images/placeholder.jpg' : image}
            alt={name}
            fill
            className={`object-cover transition-all duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            } group-hover:scale-105`}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => {
              setImageError(true);
              setIsLoading(false);
            }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-serif mb-2 group-hover:text-[#0abab5] transition-colors">
            {name}
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            {category}
          </p>
          <p className="text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
}
