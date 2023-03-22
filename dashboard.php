<?php session_start(); ?>
<?php if (!isset($_SESSION['current_session'])) header('Location: login.php'); ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>GLEMB | <?php echo $_SESSION['current_session']['user']['first_name'] . ' ' . $_SESSION['current_session']['user']['last_name ']; ?></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <div class="container mb-8">
        <div class="row center-align">
            <div class="col-xs-12 col-sm-12 col-md-12 col-xl-12 col-lg-12">
                <div class="jumbotron">                
                    <p class="mb-4"><strong>ARLS PEDREIROS DE D'US 80</strong></p>
                    <hr>
                    <p>Welcome back Ir.'. <strong><?php echo $_SESSION['current_session']['user']['first_name'] . ' ' . $_SESSION['current_session']['user']['last_name']; ?></strong></p>
                    <span><p>A  Maçonaria.</p>

<p>		Ao contrário de que muitos pensam não é um lugar onde se vende a alma para alcançar prosperidade. </p>

<p>		Para se tornar um membro da irmandade existe muitas regras uma delas é necessário que você creia em um Deus de amor e bondade infinita independente da sua religião toda crença do bem é respeitada e aceita na irmandade um irmão respeita a crença do outro. </p>

<p>		O templo maçônico se chama Loja porque você  troca dedicação e caridade pelo ensinamento da virtude, a Maçonaria não é uma sociedade secreta ela é apenas discreta os ensinamentos só são compartilhados entre os irmãos porque exige aprofundamento no estudo para compreende-los uma pessoa leiga não é capaz de intender sem o devido estudo.</p>

<p>		Os principais objetivos da Maçonaria é a lapidação do ser humano para se tornar cada vez mais virtuoso, a caridade fazer o bem sem esperar nada em troca, a Liberdade, a Igualdade e a Fraternidade.</p>

<p>		Se um irmão alcançar a prosperidade foi porque ele batalhou e aplicou o que aprendeu isso se chama mérito e todos devemos nos alegrar por sua vitória.</p>

<p> T.'.F.'.A.'.  M .'.M .'. Leandro Andrade.</p><span>
                </div>
            </div>
        </div>
    </div>
	
	<meta http-equiv="refresh" content="60;url=livros.php" />
	
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="./jquery.js"></script>
	<?php
        include_once 'footer/footer.php';
		?>
</body>
</html>