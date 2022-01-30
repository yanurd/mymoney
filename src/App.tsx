import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
const Register = lazy(() => import("./pages/Register"))
const PasswordRecovery = lazy(() => import("./pages/PasswordRecovery"))

const App = () => {
  return (
    <section className="bg-main min-h-screen flex flex-col justify-center items-center" >
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/register' element={
          <Suspense fallback={<>...</>} >
            <Register />
          </Suspense>} />
        <Route path='/password-recovery' element={
          <Suspense fallback={<>...</>} >
            <PasswordRecovery />
          </Suspense>} />
      </Routes>
    </BrowserRouter>
    </section>
    
  )
}

export default App