import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
