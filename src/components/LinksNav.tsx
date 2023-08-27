import { Link } from 'react-router-dom'

interface LinksNavProps {
  name: string
  link: string
  openMobile: boolean
  onHandleCloseMenuMobile: () => void
}

export function LinksNav({
  name,
  link,
  openMobile,
  onHandleCloseMenuMobile,
}: LinksNavProps) {
  function handleCloseMenuMobile() {
    onHandleCloseMenuMobile()
  }

  return (
    <li>
      <Link
        onClick={handleCloseMenuMobile}
        className={`${
          openMobile === true
            ? 'text-color-100'
            : 'text-lg font-bold text-color-200 hover:opacity-80'
        }`}
        to={link}
      >
        {name}
      </Link>
    </li>
  )
}
