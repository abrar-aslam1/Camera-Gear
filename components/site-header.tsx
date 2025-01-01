'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Input } from './ui/input'
import { useSearch } from '../lib/contexts/search-context'
import { Search } from 'lucide-react'
import { useEffect, useRef, useState, KeyboardEvent } from 'react'
import { useRouter } from 'next/navigation'

export function SiteHeader() {
  const { setSearchQuery, searchResults, isSearching } = useSearch()
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [inputValue, setInputValue] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isSearching || searchResults.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => {
          if (prev < searchResults.length - 1) return prev + 1
          return prev
        })
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => {
          if (prev > 0) return prev - 1
          return -1
        })
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0) {
          const result = searchResults[selectedIndex]
          if (result) {
            handleResultClick(result.link)
          }
        }
        break
      case 'Escape':
        e.preventDefault()
        clearSearch()
        break
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    setSearchQuery(value)
  }

  const clearSearch = () => {
    setInputValue('')
    setSearchQuery('')
    setSelectedIndex(-1)
    inputRef.current?.blur()
  }

  const handleResultClick = (link: string) => {
    clearSearch()
    router.push(link)
  }

  const handleResultHover = (index: number) => {
    setSelectedIndex(index)
  }

  // Reset selection when search results change
  useEffect(() => {
    setSelectedIndex(-1)
  }, [searchResults])

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        clearSearch()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/Camera Gear-3.png"
            alt="Camera Gear Logo"
            width={160}
            height={45}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <div className="flex-1 mx-4 max-w-sm relative" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search for gear..."
              className="w-full pl-9 bg-muted/50"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          {isSearching && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg overflow-hidden">
              <div className="max-h-[300px] overflow-y-auto">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result.link)}
                      onMouseEnter={() => handleResultHover(index)}
                      onFocus={() => handleResultHover(index)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        index === selectedIndex ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'
                      }`}
                    >
                      <div className="font-medium">{result.title}</div>
                      <div className="text-muted-foreground text-xs">{result.description}</div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-muted-foreground">
                    No results found for "{inputValue}"
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <nav className="flex items-center space-x-6">
          <Link href="/photography" className="text-sm font-medium hover:text-primary">
            Photography
          </Link>
          <Link href="/videography" className="text-sm font-medium hover:text-primary">
            Videography
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
