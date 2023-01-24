import Link from "next/link";
import React, { useState } from "react";

const scaleDigit = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export const LikertScale = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-row items-center">
      <text className="text-button mr-2">Strongly Disagree</text>
      {scaleDigit.map((item, val) => (
        <div
          onClick={() => {
            setClicked(!clicked);
          }}
          key={val}
        >
          <div
            key={val}
            className="w-20 h-20 text-white rounded-sm border border-blue m-1 flex items-center justify-center bg-button opacity-65 "
          >
            {item.id}
          </div>
        </div>
      ))}
      <text className="text-button ml-2">Strongly Agree</text>
    </div>
  );
};
