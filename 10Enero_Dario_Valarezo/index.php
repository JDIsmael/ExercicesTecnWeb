<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    body {


        margin: 0;
    }


    #container {
        background-image: linear-gradient(to top, rgba(205, 156, 242, 0.40) 0%, rgba(246, 255, 255, 0.71) 100%);
        box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
        text-align: center;
        border-radius: 5px;
        margin: 3em auto;
        background: rgba(255, 255, 255, 0.95);
        height: 300px;
        width: 480px;
        padding: 1em;

        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;


    }

    #container h2 {
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        letter-spacing: 2px;
        font-size: 3.5em;
        margin: 0;



    }

    #container p {
        margin: 3px 0 1.5em 0;
        font-size: 1.3em;
        color: #7d7d7d;
    }

    #container input {
        width: 210px;
        margin: 5px;
        display: inline-block;
        text-align: center;
        border-radius: 7px;
        background: #eee;
        padding: 1em 2em;
        outline: none;
        border: none;
        color: #222;
        transition: 0.3s linear;
    }

    ::placeholder {
        color: #999;
    }

    #container input:focus {
        background: rgba(0, 0, 333, 0.10);
    }

    #container button {
        background-image: linear-gradient(to left, rgba(255, 146, 202, 0.75) 0%, rgba(145, 149, 251, 0.86) 100%);
        box-shadow: 0 9px 25px -5px #df91fb;
        padding: 0.5em 1.9em;
        margin: 2.3em 0 0 0;
        border-radius: 7px;
        font-size: 1.4em;
        cursor: pointer;
        color: #FFFFFF;
        font-size: 1em;
        outline: none;
        border: none;
        transition: 0.3s linear;

    }
    </style>
</head>

<body>

    <div id="container">
        <form action="php/operaciones.php" method="POST">
            <input required name="numero1" type="text" placeholder="Ingrese el numero 1" ><br>
            <input name="numero2" type="text" placeholder="Ingrese el numero 2" required><br>
            <input name="numero3" type="text" placeholder="Ingrese el numero 3" required><br>
            <input type="submit">
            <input type="reset">
        </form>
    </div>
</body>

</html>