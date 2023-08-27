export function Form() {
  return (
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
  )
}
