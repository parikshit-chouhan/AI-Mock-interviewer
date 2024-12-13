import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
    return (
        <div className='p-10'>
            <h2 className='font-bold text-2xl text-purple-800 text-center'>Dashboard</h2>
            <h2 className='text-gray-400 text-center'>create and start your AI Mockup Interview</h2>
            <div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
                <AddNewInterview />
            </div>
            {/* previews interviews */}
            <InterviewList />
        </div>
    )
}

export default Dashboard