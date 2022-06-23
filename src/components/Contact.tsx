import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'


export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const userId = import.meta.env.VITE_EMAIL_USER_ID //@tp
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID

  console.log(import.meta.env.VITE_EMAIL_USER_ID)
  
  async function sendEmail(e: FormEvent) {
    e.preventDefault()

    let templateParams = {
      from_name: name,
      message: email + '--' + subject
    } 

    await emailjs.send(    
      serviceId,
      templateId,
      templateParams,
      userId  
    ).then((res) => { 
      setName('')
      setEmail('')
      setSubject('')
      alert('Email enviado com sucesso!')
    }, (error) => {
      console.log(error)
      alert('Ocorreu um erro, tente novamente!')
    })

  }
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF3659" fillOpacity="1" d="M0,160L34.3,138.7C68.6,117,137,75,206,90.7C274.3,107,343,181,411,202.7C480,224,549,192,617,160C685.7,128,754,96,823,74.7C891.4,53,960,43,1029,48C1097.1,53,1166,75,1234,90.7C1302.9,107,1371,117,1406,122.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    
    <section className="relative flex flex-col m-auto justify-center items-center text-center pb-8 bg-[#FF3659]">
      <div className="">
        <h1 className="text-white font-semibold text-4xl pb-6">Potencialize suas vendas</h1>
        <p className="max-w-xl leading-8 text-zinc-200 pb-4 px-2 lg:px-0">Aqui você encontra muitas soluções para otimizar a gestão da sua loja. 
        Não possui site ainda? Deixe seus dados que entramos em contato!
        </p>
      </div>

      <div className="flex flex-wrap gap-2 max-w-xl mt-12">
        <form  id="contact" onSubmit={sendEmail}>
          <input type="text"
            className="rounded-xl shadow-sm border-none w-48 mr-3 text-sm py-2 placeholder-zinc-400 text-zinc-700" 
            placeholder="Nome:"
            value={name}
            onChange={(e) => {setName(e.target.value)} } 
          />
          <input type="text" 
            className="rounded-xl shadow-sm border-none w-48 text-sm py-2 placeholder-zinc-400 text-zinc-700"
            placeholder="Email:"
            value={email}
            onChange={(e) => {setEmail(e.target.value)} } 
          />
          <textarea 
            className="min-w-[396px] min-h-[112px] text-sm my-3 placeholder-zinc-400 text-zinc-700 border-none rounded-xl resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Deixe sua mensagem..."
            value={subject}
            onChange={(e) => {setSubject(e.target.value)}}
          />

          <button type="submit"
          className="bg-rose-800 hover:bg-rose-700 transition-colors text-white font-semibold rounded-xl min-w-[396px] py-2">Enviar</button>            
        </form>
      </div>
    </section>
    </>
  )
}