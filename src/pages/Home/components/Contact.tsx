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

        <form action="" className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="font-bold text-sm text-color-200" htmlFor="">
              Nome
            </label>
            <input
              className="rounded-sm p-3 border-b-4 border-color-200"
              type="text"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-sm text-color-200" htmlFor="">
              E-mail
            </label>
            <input
              className="rounded-sm p-3 border-b-4 border-color-200"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          <textarea
            className="bg-color-600 p-3 h-auto resize-none text-color-200"
            placeholder="Digite sua mensagem"
          ></textarea>

          <button
            className="bg-color-200 p-3 rounded text-color-100 font-bold"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
