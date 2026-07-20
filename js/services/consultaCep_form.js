import { buscarCep } from "./buscarCep.js"

export function consultaCep_form(componente) {
  const form = componente.querySelector("#form-contato")
  const cepInput = componente.querySelector("#cep")
  const cepStatus = componente.querySelector("#cep-status")
  const cidadeInput = componente.querySelector("#cidade")
  const agradecimentoDiv = componente.querySelector("#agradecimento")

  if (!form || !cepInput || !cidadeInput) return

  cepInput.addEventListener("input", () => {
    cepStatus.textContent = ""
    cidadeInput.value = ""
  })

  cepInput.addEventListener("blur", async () => {
    if (!cepInput.value) return
    cepStatus.textContent = "Buscando cidade..."
    cepStatus.style.color = "gray"

    try {
      const cidadeFormatada = await buscarCep(cepInput.value)
      cidadeInput.value = cidadeFormatada
      cepStatus.textContent = ""
    } catch (error) {
      cepStatus.textContent = error.message
      cepStatus.style.color = "red"
      cidadeInput.value = ""
    }
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    form.style.display = "none"
    agradecimentoDiv.style.display = "block"
  })
}
