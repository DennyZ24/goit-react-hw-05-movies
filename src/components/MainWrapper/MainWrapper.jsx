import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import s from 'components/MainWrapper/MainWrapper.module.css';

export default function MainWrapper() {
  return (
     <main className={s.container}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet/>  
      </Suspense>
    </main>
  )
}