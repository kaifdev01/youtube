import React, { useState, useEffect, createContext } from 'react'
import { fetchDataApi } from '../utils/Api'

export const Context = createContext()

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory)
    }, [selectedCategory])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataApi(`search/?q=${query}`).then((contents) => {
            console.log(contents.contents)
            setSearchResults(contents.contents)
            setLoading(false)

        })
    }

    return (
        <Context.Provider value={{
            loading, setLoading,
            searchResults, setSearchResults,
            selectedCategory, setSelectedCategory,
            mobileMenu, setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}
