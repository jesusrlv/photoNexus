<?php
include('qc.php');

$x = 0;
$sql = "SELECT * FROM photo ORDER BY id DESC";
$resultadoSql = $conn->query($sql);
while ($row = $resultadoSql->fetch_assoc()) {
    $x++;
    echo'
    <tr>
        <td>'.$x.'</td>
        <td><img src="docs/'.$row['ruta'].'" width="100" class="p-2"></td>
        <td class="text-center"><span class="text-center" id="qrcode'.$row['id'].'"></span></td>
        <td>
            <input value="'.$row['ruta'].'" hidden id="photoRuta'.$row['id'].'">
            <script>
                ModalQr("'.$row['ruta'].'",'.$row['id'].');
            </script>
                    
        </td>     
    </tr>
    ';
}

?>