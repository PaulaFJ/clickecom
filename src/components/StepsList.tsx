import list from '../assets/list.svg'
import { Envelope, Checks, Handshake, ClipboardText, SignIn, User, DotsSix } from 'phosphor-react'

export const stepTypes = [
  {
    key: 0,
    title: 'Entre em contato conosco.',
    image: <Envelope size="32" />
  },
  {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    key: 1,
    title: 'Com nossa consultoria, escolha um marketplace com base no seu segmento',
    image: <Handshake size="32" />
  },
  {
    key: 2,
    title: 'Iremos estudar as políticas de vendas do marketplace escolhido',
    image: <ClipboardText size="32" />
  },
  {
    key: 3,
    title: 'Faça o cadastro preenchendo o formulário com as informações pedidas.',
    image: <SignIn size="32" />
  },
  {
    key: 4,
    title: 'Com a análise aprovada, agora é hora de padronizar cadastro e cadastrar',
    image: <User size="32" />
  },
  {
    key: 5,
    title: 'Agora só vender',
    image: <Checks size="32" />
  }
]
export function StepsList() {
  return (
    <section id="stepsList" className="flex flex-col gap-2 m-auto text-center relative">
      <h1 className="text-pink-700 font-semibold text-3xl pb-4">Começar a vender é facil:</h1>

      <div className="m-auto text-center mt-6 mb-6">
        <ul >
          {stepTypes.map((value) => {
             return (
              <li key={value.key} className="flex my-6 items-center text-left"> 
                <div className="bg-rose-500 p-2 rounded-full text-white ml-2 lg:ml-0">{value.image}</div>
                <p className="ml-6 inline-flex">{value.title} <DotsSix size={24} color="purple" weight="bold" className="ml-4 mt-2 invisible md:visible"/></p>
              </li>  
            )
          })} 
        </ul>
      </div>
    </section>
  )
}