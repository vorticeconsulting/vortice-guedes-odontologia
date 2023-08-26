import avatar1 from '../../../assets/home/Mask Group.png'
import avatar2 from '../../../assets/home/Mask Group1.png'
import avatar3 from '../../../assets/home/Mask Group2.png'
import { CardsTestimony } from './CardsTestimony'

const data = [
  {
    avatar: avatar1,
    name: 'Fernando Lima',
    description:
      'Já tratei toda a família com o Dr. Victor e a Dra. Sonile. O atendimento como sempre super profissional e o resultado foi ótimo. Recomendo o serviço desses profissionais.',
  },
  {
    avatar: avatar2,
    name: 'Eduardo Campos',
    description:
      'Pessoal família e muito educado. Trabalho de qualidade e garantido. Não tenho dúvidas os melhores com quem já tratei.',
  },
  {
    avatar: avatar3,
    name: 'Daniele Oliveira',
    description:
      'O Dr. Victor e a Dra. Sonile são os melhores profissionais que existem. Atenciosos, cuidadosos, super dedicados e preocupados com nosso bem estar. Sou muito satisfeita com o trabalho...',
  },
]

export function Testimony() {
  return (
    <div className="max-w-7xl w-[90%] mx-auto my-60 p-8 bg-color-600 rounded-2xl space-y-6">
      <h3 className="font-bold text-color-500">Depoimentos</h3>
      <h2 className="font-bold text-5xl text-color-200">
        Veja o que os nossos pacientes falam sobre nós
      </h2>
      <p className="text-lg leading-relaxed font-light text-color-200">
        Nossas sólidas recomendações de pacientes satisfeitos falam por si.
        Clientes felizes confiam em nossos cuidados excepcionais e resultados
        impressionantes. Junte-se a nós para experimentar a qualidade que
        transforma sorrisos e vidas.
      </p>

      <div className="mobile:grid-cols-1 py-32 grid grid-cols-3 gap-5">
        {data.map((info, index) => (
          <CardsTestimony
            key={index}
            avatar={info.avatar}
            name={info.name}
            description={info.description}
          />
        ))}
      </div>
    </div>
  )
}
