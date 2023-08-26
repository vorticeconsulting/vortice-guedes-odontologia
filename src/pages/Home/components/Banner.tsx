import { ButtonsBanner } from './ButtonsBanner'

import phone from '../../../assets/footer/phone--footer.png'
import whatsapp from '../../../assets/WhatsApp.png'

const data = [
  {
    icon: phone,
    title: 'Ligue agora',
    tel: '32 3061 2136',
  },
  {
    icon: whatsapp,
    title: 'Chama no Whatsapp',
    tel: '32 3061 2136',
  },
]

export function Banner() {
  return (
    <div className="bg-banner w-full h-[700px] bg-no-repeat bg-cover bg-left mt-32">
      <div className="max-w-7xl w-[90%] mx-auto space-y-10 py-4">
        <h1 className="mobile:text-center text-6xl font-bold max-w-xl mt-16 -tracking-wide leading-tight">
          Confie seu sorriso a um profissional
        </h1>

        <p className="mobile:text-center text-base font-light leading-relaxed tracking-wide text-color-1000 max-w-lg">
          Confie em nossa equipe de dentistas experientes para cuidar do seu
          sorriso com dedicação e expertise. Com anos de prática e um
          compromisso com o seu conforto, estamos aqui para oferecer tratamentos
          precisos e personalizados, garantindo que você sorria com confiança em
          cada etapa do processo.
        </p>

        {/* banner-buttons */}
        <div className="mobile:justify-center flex items-center gap-10">
          {data.map((info, index) => (
            <ButtonsBanner
              key={index}
              icon={info.icon}
              title={info.title}
              tel={info.tel}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
