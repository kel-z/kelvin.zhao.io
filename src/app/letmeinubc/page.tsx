import TrackingForm from "@/components/letmeinubc/TrackingForm";
import React from "react";

export default async function Page() {
  return (
    <React.StrictMode>
      <div className="mt-11 flex w-full flex-col items-center gap-5">
        <div className="flex flex-col items-center">
          <h1>LetMeInUBC</h1>
          <p>
            Get an email when a spot opens up in a UBC course. (Only Vancouver
            campus courses are supported.)
          </p>
        </div>
        <TrackingForm />
      </div>
    </React.StrictMode>
  );
}
