<html>
    <head>
        <meta charset="UTF-8">
        <title>ระบบจอดรถภูเก็ตวิทยาลัย</title>
        <link rel="icon" href="./resources/img/pkw.png">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div id="webcontainer">
            <div id="title">
                <h1>ระบบจอดรถภูเก็ตวิทยาลัย</h1> 
                <img src="./resources/img/pkw.png">
            </div>
            <hr>
            <div id="display">
                <form style="display: none;" method="get" id="pstate">
                        <input type="text" value="0" style="display: none;" name="parking">
                </form>
                <?php
                    if (isset($_GET['parking']) == true) {
                        $pstate = $_GET['parking'];
                        switch($pstate) {
                            case 1: 
                                include './resources/extend-file/parking-form.php';
                                break;
                            case 2: 
                                include './resources/extend-file/info-log-out.php';
                                break;
                        }
                    } else {
                        $_GET['parking'] = 0;
                        include './resources/extend-file/parking-error.html';
                    }
                ?>
            </div>
        </div>
    </body>
</html>