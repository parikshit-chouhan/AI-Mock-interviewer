"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import React, { useEffect, useState } from "react";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  // Get interview details by mockId/interviewId
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    console.log(result);
    setInterviewData(result[0]);
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl text-center">Let's Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10" >
        <div>
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => console.log("Webcam enabled")}
              onUserMediaError={(err) => {
                console.error("Webcam error:", err);
                setWebCamEnabled(false);
              }}
              mirrored={true}
              style={{
                height: 300,
                width: 300,
              }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border flex items-center justify-center" />
              {/* Button to Enable Webcam */}
              <Button className="w-full"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable Webcam to Start AI Mock Interview
              </Button>
            </>
          )}

        </div>
        <div className="flex flex-col my-5 gap-5">
          {interviewData && <div className="flex flex-col gap-5 p-5 rounded-lg border">
            <h2 className="text-lg"><strong>Job Position or Job role: </strong>{interviewData.jobPosition}</h2>
            <h2 className="text-lg"><strong>Job Description or Tech Stack: </strong>{interviewData.jobDescription}</h2>
            <h2 className="text-lg"><strong>Years Of Experience: </strong>{interviewData.jobExperience}</h2>
          </div>
          }
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100" >
            <h2 className="flex gap-2 items-center text-yellow-600"><Lightbulb /> <span><strong>Information</strong></span></h2>
            <h2 className="mt-3 text-yellow-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ut iusto esse temporibus architecto debitis eligendi, repellendus qui quo alias dolor! Quidem maxime velit molestiae voluptatem dicta reiciendis eligendi, rerum labore autem maiores? Eum assumenda totam itaque ex ratione dolorem?</h2>
          </div>
        </div>

      </div>
      <div className="flex justify-start items-start">
        <Link href={'/dashboard/interview/' + params.interviewId + '/start' }>
          <Button>Start Moc Interview</Button>
        </Link>

      </div>
    </div>

  );
}

export default Interview;
