let uzytkownicy = [
    {
        imie: 'kaj',
        nazwisko: 'nowak'
    }, { 
        imie: 'karol',
        nazwisko:'kwoalski'
    }, {
        imie:'mariusz',
        nazwisko: 'wikowski'
    }
]

//pentla for

// for ( let index = 0; index < uzytkownicy.length; index ++) {
// console.log(uzytkownicy[index].imie)
// }

//wile()

// let numer = 10;

// while( numer >= 0){
// console.log(numer);
// numer--;
// }

//pętla foreleach

uzytkownicy.forEach((Element, index) =>{
if (Element.imie === 'kaj'){
    Element.koloroczu = 'niebieski';
} else if (Element.imie === 'karol'){
    Element.koloroczu = 'piwny';
}else if (Element.imie === 'mariusz'){
    Element.koloroczu = 'zielony';
}
});

console.log(uzytkownicy)


//pentla do .. whlie ()
let umber = 5
do {
console.log(numer2);
}while (numer2-- > 3);



console.log(uzytkownicy)


//console.log(uzytkownicy[0].imie, uzytkownicy[1].imie,uzytkownicy[2].imie);