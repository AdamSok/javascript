class osoba{
    constructor(name, surname){
        this.basename = name;
        this.basesurname = surname;
    }

    przedstawosobe() {
        return `ma na imie ${this.basename} ${this.basesurname}`;
    }
}

let maks = new osoba('maks', 'kowalski');
maks.koloroczu = 'niebieskie'
maks.jakijestkoloroczu = () =>{
    return maks.koloroczu
}
console.log(maks.jakijestkoloroczu())