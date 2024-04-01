"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase/products'
const Signin = () => {
    return (
        <div className='absolute top-0 w-full bg-white py-12'>
            <div className='w-[30%] mx-auto'>
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
            />
            </div>
        </div>
    )
}

export default Signin