let codigo = [];
let senha = ['4','6','1','2']

function button(opcao){ 

    if(opcao == "deletar" || opcao == "enter"){
        switch(opcao){
            case "deletar":
                codigo = [];
                document.getElementById("codigo").innerHTML = codigo;
                break;
            case "enter":
                if(codigo.toString() == senha.toString()){
                    alert("Acesso garantindo");
                }
                else{
                    alert("Acesso negado, tente novamente...");
                    codigo = [];
                    document.getElementById("codigo").innerHTML = codigo;
                }
                break;
        }
    }
    else if(opcao == "apagarUm"){
        codigo.pop();
        let aux = String(codigo).replace(/\,/g, " ");
        document.getElementById("codigo").innerHTML = aux;
    }
    else{
        if(codigo.length < 4){
            codigo.push(opcao);
            let aux = String(codigo).replace(/\,/g, " ");
            document.getElementById("codigo").innerHTML = aux;
        }
        else{
            alert("Maximo de 4 caracteres");
        }
    }
    
}