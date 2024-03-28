import Sedans from "./assets/sedans.svg";
import Suvs from "./assets/suvs.svg";
import Luxury from "./assets/luxury.svg"




export default function App(){
  return(
  <main className=" min-h-svh bg-offwhitebg py-20 px-6 antialiased lg-flex">
    <section className="lg:flex">
    <div className="bg-orange p-12 rounded-t-lg">
    <img src={Sedans} alt="icone sedans" className="mb-7"/>
    <h2 className="font-shoulders mb-7 uppercase 4xl font-bold text-offwhitebg">Sedans</h2>
    <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
    <a className= "font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange" href="https://www.webmotors.com.br/sedans" target="_blank">Ver Mais</a>
    
    </div>

    <div className="bg-green p-12">
      <img src={Suvs} alt="icone SUVS" className="mb-7"/>
      <h2 className="font-shoulders mb-7 uppercase 4xl font-bold text-offwhitebg">SUVs</h2>
      <p className="font-lexend mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
      <a className= "font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/suvs" target="_blank">Ver Mais</a>
    </div>


<div className="bg-dark-green p-12 rounded-b-lg">
<img src={Luxury} alt="icone luxo" className="mb-7"/>
    <h2 className="font-shoulders mb-7 uppercase 4xl font-bold text-offwhitebg">Luxury</h2>
    <p className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
    <a className= "font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver Mais</a>
</div>



    </section>
    </main>
  )
}



