import { Link } from 'react-router-dom'

import { CardsSpecialties } from './CardsSpecialties'

import { ChevronsRight } from 'lucide-react'

import specialties1 from '../../../assets/home/dentures.png'
import specialties2 from '../../../assets/home/implants.png'
import specialties3 from '../../../assets/home/whitening.png'
import specialties4 from '../../../assets/home/rootcanal.png'

const data = [
  {
    image: specialties1,
    title: 'Próteses Dentárias',
    description:
      'Recupere o seu sorriso radiante e a confiança em si mesmo com as nossas próteses dentárias de última geração! Feitas sob medida para se adaptarem perfeitamente à sua boca, as nossas próteses combinam conforto e estética para lhe proporcionar uma aparência natural e uma mastigação eficaz. Desfrute de refeições deliciosas e interações sociais sem preocupações. Deixe-nos ajudar você a redescobrir o prazer de sorrir.Agende a sua consulta hoje mesmo e embarque em uma jornada para um sorriso renovado!',
    messege:
      'Agende a sua consulta hoje mesmo e embarque em uma jornada para um sorriso renovado!',
  },
  {
    image: specialties2,
    title: 'Implantes',
    description:
      'Transforme a sua vida com os implantes dentários revolucionários que oferecemos! Tenha de volta a sua capacidade de mastigar, falar e sorrir com confiança. Nossos especialistas altamente qualificados garantem um processo seguro e confortável, adaptado às suas necessidades individuais. Com tecnologia de ponta e materiais duradouros, os nossos implantes proporcionam resultados excepcionais. Não espere mais para recuperar a sua qualidade de vida.Agende a sua consulta e dê o primeiro passo em direção a um sorriso radiante e funcional!',
    messege:
      'Agende a sua consulta e dê o primeiro passo em direção a um sorriso radiante e funcional!',
  },
  {
    image: specialties3,
    title: 'Clareamento',
    description:
      'Descubra um sorriso mais brilhante e confiante com o nosso tratamento de clareamento dentário de excelência! Deixe para trás manchas e a cativante em cada sorriso. Nossa abordagem segura e eficaz oferece resultados visíveis em pouco tempo, sob a supervisão de profissionais experientes. Realce a sua beleza natural e ilumine o seu rosto com dentes radiantes. Não adie mais a oportunidade de ter um sorriso deslumbrante.Entre em contato conosco hoje mesmo e comece a jornada para um sorriso mais branco e luminoso!',
    messege:
      'Entre em contato conosco hoje mesmo e comece a jornada para um sorriso mais branco e luminoso!',
  },
  {
    image: specialties4,
    title: 'Tratamento de Canal',
    description:
      'Recupere o conforto e a saúde dos seus dentes com o nosso tratamento de canal de excelência. Nossa equipe altamente qualificada e equipamentos de última geração garantem uma experiência livre de desconforto. Resolvemos eficazmente problemas como dor intensa, inchaço e sensibilidade, restaurando a vitalidade do seu sorriso. Não deixe que problemas dentários prejudiquem sua qualidade de vida. Agende agora mesmo a sua consulta e confie em nós para devolver o seu sorriso ao seu melhor estado.',
    messege:
      'Agende agora mesmo a sua consulta e confie em nós para devolver o seu sorriso ao seu melhor estado.',
  },
]

export function Specialties() {
  return (
    <div className="max-w-7xl w-[90%] mx-auto space-y-10">
      <h3 className="font-bold text-color-500">Especialidades</h3>
      <div className="mobile:flex-col flex items-start gap-5 justify-between">
        <h2 className="font-bold text-5xl text-color-200">
          Sinta-se bem com sua saúde bucal
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed font-light text-color-200">
          Um sorriso saudável é o reflexo do seu bem-estar geral. Cuide da sua
          saúde bucal com atenção e prevenção, garantindo não apenas dentes
          fortes e brilhantes, mas também uma vida cheia de confiança e
          conforto. Invista na sua saúde bucal hoje para colher os benefícios de
          um sorriso radiante amanhã.
        </p>
      </div>

      <div className="mobile:grid-cols-1 grid grid-cols-4 gap-4">
        {data.map((info, index) => (
          <CardsSpecialties
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
            messege={info.messege}
          />
        ))}
      </div>

      {/* link service */}
      <div className="flex justify-center py-32">
        <Link
          className="flex items-center justify-center gap-2 bg-color-500 w-[20rem] h-[3rem] text-color-100 rounded-md font-bold"
          to={'/servicos'}
        >
          Veja toda a lista de serviços
          <ChevronsRight />
        </Link>
      </div>
    </div>
  )
}
