"use client"

import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useSearch, type Category } from '../../lib/contexts/search-context'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export function HeroSection() {
  const { searchQuery, setSearchQuery, searchResults, isSearching } = useSearch()

  return (
    <section className="relative py-20 px-4 md:px-6 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <div className="flex items-center space-x-4">
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Featured in PhotoWeekly</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Trusted by Pros</span>
          </div>
        </div>
        <p className="text-lg mb-2">Trusted by 100,000+ photographers & videographers</p>
        <p className="text-sm uppercase tracking-wider mb-4">Your Ultimate Camera Gear Guide</p>
        <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl">
          Find the Perfect Camera Gear for Your Vision
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Expert recommendations for every style and budget
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex">
            <Input 
              type="search" 
              placeholder="Search for gear..." 
              className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/70"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
            <Button variant="secondary" className="rounded-l-none">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Search Results */}
        {isSearching && (
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-lg p-4 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.length > 0 ? (
                searchResults.map((result: Category) => (
                  <Link 
                    key={result.link} 
                    href={result.link}
                    className="block bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={result.image}
                        alt={result.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{result.title}</h3>
                    <p className="text-sm text-white/80">{result.description}</p>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-lg">No results found for "{searchQuery}"</p>
                  <p className="text-sm text-white/80 mt-2">
                    Try searching for different terms or browse our categories below
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
