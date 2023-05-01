function Validar()
{
    var nome = document.getElementById("fname").value;
    var apelido = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var comentario = document.getElementById("comentario").value;

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
                if (assunto == "") 
                {
                    alert("Não introduziu o seu assunto");
                } 
                else 
                {
                    if (comentario == "") 
                    {
                        alert("Não introduziu o seu comentário");
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