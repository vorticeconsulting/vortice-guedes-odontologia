import { Line } from '../../components/Line'
import { Specialties } from './components/Specialties'
import { ServicePublic } from './components/ServicePublic'
import { Banner } from './components/Banner'
import { Specialization } from './components/Specialization'
import { Experts } from './components/Experts'
import { Testimony } from './components/Testimony'
import { Contact } from './components/Contact'

export function Home() {
  return (
    <main className="flex-1">
      {/* banner */}
      <Banner />

      {/* text-variables */}
      <div className="max-w-7xl w-[90%] mx-auto my-40">
        <h2 className="text-center text-4xl font-medium text-color-200 max-w-6xl mx-auto">
          Estamos refazendo o que é a experiência odontológica e orgulhosamente
          estabelecendo um novo padrão para o cuidado ao paciente.
        </h2>
        <Line />
      </div>

      {/* specialties */}
      <Specialties />

      {/* service public */}
      <ServicePublic />

      {/* specialties */}
      <Specialization />

      {/* Experts */}
      <Experts />

      {/* Testimony */}
      <Testimony />

      {/* Contact */}
      <Contact />
    </main>
  )
}
