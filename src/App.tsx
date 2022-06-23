import { Cta } from './components/Cta'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ShowYourBrand } from './components/ShowYourBrand'
import { StepsList } from './components/StepsList'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cta />
      <ShowYourBrand />
      <StepsList />
      <Contact />
      <Footer />
    </>
  )
}