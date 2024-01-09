"use client";
import React, { useState } from "react";

interface Props {
    value?: number
}

export const CartCounter = ({value = 10}: Props) => {
  const [counter, setCounter] = useState(value);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex justify-center items-start p-2">
        <button
          className="p-2 bg-slate-800 text-white rounded-xl m-2"
          onClick={increase}
        >
          +1
        </button>
        <button
          className="p-2 bg-slate-800 text-white rounded-xl m-2"
          onClick={decrease}
        >
          -1
        </button>
      </div>
    </>
  );
};
