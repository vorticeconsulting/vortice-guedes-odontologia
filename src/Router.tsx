import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Service } from './pages/Service/Service'
import { Contact } from './pages/Contact/Contact'
import { DefaultLayout } from './layouts/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Service />} />
        <Route path="/contato" element={<Contact />} />
      </Route>
    </Routes>
  )
}
