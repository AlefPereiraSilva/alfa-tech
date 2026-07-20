class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
      <div class='header'>
        <div class='header__brand'>
          <a href='#home'><img src='/assets/images/logo4.png' alt='AlfaTech_logo'></a> 
        </div>
        <nav class='header__nav' aria-label='menu principal'>
          <a href='#products' class='header__link'>Produtos</a>
          <a href='#service' class='header__link'>Serviços</a>
          <a href='#contato' class='header__link'>Fale Conosco</a>
        </nav>
      </div>
    `
  }
}

customElements.define("site-header", SiteHeader)

