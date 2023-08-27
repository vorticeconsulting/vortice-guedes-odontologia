interface GalleryServiceProps {
  image: string
}

export function GalleryService({ image }: GalleryServiceProps) {
  return (
    <img
      className="mobile:object-cover mobile:rounded-3xl"
      src={image}
      alt="Imagens dos serviços realizados no consultório"
    />
  )
}
