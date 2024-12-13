import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function InterviewItemCard({ interview }) {

    return (
        <div className='border shadow-sm rounded-lg p-3'>
            <h2 className='font-bold text-purple-800'>{interview?.jobPosition}</h2>
            <h2 className='text-sm'>{interview?.jobExperience} Years of Experience</h2>
            <h2 className='text-xs text-gray-500'>Created At:{interview?.createdAt}</h2>
            <div>
                <Link href={'/dashboard/interview/' + interview?.mockId + "/feedback"} >
                <Button size="sm" className="w-full my-5" >See Details</Button>
                </Link>
            </div>
        </div>
    )
}

export default InterviewItemCard