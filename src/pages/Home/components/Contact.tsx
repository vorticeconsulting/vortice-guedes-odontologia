import { Form } from '../../../components/Form'
import { AddressMap } from './AddressMap'

export function Contact() {
  return (
    <div className="mobile:flex-col max-w-7xl w-[90%] mx-auto my-32 flex gap-10">
      <div>
        <AddressMap />
      </div>

      <div className="space-y-6">
        <h3 className="font-bold text-color-500">Tire suas dúvidas</h3>
        <h2 className="font-bold text-5xl text-color-200">
          Cuidar do seu sorriso é um prazer!
        </h2>
        <p className="text-lg leading-relaxed font-light text-color-200">
          Suas dúvidas importam! Deixe-nos responder a todas as suas perguntas
          sobre tratamento odontológico. Preencha nosso formulário e embarque no
          caminho para um sorriso mais esclarecido e saudável.
        </p>

        <Form />
      </div>
    </div>
  )
}
