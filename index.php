<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<title>Kalendarz</title>
	<link rel='stylesheet' href='style.css' type='text/css'>
	<script src="kalendarz.js">

	</script>
	<style type="text/css">

	</style>
</head>
<body>
	<div id="cont">

		<div onclick="rok_prev()" class="prev"><<</div>
		<div id="rok"></div>
		<div onclick="rok_next()" class="next">>></div>
		<div onclick="mies_prev()" class="prev"><</div>
		<div id="miesiac"></div>
		<div onclick="mies_next()" class="next">></div>
		<div id="dni_tyg"></div>
		<div id="dni"></div>

	</div>
	
	<?php
	try
	{ $pdo = new PDO('mysql:host=localhost;dbname=organizer', 'root', '');
	}
	catch (PDOException $e)
	{
	echo 'Error: ' . $e->getMessage();
	exit();
	}
	if(isset($_POST['day'])){									//pobranie wybranego dnia z kalendarza i zapisanie ich do zmiennych
		$dzien = $_POST['dzien'];
		$miesiac = $_POST['miesiac'];
		$rok = $_POST['rok'];
		$akt_dzien = $dzien;
		switch ($miesiac) {										//nazwanie miesięcy
		case 1:
  			$nazw_miesiac = "Styczeń";
  			break;
		case 2:
			$nazw_miesiac = "Luty";
			break;
		case 3:
			$nazw_miesiac = "Marzec";
			break;
	  	case 4:
		  	$nazw_miesiac = "Kwiecień";
		  	break;
		case 5:
			$nazw_miesiac = "Maj";
			break;
	  	case 6:
		  	$nazw_miesiac = "Czerwiec";
		  	break;
	  	case 7:
		  	$nazw_miesiac = "Lipiec";
		  	break;
		case 8:
			$nazw_miesiac = "Sierpień";
			break;
		case 9:
			$nazw_miesiac = "Wrzesień";
			break;
	  	case 10:
		  	$nazw_miesiac = "Październik";
		  	break;
	  	case 11:
		  	$nazw_miesiac = "Listopad";
		  	break;
		case 12:
			$nazw_miesiac = "Grudzień";
			break;
		}


		if($dzien<10){											//ustawienie poprawnego formatu daty do bazy danych
			$dzien = "0".$dzien;
		}
		if($miesiac<10){
			$miesiac = "0".$miesiac;
		}

		echo '<div class="struktura">';
		echo '<h3>'.$akt_dzien.' '.$nazw_miesiac.' '.$rok.'</h3>';				//wyświetlenie wybranej daty
		$data = $rok.'-'.$miesiac.'-'.$dzien;
		
		
        $sql1 = 'SELECT * FROM `tresci` WHERE data="'.$data.'" ORDER BY godz ASC';		//wyświtlanie wydarzeń z wybranego dnia
        $stmt1 = $pdo->prepare($sql1);
        $stmt1->execute();
		
        echo '   <table class="organizer">';
        while ($row = $stmt1->fetch()){
			echo '<tr><td class="godz">'.$row['godz'].'</td><td class="tresc">'.$row['tresc'].'</td></tr>';
		}

		echo '<tr>
				<form method="post">													
					<td class="godz">
						<select name="godzina">';
							for($i=1; $i<=24; $i++){													//tworzenie formularza do wstawiania nowego wydarzenia do bazy danych
								if($i<10){
									echo '	<option value="0'.$i.':00:00">0'.$i.':00</option>';
								}
								else{
									echo '	<option value="'.$i.':00:00">'.$i.':00</option>';
								}
							}
		echo '			</select>
					<input type="hidden" name="data" value="'.$data.'" />
					</td>
					<td class="tresc">
						<textarea name="tresc" cols="52" rows="4""></textarea>
						<br>
						<input type="submit" name="wyslij" />
					</td>
				</form>
			</tr></table></div>';

	}
		if(isset($_POST['wyslij'])){									//dodawanie nowego wydarzenia do bazy
			$godzina = $_POST['godzina'];
			$tresc = $_POST['tresc'];
			$date = $_POST['data'];
		
			$sql2 = 'INSERT INTO `tresci` (`id`, `data`, `godz`, `tresc`) VALUES (NULL, :data, :godz, :tresc)';
            $stmt2 = $pdo->prepare($sql2);
            $stmt2->bindValue(':data', $date, PDO::PARAM_STR);
            $stmt2->bindValue(':godz', $godzina, PDO::PARAM_STR);
            $stmt2->bindValue(':tresc', $tresc, PDO::PARAM_STR);
            $stmt2->execute();
			if($stmt2 !== false)
                {
                  echo '<br /><br /><p class="dodanie">Poprawnie dodano wydarzenie do kalendarza!</p>';
                } else {
                  echo 'Wystąpił błąd';
                }
		}

		$pdo = null;
	?>
</body>
</html>