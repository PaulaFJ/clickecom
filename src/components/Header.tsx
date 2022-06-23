import logo from '../assets/logo.png'

export function Header() {
  return (
    <header className="absolute z-10 flex justify-between items-center h-20 w-full px-8">
      <img src={logo} alt="Clickecom" className="w-44 h-32"/>

      <a 
        href="#contact" 
        className="p-3 bg-zinc-100 text-rose-800 font-semibold hover:bg-zinc-200 transition-colors text-sm rounded-lg">
        CONTATO
      </a>
    </header>
  )
}