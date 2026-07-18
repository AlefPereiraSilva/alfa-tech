class SiteContato extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/ `
        <section class='contact' id='contato'>
            <div class='contact__container'>
                <h2 class='contact__title'>Fale Conosco</h2>
                <form class='contact__form' id='form-contato'>
                    <div class='contact__group'>
                        <label for='nome'>Nome:</label>
                        <input type='text' id='nome' required placeholder='Seu nome completo'>
                    </div>
                    <div class='contact__group'>
                        <label for='email'>E-mail:</label>
                        <input type='email' id='email' required placeholder='seu.email@exemplo.com'>
                    </div>
                    <div class='contact__group contact__group-cep'>
                        <label for='cep'>CEP:</label>
                        <input type='text' id='cep' maxlength='8' required placeholder='Digite apenas numeros'>
                        <small id='cep-status'></small>
                    </div>
                    <div class='contact__group'>
                        <label for='cidade'>Cidade:</label>
                        <input type='text' id='cidade' readonly placeholder='Esta informação é automática pelo CEP'>
                    </div>
                    <div class='contact__group'>
                        <label for='mensagem'>Mensagem:</label>
                        <textarea id='mensagem' rows='4' required placeholder='Como podemos ajudar?'></textarea>
                    </div>
                    <button type='submit' class='contact__button'> Enviar Mensagem</button>
                </form>
                <div id='agradecimento' class='contact__success' style='display: none;'>
                    <h3> Obrigado pelo contato!</h3>
                    <p> Nossa equipe técnica retornará em breve.</p>
                </div>
            </div>
        </section> `
    }
}

customElements.define("site-contato", SiteContato)