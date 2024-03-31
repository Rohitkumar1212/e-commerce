import { useState } from "react"
import { supabase } from "../products"

export const useSupabase = () => {
    const [products, setProducts] = useState<any>([])
    const [filterData, setFilterData] = useState<any>([])
    const getDataFromSupabase = async () => {
        let { data, error } = await supabase.from('products').select("*")
        if (data) {
            console.log(data)
            setProducts(data)
        }
        if (error) {
            console.log("error -", error)
        }
    }
    const getFilterDataFromSupabase = async (query: string | string[]) => {
        // If query is an array, convert it to a single string
        if (Array.isArray(query)) {
            query = query.join(', '); // Join array elements with a comma and space
        }
        // Now query is guaranteed to be a string
        // Your function logic goes here
        let { data, error } = (await supabase.from('products').select("*").or(`title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`)) //cloth
        if (data) {
            console.log(data)
            setFilterData(data)
        }
        if (error) {
            console.log("error -", error)
        }
    }
    return { products, getDataFromSupabase, filterData, getFilterDataFromSupabase }
}