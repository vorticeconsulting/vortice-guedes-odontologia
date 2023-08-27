import nextIcon from '../../../assets/home/nexticon.svg'
import casalDeDentistas from '../../../assets/home/image_casal_03.jpeg'

export function Experts() {
  return (
    <div className="mobile:flex-col max-w-7xl w-[90%] mx-auto my-60 flex gap-8">
      <div className="space-y-6">
        <h3 className="font-bold text-color-500">Experts em Odontologia</h3>
        <h2 className="font-bold text-5xl text-color-200 max-w-2xl">
          Odontologia de alto nível, com os melhores dentistas da zona norte de
          JF e Região
        </h2>
        <p className="text-lg leading-relaxed font-light text-color-200 max-w-2xl">
          Nossos dentistas, verdadeiros mestres do sorriso, estão comprometidos
          em fornecer cuidados excepcionais que refletem sua vasta experiência e
          paixão pela odontologia. Com habilidades de última geração e atenção
          calorosa, nossa equipe garantirá que cada visita resulte em um sorriso
          deslumbrante, refletindo a excelência de nossos profissionais.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img src={nextIcon} alt="Icon" />
            <strong className="font-bold text-color-200">
              Equipe odontológica de primeira qualidade
            </strong>
          </div>
          <div className="flex items-center gap-4">
            <img src={nextIcon} alt="Icon" />
            <strong className="font-bold text-color-200">
              Serviços odontológicos de última geração
            </strong>
          </div>
          <div className="flex items-center gap-4">
            <img src={nextIcon} alt="Icon" />
            <strong className="font-bold text-color-200">
              Os melhores preços em todos os tratamentos dentários
            </strong>
          </div>
        </div>
      </div>

      <div>
        <div className="mobile:overflow-x-hidden mobile:w-[100%] mobile:overflow-y-hidden bg-color-800 w-[35rem] h-[30rem] relative rounded-3xl -z-10">
          <img
            className="rounded-3xl absolute top-10 left-10"
            src={casalDeDentistas}
            alt="Foto com dois dentistas, uma mulher e um homem"
          />
        </div>
      </div>
    </div>
  )
}
