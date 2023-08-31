import { Link } from 'react-router-dom'

interface ButtonsBannerProps {
  icon: string
  title: string
  tel: string
}

export function ButtonsBanner({ icon, title, tel }: ButtonsBannerProps) {
  const CELULAR_EMPRESA = '553230612136'
  const encode = encodeURI('Olá! Gostaria de informações.')
  const URL = `https://wa.me/${CELULAR_EMPRESA}?text=${encode}`

  return (
    <div className="flex flex-col items-center gap-2">
      <Link to={URL} target="_blank" rel="noreferrer">
        <img
          className="rounded-3xl w-16"
          src={icon}
          alt="Icone"
          title="Clique é entre em contato"
        />
      </Link>
      <div className="flex flex-col items-center">
        <strong className="text-lg text-color-200 font-bold">{title}</strong>
        <span className="text-sm text-color-900 font-medium">{tel}</span>
      </div>
    </div>
  )
}
