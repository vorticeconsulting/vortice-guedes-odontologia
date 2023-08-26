import { Link } from 'react-router-dom'

interface LinksNavProps {
  name: string
  link: string
}

export function LinksNav({ name, link }: LinksNavProps) {
  return (
    <li>
      <Link
        className="text-lg font-bold text-color-200 hover:opacity-80"
        to={link}
      >
        {name}
      </Link>
    </li>
  )
}
