import { useState } from "react"
import { supabase } from "../products"

export const useSupabase = () => {
    const [products, setProducts] = useState<any>([])
    const [filterData, setFilterData] = useState<any>([])
    const [singleProduct, setSingleProduct] = useState<any>([])
    const [mensProduct, setMensProduct] = useState<any>([]);
    const [womensProduct, setWomensProduct] = useState<any>([]);
    const getDataFromSupabase = async () => {
        let { data, error } = await supabase.from('products').select("*")
        if (data) {
            console.log(data)
            setProducts(data)
        }
        if (error) {
            console.log("error getDataFromSupabase ", error)
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
            console.log("error in getFilterDataFromSupabase ", error)
        }
    }

    const getSingleProductFromSupabase = async (id: number) => {
        let { error, data } = await supabase.from("products").select("*").eq("id", id)
        if (data) {
            console.log(data)
            setSingleProduct(data)
        }
        if (error) {
            console.log("error in getSingleProduct ", error)
        }
    }
    const getMensClothingFromSupabase = async () => {
        let {data, error} = await supabase.from('products').select('*').ilike('category', `men's clothing`);
        if(data){
            setMensProduct(data);
        }
        if(error){
            console.log(error);
            
        }
    }
    const getWomensClothingFromSupabase = async () => {
        let {data, error} = await supabase.from('products').select('*').ilike('category', `women's clothing`);
        if(data){
            setWomensProduct(data);
        }
        if(error){
            console.log(error);
            
        }
    }
    return {
        products, 
        getDataFromSupabase,
        filterData,
        getFilterDataFromSupabase,
        singleProduct,
        getSingleProductFromSupabase,
        mensProduct,
        getMensClothingFromSupabase,
        womensProduct,
        getWomensClothingFromSupabase
    };
}