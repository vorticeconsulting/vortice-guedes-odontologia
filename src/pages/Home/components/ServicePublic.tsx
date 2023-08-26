import imageService from '../../../assets/home/Image_sonile_03.jpeg'

export function ServicePublic() {
  return (
    <div className="mobile:flex-col max-w-7xl w-[90%] mx-auto flex gap-24 my-28">
      <div className="mobile:w-[100%] mobile:h-[21rem] mobile:overflow-y-hidden bg-color-600 w-[30rem] h-[25rem] rounded-md relative -z-10">
        <img
          className="mobile:w-[100%] ml-10 mt-10 rounded-md overflow-hidden"
          src={imageService}
          alt="Imagem de uma dentista trabalhando em seu consultorio"
        />
      </div>
      <div className="max-w-2xl space-y-6">
        <h3 className="font-bold text-color-500">
          Atendimento de emergência 24h
        </h3>
        <h2 className="font-bold text-5xl text-color-200">
          Tratamento gentil e amigável a todos os pacientes.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed font-light text-color-200">
          Descubra um tratamento odontológico que combina expertise profissional
          com cuidado gentil e amigável. Nossa equipe está empenhada em tornar
          cada visita uma experiência confortável, atendendo às suas
          necessidades com delicadeza. Dê um passo em direção a um sorriso
          saudável e positivo, onde o seu conforto é a nossa prioridade.
        </p>
      </div>
    </div>
  )
}
