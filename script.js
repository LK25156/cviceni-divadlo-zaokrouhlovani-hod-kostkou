/*const listekEur = 12; //cena jednoho lístku v eurech
const navstevnici = 174; //pruměrný počet návštěvníků na jedno představení
const predstaveniMesic = 15; //počet představení za měsíc
const slevaProStudenty = 0.65; //sleva pro studenty (65% z ceny vstupenky)
const procentoStudentu = 0.40; // procento studentů mezi návštěvníky

//výpočet příjmu divadla bez studentských slev
const prijem = listekEur * navstevnici * predstaveniMesic;

document.body.innerHTML += "<h1>Příjem divadla je" + prijem + "Euro.";
document.body.innerHTML += "</br>";

//výpočet příjmu divadla včetně slevy pro studenty
const prijemSeSlevou = (listekEur * (1 - 0.35) * navstevnici * predstaveniMesic * procentoStudentu) + (listekEur * navstevnici * predstaveniMesic * ( 1 - 0.4));

document.body.innerHTML += prijemSeSlevou;*/


//úkol 3 Házení kostkou - zaokrouhlování nahoru dát a Math.random

//document.body.innerHTML += Math.ceil (Math.random() * 6);

const nahodneCislo = 5356.894 //číslo jsem si vymyslela
document.body.innerHTML += (Math.round (nahodneCislo * 10))/10; //zaokrouhlení na desetiny
document.body.innerHTML += "</br>"
document.body.innerHTML += (Math.round (nahodneCislo * 100))/100; //zaokrouhlení na setiny
document.body.innerHTML += "</br>"
document.body.innerHTML += (Math.round (nahodneCislo / 100))*100; //zaokrouhlení na celé stovky


