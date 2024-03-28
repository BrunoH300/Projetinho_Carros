import Sedans from "./assets/sedans.svg";
import Suvs from "./assets/suvs.svg";
import Luxury from "./assets/luxury.svg"




export default function App(){
  return(
  <main>
    <section>
      <div className="bg-orange">
    <img src={Sedans} alt="icone sedans"/>
    <h2 className="text-xl">Sedans</h2>
    <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
    <a href="https://www.webmotors.com.br/sedans" target="_blank">Ver Mais</a>
    t
    </div>

    <div className="bg-green">
      <img src={Suvs} alt="icone SUVS" />
      <h2>SUVs</h2>
      <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
      <a href="https://www.webmotors.com.br/suvs" target="_blank">Ver Mais</a>
    </div>


<div className="bg-dark-green">
<img src={Luxury} alt="icone luxo"/>
    <h2>Luxury</h2>
    <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
    <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver Mais</a>
</div>



    </section>
    </main>
  )
}



