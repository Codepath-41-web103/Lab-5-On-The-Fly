import React from "react";
import { Button } from "flowbite-react";

export default function Home() {
  
  return (
    <>
      <div className="text-rose-500">
        This is home{" "}
        <Button
          onClick={() => {
            console.log("clicked");
          }}
        >
          Click me
        </Button>
      </div>
    </>
  );
}
