function Noites()
{
    /*
    var nome = document.getElementById("fname").value;
    var apelido = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var tele = document.getElementById("tele").value;
    var opcao = document.getElementById("opcao").value;
    var noites = document.getElementById("noites").value;

    if (nome == "")
    {
        alert("Não introduziu o seu nome");
    }
    else
    {
        if (apelido == "")
        {
            alert("Não introduziu o seu apelido");
        } 
        else 
        {
            if (email == "") 
            {
                alert("Não introduziu o seu email");    
            } 
            else 
            {
                if (tele == "") 
                {
                    alert("Não introduziu o seu numero de telemovel");
                } 
                else 
                {
                    if (opcao == "") 
                    {
                        alert("Não introduziu o quarto que deseja");
                    } 
                    else
                    {
                        if (noites == "")
                        {
                            alert("Não introduziu o numero de noites");
                        }
                        else 
                        {
                            alert("Enviado com Sucesso!");
                        }
                    }
                }
            }
        }
    }
    */
    var noites = document.getElementById("noites").value;
    var n_noites = ["0", "50", "25", "20", "30", "100", "75"];

    if (noites == n_noites)
    {
        alert(noites * n_noites, " €");
        document.getElementById("preco").textContent = noites * n_noites;
    }

}

