import judment from '../../../assets/home/judment.png'
import safety from '../../../assets/home/safety.png'
import insurance from '../../../assets/home/insurance.png'
import service from '../../../assets/home/service.png'
import { CardsSpecialization } from './CardsSpecialization'

const data = [
  {
    icon: safety,
    title: 'Segurança Total',
    description:
      'Priorizamos sua segurança com nosso controles de qualidade de alto padrão.',
  },
  {
    icon: insurance,
    title: 'Convênios',
    description:
      'Trabalhamos com convenios odontológicos como a OdontoPrime e outros.',
  },
  {
    icon: service,
    title: 'Serviço odontológico completo',
    description:
      'Nossa clínica oferece um serviço odontológico completo, desde exames a implantes, facetas a RX.',
  },
  {
    icon: judment,
    title: 'Não fazemos julgamento',
    description:
      'independente de classe, cor, credo ou opção,toda boca e bem-vinda.',
  },
]

export function Specialization() {
  return (
    <div className="max-w-7xl w-[90%] mx-auto my-32 space-y-6 bg-color-600 rounded-2xl p-8">
      <h3 className="font-bold text-color-500">Especialistas</h3>
      <h2 className="mobile:text-5xl font-bold text-5xl text-color-200">
        Atendimento especializados e experiente
      </h2>
      <p className="text-lg leading-relaxed font-light text-color-200">
        Experimente a excelência do tratamento odontológico especializado e
        altamente experiente que oferecemos. Nossa equipe dedicada de
        profissionais qualificados está comprometida em fornecer soluções
        precisas e personalizadas para todas as suas necessidades dentárias.
        Confie em nós para transformar o seu sorriso com conhecimento e cuidado
        especializado.
      </p>

      <div className="mobile:grid-cols-1 pt-20 grid grid-cols-2 gap-4">
        {data.map((info, index) => (
          <CardsSpecialization
            key={index}
            icon={info.icon}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>
    </div>
  )
}
