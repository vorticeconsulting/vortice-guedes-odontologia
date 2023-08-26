interface CardsSpecialtiesProps {
  image: string
  title: string
  description: string
  messege: string
}

export function CardsSpecialties({
  image,
  title,
  description,
  messege,
}: CardsSpecialtiesProps) {
  return (
    <div
      className={`flex flex-col border border-color-600 text-center p-8 rounded-3xl hover:border-none hover:cursor-pointer`}
    >
      <div
        className={`bg-[#d9ebfa] rounded-2xl h-[15rem] flex items-center justify-center`}
      >
        <img
          className="w-[7rem] h-[7rem]"
          src={image}
          alt="Imagem ilustrativas dentários"
        />
      </div>
      <h4 className="font-bold text-xl my-5">{title}</h4>
      <p className="leading-relaxed text-lg text-color-300">
        {description}
        <span className="text-color-200 font-bold block">{messege}</span>
      </p>
    </div>
  )
}
