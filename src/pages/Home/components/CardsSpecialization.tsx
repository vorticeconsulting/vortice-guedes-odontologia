interface CardsSpecializationProps {
  icon: string
  title: string
  description: string
}

export function CardsSpecialization({
  icon,
  title,
  description,
}: CardsSpecializationProps) {
  return (
    <div className="flex items-center gap-2">
      <img
        className="hover:shadow-md hover:rounded-2xl hover:cursor-pointer hover:transition-all"
        src={icon}
        alt="Icone"
      />
      <div className="space-y-4">
        <h4 className="font-bold text-lg text-color-200">{title}</h4>
        <p className="text-sm text-color-1000">{description}</p>
      </div>
    </div>
  )
}
