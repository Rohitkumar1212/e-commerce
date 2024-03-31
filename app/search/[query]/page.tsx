"use client"
import SearchResult from '@/components/SearchResult'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const query = () => {
    const { query } = useParams()
    const {filterData, getFilterDataFromSupabase } = useSupabase()

    useEffect(()=>{
        getFilterDataFromSupabase(query)
    },[query])
    console.log("products--", filterData)
  return (
    <div>
        <SearchResult filterData={filterData} />
    </div>
  )
}

export default query