<?php session_start(); ?>
<?php if (!isset($_SESSION['current_session'])) header('Location: login.php'); ?>
<?php
$id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);
//pega o Id do cadastro e imprime na tela
//var_dump($id);
include_once './connection.php';
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="shortcut icon" href="images/icon/favicon.ico" >
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>Drescrição do Livro</title>
    </head>
    <body>
        <?php
        include_once './menu.php';
		
        
        $query_products = "SELECT id, nome, descricao, altor, image, pag, arquivo FROM products WHERE id =:id LIMIT 1";
        $result_products = $conn->prepare($query_products);
        $result_products->bindParam(':id', $id, PDO::PARAM_INT);
        $result_products->execute();
        $row_product = $result_products->fetch(PDO::FETCH_ASSOC);
        extract($row_product);
        //$price_rise = ($price * 0.50) + $price;
        ?>
		<div class="card text-center">
		<div class="card-header">
    <div class="container">
            <h1 class="display-4 mt-5 mb-5"><?php echo $nome; ?></h1>
  </div>
  </div><br>
  
       <div class="card text-center">
            <div class="row">
                <div class="col-md-3">
                    <img src='<?php echo "./images/products/$id/$image"; ?>' class="card-img-top" width="150" height="420>
                </div>
                <div class="col-md-6">
                    <!--<p>de R$ <?php echo number_format($price_rise, 2, ",", "."); ?></p>
                    <p>por R$ <?php echo number_format($price, 2, ",", "."); ?></p> -->
                    <p>
                       <!-- Botão de Compra-->
					   <!-- <a href="checkout-form.php?id=<?php echo $id; ?>" class="btn btn-primary">Comprar</a> -->
						
						<!-- Botão de Dowload-->
						<a href='<?php echo "./images/products/$id/$arquivo"; ?>' class="btn btn-primary">DOWDOAD</a>
                    
					</p>
                </div>
				<div class="col col-lg-2">
    
    </div>
            </div>
			</div>
			<div class="card-body">
            <div class="row">
                <div class="col-md-12 mt-5">
					<h5 class="card-title">Autor: <?php echo $altor; ?><br></h5>
					Paginas: <?php echo $pag; ?><br>
                    <p class="card-text"><br>Resumo: <br><?php echo $descricao; ?></p>
                </div>
            </div>
			</div>
		</div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
	
	<?php
        include_once 'footer/footer.php';
		?>
    </body>
</html>