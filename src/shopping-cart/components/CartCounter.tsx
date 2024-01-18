"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, resetCount, substractOne } from "@/store/counter/counterSlice";
import React, { useState, useEffect } from "react";

interface Props {
    value?: number
}

interface CounterResponse {
  method: string
  counter: number
}

const getApiCounter = async () : Promise<CounterResponse> => { 
  const data = await fetch('/api/counter').then(res => res.json())
  return data
}

export const CartCounter = ({ value = 10 }: Props) => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()
  

  useEffect(() => {
    getApiCounter().then(({counter}) => dispatch(initCounterState(counter)))
  }, [dispatch, value]);
  
  

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex justify-center items-start p-2">
        <button
          className="p-2 bg-slate-800 text-white rounded-xl m-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="p-2 bg-slate-800 text-white rounded-xl m-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
