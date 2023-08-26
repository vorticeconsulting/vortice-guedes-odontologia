import { Link } from 'react-router-dom'

import logo from '../assets/home/logo_site_gm.png'
import { LinksNav } from './LinksNav'

const data = [
  {
    name: 'Sobre nós',
    link: '/about',
  },
  {
    name: 'Nossos serviços',
    link: '/service',
  },
  {
    name: 'Entre em contato',
    link: '/contact',
  },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 bg-color-400">
      <div className="max-w-7xl w-[90%] mx-auto flex items-center justify-between">
        <Link to={'/'}>
          <img className="w-40" src={logo} alt="Logo do consultório" />
        </Link>

        <nav className="mobile:hidden">
          <ul className="flex items-center gap-16">
            {data.map((link, index) => (
              <LinksNav key={index} name={link.name} link={link.link} />
            ))}
          </ul>
        </nav>

        <Link
          className="mobile:hidden bg-color-500 px-4 py-3 rounded-lg text-color-100 font-bold hover:bg-color-900 transition-all"
          to={'/'}
        >
          Tire suas dúvidas
        </Link>
      </div>
    </header>
  )
}
