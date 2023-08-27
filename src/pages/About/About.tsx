import { Link } from 'react-router-dom'
import imgAbout from '../../assets/about/about-first.png'
import equipe from '../../assets/about/Equipe.png'
import dentista1 from '../../assets/about/Sonile.png'
import dentista2 from '../../assets/about/Victor.png'

export function About() {
  return (
    <main className="flex-1">
      <div className="mobile:flex-col max-w-7xl w-[90%] mx-auto my-40 flex gap-20">
        <div className="max-w-xl space-y-6">
          <h2 className="text-6xl text-color-200 font-bold max-w-xl mt-16 -tracking-wide leading-tight">
            Sobre nós
          </h2>
          <p className="text-lg leading-relaxed font-light text-color-200 max-w-2xl">
            Queremos que você se sinta incrível com seu bem-estar bucal. Não
            apenas duas vezes por ano, mas toda vez que você dá uma mordida,
            mostra seu sorriso ou compartilha um beijo.
          </p>

          <Link
            className="bg-color-200 px-4 py-5 text-color-100 font-bold rounded-md mt-6 w-[12rem] flex items-center justify-center"
            to={'/contato'}
          >
            Entre em contato
          </Link>
        </div>

        <div>
          <img src={imgAbout} alt="Imagens de um atendimento odontologico" />
        </div>
      </div>

      <div className='mobile:flex-col className="max-w-7xl w-[90%] mx-auto my-40 flex gap-10'>
        <img
          className="object-cover"
          src={equipe}
          alt="Imagem com a equipe de dentistas"
        />

        <div className="space-y-6">
          <h3 className="font-bold text-color-500">Nossas prioridades</h3>
          <h2 className="font-bold text-5xl text-color-200">
            Nossos Pacientes... Nossa Prioridade!
          </h2>
          <p className="text-lg leading-relaxed font-light text-color-200">
            Na nossa clínica odontológica, você é a nossa prioridade número um.
            Colocamos você em primeiro lugar, garantindo cuidados personalizados
            e atenção dedicada para alcançar o sorriso dos seus sonhos. Sua
            saúde bucal e satisfação são a nossa missão.
          </p>

          <Link
            className="bg-color-200 px-4 py-5 text-color-100 font-bold rounded-md mt-6 w-[12rem] flex items-center justify-center"
            to={'/contato'}
          >
            Tire suas dúvidas
          </Link>
        </div>
      </div>

      <div className="max-w-7xl w-[90%] mx-auto my-40">
        <div className="mobile:flex-col flex items-center gap-4">
          <div className="space-y-6">
            <h3 className="font-bold text-color-500">Conheça nosso time</h3>
            <h2 className="font-bold text-5xl text-color-200">
              Venha conhecer nosso time de especialistas
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed font-light text-color-200">
            Na Guedes da Matta Odontologia, orgulhamo-nos de contar com a melhor
            equipe de profissionais da cidade, dedicados a cuidar do seu sorriso
            com excelência e carinho. Confie em nós para proporcionar
            tratamentos odontológicos de alta qualidade e resultados que falam
            por si.
          </p>
        </div>
      </div>

      <div className="mobile:flex-col max-w-7xl w-[90%] mx-auto mb-40 flex justify-center gap-8">
        <div className="flex flex-col items-center bg-color-700 rounded-md p-5 gap-2 overflow-hidden">
          <img
            className="cursor-pointer"
            src={dentista1}
            alt="Uma foto da dentista Sonile"
          />
          <strong className="text-lg text-color-200 font-mono -tracking-widest italic">
            Sonile Guedes
          </strong>
        </div>

        <div className="flex flex-col items-center bg-color-700 rounded-md p-5 gap-2 overflow-hidden">
          <img
            className="cursor-pointer"
            src={dentista2}
            alt="Uma foto do dentista Victor"
          />
          <strong className="text-lg text-color-200 font-mono -tracking-widest italic">
            Victor da Matta
          </strong>
        </div>
      </div>
    </main>
  )
}
