
export function Hero() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute max-w-2xl sm:w-full top-48 flex flex-col gap-8 text-center text-white ">
        <h1 className="text-4xl lg:text-8xl font-extrabold md:text-4xl ">Venda nos MarketPlace's</h1>
        <h2 className="text-4xl font-mono">Sua loja ainda não vende?</h2>
        <span>Entre em contato conosco</span>
        <a className="p-3 m-auto bg-zinc-100 text-rose-800 font-semibold hover:bg-zinc-200 transition-colors text-sm rounded-lg" href="#contact">Cadastre-se</a>
      </div>
 
      <svg className="-ml-20 shrink-0" viewBox="0 0 2868 1251" width="2868" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1736.81 -474.18C1924.05 -531.49 2103.75 -688.09 2283.71 -599.33 2465.75 -512.01 2408.23 -275.35 2511.94 -119.36 2612.31 31.85 2694.85 107.02 2694.14 279.53 2693.45 450.61 2639.62 536.11 2508.78 649.74 2386.79 769.29 2311.19 937.8 2135.26 970.22 1960.12 1003.55 1816.59 835.84 1647.8 788.81 1467.57 726.42 1224.07 754.81 1114.44 609.27 1005.11 466.03 1115.21 283.31 1140.16 126.49 1163.15 -24.21 1052.82 -227.38 1167.16 -342.56 1280.99 -460.81 1572.09 -425.25 1736.8 -474.18Q1736.8 -474.18 1736.81 -474.18" fill="#FF3659"></path>
        <path className="mix-blend-overlay" fillRule="evenodd" clipRule="evenodd" d="M286.88 -138.83C384.87 -277.34 384.15 -495.64 590.26 -540.36 798.73 -585.51 969.4 -368.23 1182.03 -321.22 1387.8 -273.18 1654.69 -354.67 1801.67 -247.07 1947.43 -116.63 1834.31 60.46 1838.19 218.51 1841.81 365.78 1935.05 527.12 1823.62 637.99 1712.69 750.41 1471.43 733.45 1292.85 776.64 1102.2 830.02 949.17 1003.84 743.67 963.92 538.74 923.87 464.9 735.47 341.3 606.1 227.44 481.46 62.02 378.78 51.47 238.06 40.97 95.08 200.68 -18.97 286.88 -138.83Q286.88 -138.83 286.88 -138.83" fill="#FF3659"></path>
      </svg>
    </div>
  )
}