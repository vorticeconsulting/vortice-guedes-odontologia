import { Form } from '../../components/Form'

export function Contact() {
  return (
    <main className="flex-1">
      <div className="mt-40 max-w-7xl w-[90%] mx-auto mb-40">
        <h2 className="text-center text-4xl font-medium text-color-200 max-w-6xl mx-auto">
          Entre em contato
        </h2>
        <p className="max-w-xl text-center mx-auto mt-10 text-lg leading-relaxed font-light text-color-200">
          Suas dúvidas importam! Deixe-nos responder a todas as suas perguntas
          sobre tratamento odontológico. Preencha nosso formulário e embarque no
          caminho para um sorriso mais esclarecido e saudável.
        </p>

        <div className="max-w-xl w-[90%] mx-auto mt-20">
          <Form />
        </div>
      </div>
    </main>
  )
}
