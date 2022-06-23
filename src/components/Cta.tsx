import { WaveSine } from 'phosphor-react'

export function Cta() {
  return (
    <div className="m-auto relative -mt-72 text-center px-4 lg:px-0">
      <h1 className="text-pink-700 font-semibold text-3xl pb-4">Faça um cadastro agora</h1>
      <p>Levamos o seu negócio para o próximo nível.
      Aqui você conta com soluções para vendas no marketing place.</p>
      <WaveSine size={32} color="purple" weight="bold" className="m-auto " />
    </div>
  )
}