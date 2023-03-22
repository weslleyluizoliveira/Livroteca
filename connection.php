<?php
	
	$host = "localhost";
	$user = "root";
	$pass = "";
	$dbname = "vitrine";
	$port = 3306;
	
	
	
	Try {
		
		//Conexão sem a porta
		//$conn = new PDO("mysql:host=$host;dbname=" . $dbname, $user, $pass);
		
		//Conexão com a porta
		$conn = new PDO("mysql:host = $host;port= $port; dbname=" . $dbname, $user, $pass);
		
		//echo "Conexão com Banco de dados - " .$dbname. " - Realizado!<br>" ;
		//echo "Conexão com Banco de dados Realizado!<br>" ;
		// testando conexão com a tabela
		
	} catch ( Exception $err){
		//echo "conexão com Banco de dados Não Realizado.<br>" . $err->getMessage();
		die("Erro: conexão com Banco de dados Não Realizado.<br>" . $err->getMessage());
	}
	//Fim da conexão com o banco de dados utilizando PDO
?>