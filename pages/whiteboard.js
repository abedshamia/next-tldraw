import React from "react";
// import dynamic from 'next/dynamic'
import { Tldraw } from "@tldraw/tldraw";

// const Tldraw = dynamic(() => import('@tldraw/tldraw'), {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
// })

const Whiteboard = () => {
  return (
    <div>
      <Tldraw />
    </div>
  );
};

export default Whiteboard;
