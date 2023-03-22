<?php
	include_once './connection.php';
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8_decode">
		<meta name="description" content="Como usar charset na <meta> tag">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="shortcut icon" href="images/icon/favicon.ico" >
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        
		<title> Vitrine </title>
	</head>
	
	<body>
		
		<?php
        include_once './menu.php';
        ?>
		<div class="container">
            <h2 class="display-4 mt-5 mb-5">Cadrastar Livros</h2>
        
		
	
            <div class="row row-cols-2 row-cols-md-3">
                
			
                            <div class="card-body">
                                	
                    <div class="col mb-4 text-center">
                        <div class="card">
     <form method="post" action="recebe_cadastro.php" enctype="multipart/form-data">
				
				<label>Foto da Capa:</label>
				<input type="file" value="foto_capa"
				id=" foto_capa" name= "foto_capa"				
				accept=".png, .jpeg, .jpg"/>
				
				<label for="livroPDF">Livro em PDF:</label>
				<input type="file" value="livro_pdf"
				id="livro_pdf" name="livro_pdf" 				
				accept=".pdf, .doc"/>				
				

				<label>Autor(es):</label>
				<input type="txt" name="autor" />
				
				<label>Quantidade de Páginas:</label>
				<input type="txt" name="pag" />
				
				<label>Titulo:</label>
				<input type="txt" name="titulo" />
				
				<label>Sinopce:</label>
				<input type="txt" name="resumo" />
				
				
				
				<!--<input type="submit" value="Enviar" />	-->
				<input type="submit" value="Enviar"  />					
				</form>
                          				  
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
	
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

		
	</body>

</html>