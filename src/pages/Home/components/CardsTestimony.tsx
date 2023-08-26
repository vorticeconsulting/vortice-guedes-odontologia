import star from '../../../assets/home/stars.svg'

interface CardsTestimonyProps {
  avatar: string
  name: string
  description: string
}

export function CardsTestimony({
  avatar,
  name,
  description,
}: CardsTestimonyProps) {
  return (
    <div className="mobile:mt-8 bg-color-100 rounded-lg p-4 text-center space-y-4">
      <img
        className="mx-auto -mt-14 mb-4 rounded-full border-4 p-2 border-color-200"
        src={avatar}
        alt="Foto de um cliente dando seu depoimento"
      />
      <strong>{name}</strong>
      <p>{description}</p>
      <img className="mx-auto" src={star} alt="Icone de estrelas" />
    </div>
  )
}
