// Receber o SELETOR do formulário
const cadForm = document.getElementById("upload-arquivo");

// Acessa o IF quando existe o formulário com o SELETOR "upload-arquivo"
if (cadForm) {

    // Quando o usuário clicar no botão com submit executa a função
    cadForm.addEventListener("submit", async (e) => {

        // Bloquear o recarregamento da página
        e.preventDefault();

        // Receber o arquivo do formulário
        var arquivo = document.getElementById('arquivo').files[0];
        //console.log(arquivo);
		console.log(arquivo);

        // Validar extensão do arquivo
        if (arquivo['type'] != 'application/pdf') {

            // Enviar mensagem de erro para o HTML
            document.getElementById("msg").innerHTML = "<p style='color: #f00;'>Erro: Necessário enviar arquivo PDF!</p>";

            // Limpar o campo arquivo
            document.getElementById('arquivo').value = '';
        } else {
            // Criar o objeto para receber os dados
            var dadosForm = new FormData();

            // Atribuir as informações do arquivo para o objeto que será enviado para o PHP
            dadosForm.append("arquivo", arquivo);

            // Enviar os dados para o arquivo PHP responsável pelo upload do arquivo
            const dados = await fetch("cadastrar_up.php", {
                method: "POST",
                body: dadosForm
            });

            // Ler os dados retornado do arquivo PHP
            const resposta = await dados.json();
            //console.log(resposta);
			console.log(resposta);

            // Acessa o IF quando realizar o upload
            if (resposta['status']) {

                // Retornar mensagem de sucesso
                document.getElementById('msg').innerHTML = resposta['msg'];

                // Limpar o campo arquivo
                document.getElementById('arquivo').value = '';

            } else {
                // Retornar mensagem de erro
                document.getElementById('msg').innerHTML = resposta['msg'];
            }

        }
    });
}