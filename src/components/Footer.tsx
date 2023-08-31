import { Link } from 'react-router-dom'
import logo from '../assets/footer/logo-footer.png'
import { Facebook, Instagram } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

export function Footer() {
  const CELULAR_EMPRESA = '553230612136'
  const encode = encodeURI('Olá! Gostaria de informações.')
  const URL = `https://wa.me/${CELULAR_EMPRESA}?text=${encode}`
  const facebook = 'https://www.facebook.com/cuidarodontologiabenfica/'
  const instagram = 'https://www.instagram.com/guedesdamattaodontologia/'

  return (
    <footer className="bg-color-200 py-10 w-full">
      <div className="mobile:flex-col max-w-7xl w-[90%] mx-auto flex gap-20">
        <div className="space-y-5">
          <img src={logo} alt="Logo" />
          <p className="text-color-100">
            Guesdes da Matta Odontologia é uma clínica de alto nível para
            tratamentos dentários, preventivos, e corretivos em Juiz de Fora/MG
          </p>

          <div className="flex flex-col gap-3">
            <strong className="text-color-300">
              Siga-nos nas redes sociais
            </strong>
            <div className="flex items-center gap-2">
              <Facebook size={24} color="#fff" />
              <Link className="text-color-400" to={facebook} target="_blank">
                Facebook
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <WhatsappLogo size={24} color="#fff" />
              <Link className="text-color-400" to={URL} target="_blank">
                Whatsapp
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Instagram size={24} color="#fff" />
              <Link className="text-color-400" to={instagram} target="_blank">
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <strong className="text-color-300">Links</strong>
          <Link className="text-color-400" to={'/sobre'}>
            Sobre nós
          </Link>
          <Link className="text-color-400" to={'/servicos'}>
            Nossos serviços
          </Link>
        </div>

        <div className="space-y-5">
          <strong className="text-color-300">Contato e informaçẽos</strong>

          <div className="flex flex-col">
            <strong className="font-light text-color-300">Telefone</strong>
            <span className="text-color-400">32 3061 2136</span>
          </div>

          <div className="flex flex-col">
            <strong className="text-color-300">Funcionamento</strong>
            <span className="text-color-400">
              Segunda-feira, 12:30 às 18:30
            </span>
            <span className="text-color-400">Terça-feira, 08:30 às 17:30</span>
            <span className="text-color-400">Quarta-feira, 08:30 às 18:30</span>
            <span className="text-color-400">Quinta-feira, 08:30 às 18:30</span>
            <span className="text-color-400">Sexta-feira, 12:30 às 17:30</span>
          </div>

          <div className="flex flex-col">
            <strong className="text-color-300">Endereço</strong>
            <span className="text-color-400">
              Shopping - R. Marília, 510 - sala 302 - Benfica, Juiz de Fora -
              MG, 36090-330
            </span>
          </div>
        </div>
      </div>

      <div className="mobile:flex-col-reverse max-w-7xl w-[90%] mx-auto flex justify-between gap-20 mt-24">
        <strong className="mobile:text-center text-color-400">
          ©Guedes da Matta Odontologia. Todos os direitos Reservados
        </strong>

        <div className="mobile:justify-center flex gap-20 mobile:gap-4">
          <Link className="text-color-400" to={'/'}>
            Termo de uso
          </Link>
          <Link className="text-color-400" to={'/'}>
            Politica de privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
