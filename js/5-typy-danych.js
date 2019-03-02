let typliczba = 10 + 10;

//typliczba ='10' + 20 + 10;

// typliczba = `10 + 10 = ${ 10+10}`;
typliczba = `10 + ` +`10 =` + (10 + 10);

//typ boolean
typliczba = 4+4 > 8; //folse

//console.log(typliczba);

let tablica = ['michał', 'inna', 'ola ma kota', 'martyna', 'arek'];
// tablica[1] = 'ola ma czarnego kota'
// tablica[1] = {imie: 'ola', ma: 'czarnego kota'};

//tablica.reverse();

tablica.unshift('ooops'); // dodajemy na pozątku 
tablica.shift(); //usuwamy element na poczontku
tablica.push('ooops');  //dodajemy element na końcu
tablica.pop()     //usuwamy elemet nnakńcu



tablica.slice(1, 3);  //wycina i nie modyfikuje orginalna []
//tablica.splice(1, 3);   //modyfikuje orginalna []

tablica.splice (2, 1, 'daria');

//tablica.sort();
let tablicaliczba = [ 1, 76 ,338, -1, 0];

tablicaliczba = tablicaliczba.sort((liczba1, liczba2)=>{
    return liczba1 -liczba2;
});

console.log(tablicaliczba);



// let prykładowyobiekt = {id: 3, imie:'kacper'}
//console.log(przykładowyobjekt.id, przykładowyojekt.imie);