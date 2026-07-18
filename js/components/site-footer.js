class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class='footer'>
        <div class='footer__container'>
        <div class='footer__brand-wrapper'>
        <img class='footer__brand' src='/assets/images/logo4.png' alt='logo'>
        <p class='footer__slogan'>Inovando o Agora</p>
        </div>
        <nav class='footer__nav'>
        <a href='#' class='footer__link'  >Saiba Mais</a>
         </nav>
         <div></div>
        <div class='footer__social'>
        <a href='#' aria-label='Instagram' class='footer__social-link' >
         <img src='/assets/icons/instagram.png' alt='instagram' class='footer__icon' > </a>
        <a href='#' aria-label='Linkedin'  class='footer__social-link' >
         <img src='/assets/icons/linkedin.png' alt='Linkedin' class='footer__icon'> </a>
        <a href ='#' aria-label='GitHub' class='footer__social-link' >
        <img src='/assets/icons/github.png' alt='github' class='footer__icon'></a>
        <a href ='#'aria-label='WhatsApp' class='footer__social-link'  >
        <img src='/assets/icons/whatsapp.png' alt='whatsapp' class='footer__icon'></a>
        </div>
        </div>
        </footer> `
  }
}

customElements.define("site-footer", SiteFooter)
