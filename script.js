
function validarCampos() {

    // Seleciona os campos e as mensagens de erro
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const emailError = document.getElementById("emailError");
    const senhaError = document.getElementById("senhaError");

    // Reseta mensagens de erro
    emailError.textContent = "";
    senhaError.textContent = "";
    email.classList.remove("error-input");
    senha.classList.remove("error-input");

    let isValid = true;

    // Valida o campo email
    if (!email.value.trim()) {
        emailError.textContent = "O campo email é obrigatório.";
        email.classList.add("error-input");
        isValid = false;
        
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        emailError.textContent = "Insira um email válido.";
        email.classList.add("error-input");
        isValid = false;
    }

    // Valida o campo senha
    if (!senha.value.trim()) {
        senhaError.textContent = "O campo senha é obrigatório.";
        senha.classList.add("error-input");
        isValid = false;

    } else if (senha.value.length < 6) {
        senhaError.textContent = "A senha deve ter no mínimo 6 caracteres.";
        senha.classList.add("error-input");
        isValid = false;
    }

    if (isValid) {
        alert("Login realizado com sucesso!");
    }


}