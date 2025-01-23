"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, LoaderIcon, Volume2, Volume2Icon, WebcamIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import Image from 'next/image'
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StartInterview({ params }) {
    const [interviewData, setInterviewData] = useState(null);
    const [mocInterviewQuestion, setMocInterviewQuestion] = useState([]);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    useEffect(() => {
        GetInterviewDetails();
    }, []);


    const GetInterviewDetails = async () => {
        try {
            const result = await db
                .select()
                .from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId));

            if (result.length > 0) {
                const jsonMocKResp = JSON.parse(result[0].jsonMocKResp);
                console.log("Fetched Data:", jsonMocKResp);
                setMocInterviewQuestion(jsonMocKResp); // Updates asynchronously
                setInterviewData(result[0]); // Sets the main interview data
            } else {
                console.log("No data found for the given interview ID.");
            }
        } catch (error) {
            console.error("Error fetching interview details:", error);
        }
    };

    // text to speach
    const textToSpeach = (text) => {
        if ('speechSynthesis' in window) {
            const speach = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speach);
        }
        else {
            alert("Sorry, Your browser does not support this feature")
        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
            {/* video section */}
            <RecordAnswerSection mocInterviewQuestion={mocInterviewQuestion} activeQuestionIndex={activeQuestionIndex} interviewData={interviewData} />
            {/* question section */}
            <div className="p-5 border rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {mocInterviewQuestion.length > 0 ? (
                        mocInterviewQuestion.map((que, idx) => (
                            <h2
                                key={idx}
                                className={`p-2 bg-secondary rounded-full text-center text-xs md:text-sm cursor-pointer ${activeQuestionIndex == idx && 'bg-purple-950 text-white'}`}
                            >
                                Question #{idx + 1}
                            </h2>
                        ))
                    ) : (
                        <span>Please Wait <LoaderIcon className='animate-spin' /></span>

                    )}
                </div>
                <h2 className="my-5 text-md md:text-lg">{mocInterviewQuestion[activeQuestionIndex]?.question}</h2>
                <Volume2 className="cursor-pointer" onClick={() => textToSpeach(mocInterviewQuestion[activeQuestionIndex]?.question)} />
                <div className="border rounded-lg p-5 bg-blue-100 mt-20">
                    <h2 className="flex gap-2 item-center text-blue-800">
                        <Lightbulb />
                        <strong>Note:</strong>
                    </h2>
                    <h2 className="text-sm text-blue-800 my-2">
  Remember, clear communication is key to a successful interview. Take your time to understand the question, structure your response, and highlight your relevant skills and experiences. Don’t hesitate to showcase your unique strengths!
</h2>

                </div>
            </div>
            <div className=" flex gap-6">
                {activeQuestionIndex > 0 && <Button
                    onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>Previous Question</Button>}
                {activeQuestionIndex != mocInterviewQuestion?.length - 1 && <Button
                    onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
                >Next Question</Button>}

                {activeQuestionIndex == mocInterviewQuestion?.length - 1 &&
                    <Link href={'/dashboard/interview/' + interviewData?.mockId + "/feedback"}>
                        <Button>Submit Interview</Button>
                    </Link>}

            </div>
        </div >


    );
}

export default StartInterview;
