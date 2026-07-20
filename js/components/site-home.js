class SiteHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
      <section class='hero' id='home'>
        <div class='hero__content'>
          <h1 class='hero__title'>Alfa Tech</h1>
          <p class='hero__description'> Nós buscamos a inovação para construir o Amanhã, Hoje. Queremos utilizar o melhor de cada ferramenta para criarmos um Ambiente e um Produto, pensando sempre no Futuro, por isso trabalhamos com as melhores marcas e melhores serviços do mercado. Inove com a gente. Conectamos você e sua empresa ao futuro, com Soluções Ágeis, Designs Inteligentes, Infraestrutura Escalável e Responsiva. Descubra como tornar sua Ideia um Produto Inovador que irá revolucionar o Mercado. Venha criar com a gente um Produto de Impacto para o seu nicho e se torne o Número Um em seu ramo através do uso da tecnologia da maneira correta.</p>
          <a href='#contato' class='hero__button'>Fale Conosco</a>
        </div>
        <div class='hero__image-container'>
          <img src='./assets/images/casal.png' alt='casal programando' class='hero__image'>
        </div>
      </section>
      
      <section class='service' id='service'>
        
        <h2 class='service__title'>Nossos Serviços</h2>

        <div class='service__cards-container'>
        <div class='service__card'>
          <h3 class='service__subtitle'>Desenvolvimento</h3>
          <p class='service__description'> Criamos Sites, Aplicativos e Sistemas que facilitam sua vida para atingir de maneira mais eficiente seu público, agilizando e simplificando seus processos.</p>
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
          <p class='service__description'>Trabalhamos como revenda de marcas consagradas no ramo Tecnológico. Aqui você e sua empresa encontram o melhor da área com um clique.</p>
        </div>
        </div>
        
      </section>

      <section class='products' id='products'>
        <h2 class='products__title'>Produtos em Destaque</h2>
        <p class='products__intro'>Equipamentos de alta qualidade e com o melhor custo-benefício do mercado, para clientes com altas expectativas.</p>
        <div class='products__container'>
        <div class='product-card'>
          <div class='product-card__image-placeholder'>💻</div>
          <h3 class='product-card__title'>Notebook Gamer</h3>
          <p class='product-card__description'>Processador i9 de última geração, 32GB de Memória DDR5, SSD 2TB. Perfeito para clientes que têm necessidade de alta performance.</p>
          <span class='product-card__price'>R$ 12.000,00</span>
          <a href='#contato' class='product-card__button'>Tenho Interesse no Produto</a>
        </div>

        <div class='product-card'>
          <div class='product-card__image-placeholder'>🖥️</div>
          <h3 class='product-card__title'>Monitor Ultra Wide</h3>
          <p class='product-card__description'>Painel IPS, 144Hz e resolução 8K. Mais Espaço em tela para maior produtividade.</p>
          <span class='product-card__price'>R$ 3.000,00</span>
          <a href='#contato' class='product-card__button'>Tenho Interesse no Produto</a>
        </div>

        <div class='product-card'>
          <div class='product-card__image-placeholder'>⌨️</div>
          <h3 class='product-card__title'>Kit Periféricos Premium</h3>
          <p class='product-card__description'>Teclado Mecânico ultra-silencioso, com botões de ação adicionais e Mouse ergonômico ambidestro sem fio com baterias de longa duração.</p>
          <span class='product-card__price'>R$ 800,00</span>
          <a href='#contato' class='product-card__button'>Tenho Interesse no Produto</a>
        </div>
        </div>
      </section>
    `
  }
}

customElements.define("site-home", SiteHome)
