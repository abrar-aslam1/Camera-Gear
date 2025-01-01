"use client"

import React, { createContext, useContext, useState, useCallback } from 'react'
import { photographyCategories, videographyCategories } from '../constants/categories'

export interface Category {
  title: string
  description: string
  image: string
  link: string
}

interface SearchContextType {
  searchQuery: string
  searchResults: Category[]
  setSearchQuery: (query: string) => void
  isSearching: boolean
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase()
    const allCategories = [...photographyCategories, ...videographyCategories]
    
    return allCategories.filter(category => 
      category.title.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query)
    )
  }, [searchQuery])

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    setIsSearching(!!query.trim())
  }, [])

  return (
    <SearchContext.Provider 
      value={{
        searchQuery,
        searchResults,
        setSearchQuery: handleSearch,
        isSearching
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch(): SearchContextType {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
