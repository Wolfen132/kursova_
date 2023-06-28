
// Неважлива фенкція. Служить для полегшеного запуску процесу демонстрації проекту
function prepare(){
    let startArray = [
        {name: "Материнська плата Gigabyte B550 AORUS ", socket: "AM4", Chipset: "B550",Dimm: "4 x DDR4",Form_Factor: "ATX", pictname: "180835076.webp"},
        {name: "Материнська плата Asus TUF Gaming B450-Plus", socket:"1200", Chipset: "B450",Dimm: "4 x DDR4",Form_Factor: "micro-ATX", pictname: "164397086.webp"},
        {name: "Материнська плата Asus ROG Crosshair X670E Hero", socket:"AM5", Chipset: "X670",Dimm: "4 x DDR5",Form_Factor: "ATX", pictname: "289487922A.webp"},
        {name: "Материнська плата Asus TUF Gaming B550-Plus", socket:"AM4", Chipset: "B550",Dimm: "4 x DDR4",Form_Factor: "ATX", pictname: "25226643B.webp"},
        {name: "Материнська плата Gigabyte B650 Gaming X AX", socket:"AM5", Chipset: "B650",Dimm: "4 x DDR5",Form_Factor: "ATX", pictname: "297750534C.webp"},
        {name: "Материнська плата Asus TUF Gaming B660M-Plus", socket:"1700", Chipset: "B660",Dimm: "4 x DDR4",Form_Factor: "micro-ATX", pictname: "246370899D.webp"},
    ]
    
    localStorage.clear() //Очищуємо LocalStorage
    
    //Додаємо нові елементи в LocalStorage
    for (let i=0; i<startArray.length; i++) {   
        let row = startArray[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  //Перезавантажуємо вікно
}