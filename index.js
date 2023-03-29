let botao = document.getElementById('botao') 

botao.addEventListener('click', (event) => {   
    console.log(event.target)  
    event.preventDefault() // PEGA O CAMINHO DO BOTÃO
    let email = document.getElementById('inputEmail')
    let senha = document.getElementById('inputSenha') 
    // PEGANDO O ID E VALIDANDO
    if (email.value.length > 3 && senha.value.length> 0) {
        email.value = ""
        senha.value = ""
    } else {
                                               //DEIXAR OS CAMPOS EM VERMELHO CASO NÃO FOR PREENCHIDO, 
                           //                                    DESABILITA FUNÇÃO PADRÃO
        email.style.border = "1px solid red"
        senha.style.border = "1px solid red"
    }

     
       
})
