class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class='header'>
        <div class='header__brand'><img src='/assets/images/logo4.png' alt='logo'></div>
        <nav class='header__nav' aria-label='menu principal' >
        <a href='#' class='header__link'>Inicio</a>
        <a href='#'class='header__link'>Produtos</a>
        <a href='#'class='header__link'>Blog</a>
        <a href='#'class='header__link'>Contato</a>
        </nav>
        </div>
        `
  }
}

customElements.define("site-header", SiteHeader)
