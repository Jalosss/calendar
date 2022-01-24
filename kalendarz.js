var data = new Date();						// pobieranie daty

var dzien_tygo = data.getDay();
if (dzien_tygo==0) dzien_tygo=dzien_tygo + 7;  //zamiana niedzieli na "7"

var nazwa_tyg = new Array(7);				// nazywanie dni tygodnia
	nazwa_tyg[1]="Pon";
	nazwa_tyg[2]="Wto";
	nazwa_tyg[3]="Śro";
	nazwa_tyg[4]="Czw";
	nazwa_tyg[5]="Pią";
	nazwa_tyg[6]="Sob";
	nazwa_tyg[7]="Nie";

var dzien = data.getDate();
var dzien_akt = data.getDate();					//dzien_akt - aktualny dzien do zaznaczania w kalendarzu na czerwono
var miesiac = data.getMonth();
var miesiac_akt = data.getMonth();				//miesiąc_akt - aktualny miesiac do zaznaczania w kalendarzu na czerwono

var nazwa_mies = new Array(12);					//nazywanie miesiacy
	nazwa_mies[0]="Styczeń";
	nazwa_mies[1]="Luty";
	nazwa_mies[2]="Marzec";
	nazwa_mies[3]="Kwiecień";
	nazwa_mies[4]="Maj";
	nazwa_mies[5]="Czerwiec";
	nazwa_mies[6]="Lipiec";
	nazwa_mies[7]="Sierpień";
	nazwa_mies[8]="Wrzesień";
	nazwa_mies[9]="Październik";
	nazwa_mies[10]="Listopad";
	nazwa_mies[11]="Grudzień";

var rok = data.getFullYear();
var rok_akt = data.getFullYear();

window.onload = kalendarz;

function wypisz_rok()
{
	document.getElementById("rok").innerHTML = rok;									//wpisanie roku do diva	
}
function wypisz_mies()
{
	document.getElementById("miesiac").innerHTML = nazwa_mies[miesiac];		//wpisanie miesiaca do diva
}
function rok_prev()						//wybranie poprzedniego roku
{
	rok--;
	kalendarz();
}
function rok_next()					//wybranie następnego roku
{
	rok++;
	kalendarz();
}
function mies_prev()					//wybranie poprzedniego miesiaca
{
	miesiac--;
	if (miesiac<0)
	{
		miesiac = 11;
		rok--;	
	}
	kalendarz();
}
function mies_next()					// wybranie następnego miesiaca
{
	miesiac++;
	if (miesiac>11)
	{
		miesiac = 0;
		rok++;	
	}
	kalendarz();
}
function kalendarz()					//główna funkcja wypełniająca cały kalendarz
{
	wypisz_rok();
	wypisz_mies();
	wypisz_dni();
}
function wypisz_dni()
{
	var tempDate = new Date(rok, miesiac, 1);											   	//pobranie pierwszego dnia tygodnia
	var poczatekMiesiaca = tempDate.getDay();
	if (poczatekMiesiaca==0) poczatekMiesiaca = poczatekMiesiaca + 7;  	  		  //zamiana niedzieli na "7"
	const dniWMiesiacu = new Date(rok, miesiac+1, 0).getDate();							//pobranie ilosci dni w miesiącu
	var tresc_diva = "";
	var tresc_kal = "";
	var suma = poczatekMiesiaca+dniWMiesiacu;
	
	for (i=1; i<8; i++)																				//stworzenie nazw dni tygodnia
	{
		tresc_diva = tresc_diva + '<div class="tydz">' + nazwa_tyg[i] + '</div>';
	}
	document.getElementById("dni_tyg").innerHTML = tresc_diva;								//wypełnienie nazw dni tygodnia


	var k = 0;
	for (i=1 ; i<poczatekMiesiaca; i++) 													//wypełnienie kalendarza pustymi divami z przodu
	{
		tresc_kal = tresc_kal + '<div class="day_empty"></div>';
		k++;
		if (k%7==0) tresc_kal = tresc_kal + '<div style="clear: both;"></div>';
	}
	

	for (j=1; j<=dniWMiesiacu; j++)															//wyliczanie do wypełnenia kalendarza dniami
	{
		var a = 0;									
		if (j!=dzien_akt || miesiac!=miesiac_akt || rok!=rok_akt){ 
			tresc_kal = tresc_kal + '<form method="post">';
			tresc_kal = tresc_kal + '	<input type="hidden" name="dzien" value="'+j+'" />';
			tresc_kal = tresc_kal + '	<input type="hidden" name="miesiac" value="'+(miesiac+1)+'" />';
			tresc_kal = tresc_kal + '	<input type="hidden" name="rok" value="'+rok+'" />';
			tresc_kal = tresc_kal + '	<input type="submit" class="day" name="day" value="'+j+'" /></form>';
		}
		else { 
			tresc_kal = tresc_kal + '<form method="post">';
			tresc_kal = tresc_kal + '	<input type="hidden" name="dzien" value="'+j+'" />';
			tresc_kal = tresc_kal + '	<input type="hidden" name="miesiac" value="'+(miesiac+1)+'" />';
			tresc_kal = tresc_kal + '	<input type="hidden" name="rok" value="'+rok+'" />';
			tresc_kal = tresc_kal + '	<input type="submit" class="day" name="day" style="background-color: #FCB8BA;" value="'+j+'" /></form>';
		}
		k++;
		if (k%7==0 ) tresc_kal = tresc_kal + '<div style="clear: both;"></div>';
	
	}
	
	tresc_kal = tresc_kal + '</form>';

	for (k; k%7; k++)																		//wypełnienie kalendarza pustymi divami na końcu
	{
		tresc_kal = tresc_kal + '<div class="day_empty"></div>';
	}

	document.getElementById("dni").innerHTML = tresc_kal;				//wypełnianie kalendarza dniami
}
