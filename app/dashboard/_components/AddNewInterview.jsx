"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModel'
import { LoaderIcon } from 'lucide-react'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment/moment'
import { db } from '@/utils/db'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation';


function AddNewInterview() {
    const [openDailog, setOpenDaialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDescription, setJobDescription] = useState();
    const [jobExperience, setJobExperience] = useState();
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState();
    const router = useRouter();
    const { user } = useUser();

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(jobPosition)
        console.log(jobDescription)
        console.log(jobExperience)
        const InputPrompt = "job position: " + jobPosition + ", job description:" + jobDescription + ", years of experience:" + jobExperience + " , depends on this please give me 5 interview question with answer in json format give question and answer as field in json "
        const result = await chatSession.sendMessage(InputPrompt);
        const mockJsonRes = (result.response.text()).replace('```json', '').replace('```', '')
        console.log(JSON.parse(mockJsonRes));
        setJsonResponse(mockJsonRes);
        if (mockJsonRes) {

            const resp = await db.insert(MockInterview).values({
                mockId: uuidv4(),
                jsonMocKResp: mockJsonRes,
                jobPosition: jobPosition,
                jobDescription: jobDescription,
                jobExperience: jobExperience,
                createdBy: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format('DD-MM-YYYY')
            }).returning({ mockId: MockInterview.mockId })
            console.log("inserted id: ", resp);
            if (resp) {
                setOpenDaialog(false);
                router.push('dashboard/interview/' + resp[0]?.mockId);

            }
        }
        else {
            console.log("error")
        }
        setLoading(false);
    }

    return (
        <div>
            <div className=' p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all flex items-center justify-center'
                onClick={() => setOpenDaialog(true)}>
                <h2 className='text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDailog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>Tell us more about your job interviewing</DialogTitle>

                        <form onSubmit={onSubmit}>
                            <DialogDescription>
                                <h2>Add details about your job position/role, job description and years of experience</h2>
                                <div className='mt-7 my-3'>
                                    <label htmlFor="">Job Role/Job Position</label>
                                    <Input placeholder="Ex. AI Prompt Engineer" required
                                        onChange={(event) => setJobPosition(event.target.value)} />
                                </div>

                                <div className='mt-7 my-3'>
                                    <label htmlFor="">Job Description or Tech Stack</label>
                                    <Textarea placeholder="Ex.Natural language processing, Machine learning, Data analysis " required
                                        onChange={(event) => setJobDescription(event.target.value)} />
                                </div>

                                <div className='mt-7 my-3'>
                                    <label htmlFor="">Experience (Years)</label>
                                    <Input placeholder="Ex. 5" type="number" max="50" required
                                        onChange={(event) => setJobExperience(event.target.value)} />
                                </div>

                                <div className='flex gap-5 justify-end'>
                                    <Button variant="ghost" onClick={() => setOpenDaialog(false)}>Cancel</Button>
                                    <Button type="submit" disabled={loading}>
                                        {
                                            loading ?
                                                <>
                                                    <LoaderIcon className='animate-spin' />Generation from AI
                                                </> : "Start Interview"
                                        }
                                    </Button>
                                </div>
                            </DialogDescription>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview