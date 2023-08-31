import { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messege, setMessege] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handleChangeMessege(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessege(e.target.value)
  }

  const CELULAR_EMPRESA = '5532998139420'
  const encode = encodeURI(
    `*Nome:* ${name} 
     \n*E-mail:* ${email} 
     \n*Mensagem:* ${messege}
    `,
  )
  const URL = `https://wa.me/${CELULAR_EMPRESA}?text=${encode}`

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label className="font-bold text-sm text-color-200" htmlFor="">
          Nome
        </label>
        <input
          onChange={handleChangeName}
          value={name}
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
          onChange={handleChangeEmail}
          value={email}
          className="rounded-sm p-3 border-b-4 border-color-200"
          type="email"
          placeholder="Digite seu e-mail"
        />
      </div>

      <textarea
        onChange={handleChangeMessege}
        value={messege}
        className="bg-color-600 p-3 h-auto resize-none text-color-200"
        placeholder="Digite sua mensagem"
      ></textarea>

      <Link
        to={URL}
        target="_blank"
        className="flex items-center justify-center bg-color-200 p-3 rounded text-color-100 font-bold"
        type="submit"
      >
        Enviar
      </Link>
    </form>
  )
}
