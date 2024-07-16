"use client";
import { useState } from "react";

export default function Home() {
  const [sequence, setSequence] = useState<number[]>([]);

  const handleSequence = (index: number) => {
    if (!sequence.includes(index)) {
      // Using the functional update form to ensure we get the updated state
      setSequence((prevSequence) => [...prevSequence, index]);
    }
  };

  console.log(sequence);

  return (
    <main>
      <div className="grid grid-cols-3 gap-4 w-96">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((box) => (
          <div
            onClick={() => handleSequence(box)}
            key={box}
            className={`h-32 w-full text-white bg-black`}
          >
            {box}
          </div>
        ))}
      </div>
    </main>
  );
}
