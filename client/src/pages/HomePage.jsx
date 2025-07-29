import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChartContainer from '../components/ChartContainer'
import RightSidebar from '../components/RightSidebar'
import { ChartContext } from '../../context/ChartContext'

const HomePage = () => {
    const { selectedUser } = useContext(ChartContext)
    return (
        <div className='border w-full h-screen sm:px-[15%] sm:py-[3%]'>
            <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ?
                'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
                <Sidebar />
                <ChartContainer />
                <RightSidebar />
            </div>
        </div>
    )
}

export default HomePage
