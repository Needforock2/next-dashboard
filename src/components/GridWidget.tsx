"use client";
import React from "react";
import { SimpleWidget } from ".";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const GridWidget = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count}
        subTitle={"Articulos en el carrito"}
        href="/dashboard/counter"
        icon={<IoCartOutline size={50} className="text-blue-600" />}
      />
    </div>
  );
};
