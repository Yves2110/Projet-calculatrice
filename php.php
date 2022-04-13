
<html>
<body>
<style>
a{
    border: solid 1px gainsboro;
    background-color: lightblue;
    border-radius: 15px;
    margin: 10px;
    text-decoration: none;
    }
   
</style>

<?php 
$result = $_POST["resu"];
echo '<h1> Le resultat de votre calcul est égal à : '.$result.' </h1>';
?>

<br><br>
<a href="http://localhost/projet-calculatrice"> Revenir</a>
</body>
</html>