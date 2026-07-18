class SiteHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
        
        <section class='hero'>
          <div class='hero__content'>
        <h1 class='hero__title'>Alfa Tech</h1>
        <p class='hero__description'> Nós buscamos a inovacao para construir o Amanhã, Hoje. Queremos utilizar o melhor de cada ferramenta para criarmos um ambiente e um produto, pensando sempre no futuro, por isso trabalhamos com as melhores marcas e melhores serviços do mercado. Inove com a gente.</p>
        <a href='#contato' class='hero__button'>Fale Conosco</a>
        </div>
        <div class='hero__image-container'>
        <img src='/assets/images/casal.png' alt='casal programando' class='hero__image'>
        </div>
        </section>
        
        `
  }
}

customElements.define("site-home", SiteHome)
