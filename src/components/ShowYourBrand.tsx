import sale from '../assets/sale.svg'
import blob from '../assets/blob.svg'

export function ShowYourBrand() {
  return (
    <section id="showYourBrand" className="relative m-auto mt-16 flex p-12 justify-between">
      <div className="flex flex-col pt-12">
        <h1 className="text-gray-700 font-semibold text-3xl py-8">Mostre sua marca ao mundo</h1>
        <p className="max-w-2xl mt-8 text-lg pr-10">Com a nossa ajuda, você poderá levar seus produtos aos MktPlaces, pois cuidamos de todos os detalhes para cadastrar e vender.</p>
      </div>

      <div className="relative justify-center max-w-lg hidden lg:flex">
        <img src={sale} alt="" className="absolute z-1 top-2 max-w-sm"/>
        <img src={blob} alt="" className="max-w-2xl -mt-8" />
      </div>
    </section>
  )
}