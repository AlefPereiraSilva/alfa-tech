class SiteHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
      <section class='hero' id='home'>
        <div class='hero__content'>
          <h1 class='hero__title'>Alfa Tech</h1>
          <p class='hero__description'> Nós buscamos a inovação para construir o Amanhã, Hoje. Queremos utilizar o melhor de cada ferramenta para criarmos um Ambiente e um Produto, pensando sempre no Futuro, por isso trabalhamos com as melhores marcas e melhores serviços do mercado. Inove com a gente. Conectamos você e sua empresa ao futuro, com Soluções Ágeis, Designs Inteligentes, Infraestutura Escalável e Responsiva. Descubra como tornar sua Idéia em um Produtor Inovador que irá revolucionar o Mercado. Venha criar com a gente um Produto de Impacto para o seu nicho e se torne o Número Um em seu ramo através do uso da tecnologia da maneira correta.</p>
          <a href='#contato' class='hero__button'>Fale Conosco</a>
        </div>
        <div class='hero__image-container'>
          <img src='/assets/images/casal.png' alt='casal programando' class='hero__image'>
        </div>
      </section>
      
      <section class='service' id='service'>
        
        <h2 class='service__title'>Nossos Serviços</h2>

        <div class='service__cards-container'>
        <div class='service__card'>
          <h3 class='service__subtitle'>Desenvolvimento</h3>
          <p class='service__description'> Criamos Sites, Aplicativos e Sistemas que facilitem sua vida a atingir de maneira mais eficiente seu público, agilizando e facilitando sua vida.</p>
        </div>
       
        <div class='service__card'>
          <h3 class='service__subtitle'>Marketing Estruturado</h3>
          <p class='service__description'>Criamos uma identidade para Você e sua Empresa, criando uma estrutura em que sua marca é a Estrela do Palco, assim sua Empresa sempre será a primeira e mais lembrada.</p>
        </div>
      
        <div class='service__card'>
          <h3 class='service__subtitle'>Suporte</h3>
          <p class='service__description'>Com pacotes de suporte para cada situação, te auxiliamos a criar sempre mais, sem dores de cabeça desnecessárias.</p>
        </div>

        <div class='service__card'>
          <h3 class='service__subtitle'>Vendas</h3>
          <p class='service__description'>Trabalhamos como revenda de marcas consagradas no ramo Tecnológico. Aqui você e sua empresa encontra o melhor da área com um clique.</p>
        </div>
        </div>
        
      </section>
    `
  }
}

customElements.define("site-home", SiteHome)