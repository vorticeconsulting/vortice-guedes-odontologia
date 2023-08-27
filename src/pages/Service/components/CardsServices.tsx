interface CardsServicesProps {
  image: string
  title: string
  description: string
}

export function CardsServices({
  image,
  title,
  description,
}: CardsServicesProps) {
  return (
    <div className="flex gap-2">
      <img
        className="hover:shadow-md hover:rounded-2xl hover:cursor-pointer hover:transition-all"
        src={image}
        alt="Icone"
      />
      <div className="space-y-4">
        <strong className="font-bold text-lg text-color-200">{title}</strong>
        <p className="text-sm text-color-1000">{description}</p>
      </div>
    </div>
  )
}
