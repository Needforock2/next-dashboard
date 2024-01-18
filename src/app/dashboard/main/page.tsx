import { SimpleWidget } from '@/components'
import React from 'react'
import { GridWidget } from '../../../components/GridWidget';


export const metadata = {
 title: 'Main page',
 description: 'main page',
};

export default function Main() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <GridWidget/>
    </div>
  );
}
