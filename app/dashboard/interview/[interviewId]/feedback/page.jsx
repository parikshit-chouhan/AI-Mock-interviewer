"use client"
import { db } from '@/utils/db'
import { userAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'


function Feedback({ params }) {
    const [feedbackList, setFeedbackList] = useState([]);
    const router = useRouter();
    useEffect(() => {
        getFeedback()
    }, [params])
    const getFeedback = async () => {
        const result = await db.select().from(userAnswer).where(eq(userAnswer.mockIdRef, params.interviewId)).orderBy(userAnswer.id)

        console.log(result);
        setFeedbackList(result);

    }
    return (
        <div className='p-10'>
            {feedbackList?.length == 0 ?
                <h2 className='font-bold text-xl text-center'>No Interview data found</h2>
                :
                <>
                    <h2 className='text-3xl font-bold text-teal-900'>Congratulation!</h2>
                    <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
                    <h2 className='text-primary text-lg my-3'>Your overall interview rating: <strong></strong> </h2>
                    <h2 className='text-sm text-gray-500' > Find below interview questions with coreect answers, your answer snd feedback for improving</h2>
                    {feedbackList && feedbackList.map((item, idx) => (
                        <Collapsible key={idx}>
                            <CollapsibleTrigger className='p-2 mt-7 bg-secondary rounded-lg my-2 text-left flex justify-between'>{item.question} <ChevronsUpDown /> </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className='flex flex-col gap-2 ' >
                                    <h2 className='text-red-500 p-2 border rounded-lg bg-red-100' ><strong>Rating:</strong>{item.rating}</h2>
                                    <h2 className='p-2 border rounded-lg bg-blue-100 text-blue-500' > <strong>Your Answer:</strong>{item.userAns} </h2>
                                    <h2 className='p-2 border rounded-lg bg-green-100 text-green-500' > <strong>Correct Answer:</strong>{item.coorectAns} </h2>
                                    <h2 className='p-2 border rounded-lg bg-purple-100 text-purple-500'> <strong>Feedback :</strong>{item.feedback} </h2>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ))}
                </>}
            <Button onClick={() => router.replace('/dashboard')} className='mt-4 ' >Go Home</Button>

        </div>
    )
}

export default Feedback