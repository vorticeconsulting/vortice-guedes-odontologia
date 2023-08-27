import { Link } from 'react-router-dom'

import logo from '../assets/home/logo_site_gm.png'
import { LinksNav } from './LinksNav'
import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'

const data = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Sobre nós',
    link: '/sobre',
  },
  {
    name: 'Nossos serviços',
    link: '/servicos',
  },
  {
    name: 'Entre em contato',
    link: '/contato',
  },
]

export function Header() {
  const [openMobile, setOpenMobile] = useState(false)

  function handleOpenMenuMobile() {
    setOpenMobile(!openMobile)
  }

  function handleCloseMenuMobile() {
    const stateInitMenuMobile = false
    setOpenMobile(stateInitMenuMobile)
  }

  return (
    <header className="fixed top-0 left-0 w-full py-4 bg-color-400 flex">
      <div
        className={`${
          openMobile === true
            ? 'w-screen'
            : 'max-w-7xl w-[90%] mx-auto flex items-center justify-between'
        }`}
      >
        <Link to={'/'}>
          <img
            className={`${openMobile === true ? 'ml-[1.9rem] w-40' : 'w-40'}`}
            src={logo}
            alt="Logo do consultório"
          />
        </Link>

        <nav
          className={`${
            openMobile === true
              ? 'opacity-100 bg-color-200 top-10 w-full h-[8rem] py-4 z-10 transition-transform'
              : 'mobile:opacity-0 mobile:absolute mobile:top-0 mobile:left-0 mobile:-translate-y-full'
          } `}
        >
          <ul
            className={`${
              openMobile === true
                ? 'flex-col text-center text-color-100'
                : 'flex items-center justify-center gap-16'
            }`}
          >
            {data.map((link, index) => (
              <LinksNav
                key={index}
                name={link.name}
                link={link.link}
                openMobile={openMobile}
                onHandleCloseMenuMobile={handleCloseMenuMobile}
              />
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

      <button
        className="absolute opacity-0 mobile:opacity-100 mobile:top-8 mobile:right-[0] mobile:mr-[1rem] mobile:text-color-200 mobile:text-3xl"
        onClick={handleOpenMenuMobile}
      >
        {openMobile === true ? <X /> : <List className="" />}
      </button>
    </header>
  )
}
