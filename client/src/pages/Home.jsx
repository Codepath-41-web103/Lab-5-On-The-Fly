import React from "react";
import { Button } from "flowbite-react";
import { Layout } from "../components/wrappers/index";
export default function Home() {
  
  return (
    <Layout>
      <div className="text-rose-500">
        This is home{" "}
        <Button
          onClick={() => {
            console.log("clicked");
          }}
          className=""
        >
          Click me
        </Button>
      </div>
    </Layout>
  );
}
