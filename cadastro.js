function Validar(){
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let dataNasc = document.getElementById('dataNasc').value;
    let telefone = document.getElementById('telefone').value;
    let senha = document.getElementById('password').value;
    let confirmsenha = document.getElementById('password').value;
   

    if(!email || !name || !dataNasc || !telefone || !senha || !confirmsenha){

        alert("Campos de preenchimento obrigatório. Favor preecher");
       }else{
        alert("Campos preechidos com sucesso!");
   }
}

   function ValidarLogin(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if(!email || !senha){
            alert("Campos de preenchimento obrigatório. Favor preecher");
        }else{
            alert("Campos preechidos com sucesso!");
        }
    }
