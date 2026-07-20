class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
      <div class='footer'>
        <div class='footer__container'>
          <div class='footer__brand-wrapper'>
            <a href='#home'>
              <img class='footer__brand' src='/assets/images/logo3.png' alt='logo'></a> 
            <p class='footer__slogan'>Inovando o Agora</p>
          </div>
          <nav class='footer__nav'>
            <a href='#' class='footer__link'>Inscreva-se</a>
            <a href='#' class='footer__link'>Termos de Uso</a>
            <a href='#' class='footer__link'>Políticas de Privacidade</a>
            <a href='#' class='footer__link'>Perguntas Frequentes</a>
          </nav>
          <div class='footer__social'>
            <a href='#' aria-label='Instagram' class='footer__social-link'>
              <img src='/assets/icons/instagram.png' alt='instagram' class='footer__icon'>
            </a>
            <a href='#' aria-label='Linkedin' class='footer__social-link'>
              <img src='/assets/icons/linkedin.png' alt='Linkedin' class='footer__icon'>
            </a>
            <a href='#' aria-label='GitHub' class='footer__social-link'>
              <img src='/assets/icons/github.png' alt='github' class='footer__icon'>
            </a>
            <a href='#' aria-label='WhatsApp' class='footer__social-link'>
              <img src='/assets/icons/whatsapp.png' alt='whatsapp' class='footer__icon'>
            </a>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define("site-footer", SiteFooter)
