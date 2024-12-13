"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Button } from '@/components/ui/button'
import { Mic } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { chatSession } from '@/utils/GeminiAIModel';
import { db } from '@/utils/db';
import { userAnswer } from '@/utils/schema';

import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment'
function RecordAnswerSection({ activeQuestionIndex, mocInterviewQuestion, interviewData }) {
    const { toast } = useToast()
    const [userAns, setuserAns] = useState('');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const mockId = interviewData?.mockId;
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        results.map((result) => {
            setuserAns(prevAns => prevAns + result?.transcript)
        })
    }, [results])

    useEffect(() => {
        if (!isRecording && userAns.length > 10) {
            updateUserAnswer();
        }
        
    }, [userAns])

    const StartStopRecording = async () => {
        if (isRecording) {
            stopSpeechToText()
        }
        else {
            startSpeechToText()
        }
    }

    const updateUserAnswer = async () => {
        setLoading(true);
        console.log("interview data", interviewData);
        console.log("interview question", mocInterviewQuestion[activeQuestionIndex]?.question);
        const feedbackPrompt = "Question:" + mocInterviewQuestion[activeQuestionIndex]?.question +
            ", User Answer:" + userAns + ",Depends on qusetion and user answer please give us rating for answer and feedback as area of  improvemnt if any in just 2 to 5 lines to improve it and give the response in JSON format with rating field and feedback field";
        console.log("prompt", feedbackPrompt)
        const result = await chatSession.sendMessage(feedbackPrompt);
        const mockJsonRes = (result.response.text()).replace('```json', '').replace('```', '')
        console.log(mockJsonRes);
        const jsonFeedbackResp = JSON.parse(mockJsonRes);

        // to store the ai feedback into db
        const resp = await db.insert(userAnswer).values({
            mockIdRef: mockId,
            question: mocInterviewQuestion[activeQuestionIndex]?.question,
            coorectAns: mocInterviewQuestion[activeQuestionIndex]?.answer,
            userAns: userAns,
            feedback: jsonFeedbackResp?.feedback,
            rating: jsonFeedbackResp?.rating,
            userEmail: user?.primaryEmailAddress.emailAddress,
            createdAt: moment().format('DD-MM-yyyy')
        });


        if (resp) {
            toast({
                title: 'Your Answer is recorded successfully'
            })
            setResults([])
        }
        setResults([]);
        setLoading(false);
    }
    return (
        <div>
            <div className="flex flex-col justify-center items-center rounded-lg p-5 bg-black mt-20 me-10">
                <Image src="/webcam.png" width={200} height={200} className="absolute" />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: '100%',
                        zIndex: 10,
                    }} />

            </div>
            <Button variant="outline" className="my-10"
                onClick={StartStopRecording}
                disabled={loading}>
                {isRecording ?
                    <p className='text-red-600 flex gap-2'>
                        <Mic /> Stop Recording</p>


                    : 'Record Answer'}
            </Button>
        </div>
    )
}

export default RecordAnswerSection