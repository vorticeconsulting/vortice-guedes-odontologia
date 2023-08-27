import { Link } from 'react-router-dom'
import canal from '../../assets/Services/service-banner-root.png'

import img1 from '../../assets/Services/services-pain.png'
import img2 from '../../assets/Services/service-nigth.png'
import img3 from '../../assets/Services/service-sensitivity.png'
import img4 from '../../assets/Services/service-tooth.png'
import img5 from '../../assets/Services/service-gums.png'
import { CardsServices } from './components/CardsServices'

import image1 from '../../assets/Services/service-gallery-img1.png'
import image2 from '../../assets/Services/service-gallery-img2.png'
import image3 from '../../assets/Services/service-gallery-img3.png'
import image4 from '../../assets/Services/service-gallery-img4.png'
import image5 from '../../assets/Services/service-gallery-img5.png'
import image6 from '../../assets/Services/service-gallery-img6.png'
import { GalleryService } from './components/GalleryService'

const data = [
  {
    image: img1,
    title: 'Dor espontânea',
    description: 'Dor espontânea mesmo quando você não está comendo ou bebendo',
  },
  {
    image: img2,
    title: 'Dor no meio da noite',
    description: 'Dor que te acorda no meio da noite',
  },
  {
    image: img3,
    title: 'Sensibilidade extrema',
    description:
      'Extrema sensibilidade ao frio ou calor quando você bebe ou come',
  },
  {
    image: img4,
    title: 'Descoloração do dente',
    description: 'Escurecimento ou descoloração de um dente',
  },
  {
    image: img5,
    title: 'Sensibilidade nas gengivas',
    description: 'Para nós não importa o seu problema, toda boca é bem-vinda.',
  },
]

const images = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
]

export function Service() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl w-[90%] mx-auto my-40">
        <div className="mobile:flex-col mobile:h-auto bg-color-600 rounded-3xl w-[100%] h-[40rem] p-4 flex gap-3">
          <div className="space-y-10">
            <h2 className="text-6xl text-color-200 font-bold max-w-xl mt-16 -tracking-wide leading-tight">
              Tratamento de canal
            </h2>
            <p className="text-lg leading-relaxed font-light text-color-200 max-w-2xl">
              Os tratamentos de canal são considerados os mais complexos por
              pacientes. Mas nosso time vai lhe deixar confortavel e seguro!
            </p>
            <Link
              className="bg-color-200 px-4 py-5 text-color-100 font-bold rounded-md mt-6 w-[12rem] flex items-center justify-center"
              to={'/contato'}
            >
              Tire suas dúvidas
            </Link>
          </div>

          <img
            src={canal}
            alt="Foto com um paciente realizando tratamento de canal"
          />
        </div>

        <div className="bg-color-700 my-40 p-4 rounded-3xl">
          <h3 className="font-bold text-color-500">Sintomas</h3>
          <h2 className="text-6xl text-color-200 font-bold mx-auto text-center max-w-3xl mt-16 -tracking-wide leading-tight">
            Sinais e sintomas de que você precisa de canal
          </h2>
          <p className="text-lg leading-relaxed font-light text-color-200 text-center my-5">
            Vamos listar abaixo os principais sintomas que apontam para uma
            possivel necessidade de tratar o canal do seu dente. Atenção aos
            sintomas e caso vc se enquadre em algum deles, Venha ate a nossa
            clinica que faremos uma avaliação profissional.
          </p>

          <div className="mobile:grid-cols-1 mt-20 grid grid-cols-2 gap-8 gap-x-20 px-8">
            {data.map((info, index) => (
              <CardsServices
                key={index}
                image={info.image}
                title={info.title}
                description={info.description}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-color-500">Galeria de fotos</h3>
          <div>
            <h2 className="text-6xl text-color-200 font-bold mx-auto text-center max-w-3xl mt-16 -tracking-wide leading-tight">
              Veja como nosso time entra em ação
            </h2>
            <p className="text-lg leading-relaxed font-light text-color-200 text-center my-5">
              A Dra. Sonile Guedes da Matta tem especialização em Endodontia
              Sendo uma profissional altamente preparada pra te ajudar a superar
              esse incomodo em seus dentes, de forma tranquila e profissional.
            </p>
          </div>

          <div className="mobile:flex-col mobile:gap-10 flex flex-wrap gap-1">
            {images.map((info, index) => (
              <GalleryService key={index} image={info.image} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
