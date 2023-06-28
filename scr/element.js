// Функція для побудови елемента та розміщення його в DOM
function buildElementToPage(id, elem) {                               
    const element = document.createElement('div')
    element.classList.add('element')
    element.insertAdjacentHTML('afterbegin', `
    <div class="element-data">
    <img src="img/${elem.pictname}" class="element-img">
    <div class="element-name">${elem.name}</div>
    <p class="element-text">Socket: <span class="element-socket">${elem.socket}</span></p> 
    <p class="element-text">Чіпсет: <span class="element-Chipset">${elem.Chipset}</span></p> 
    <p class="element-text">DIMM: <span class="element-Dimm">${elem.Dimm}</span></p> 
    <p class="element-text">Формфактор: <span class="element-Form_Factor">${elem.Form_Factor}</span></p> 
</div>
<div class="element-footer">
    <button class="blue-button" onclick="modifyModalToEdit(${id})">Змінити</button><span> </span>
    <button class="red-button" onclick="removeElementFromStorage(${id})">Видалити</button>
</div>

    <p></p>
    `)
    document.getElementsByClassName("displayzone")[0].appendChild(element)
}

// Зміна параметрів модалки для СТВОРЕННЯ нового елементу
function modifyModalToCreate() {
    document.getElementsByClassName("modal-title")[0].innerText = "Створити материнську плату"
    document.getElementById("submitbtn").setAttribute("onclick", `addElementToLocalStorage()`)
    document.getElementById("submitbtn").innerText = "Створити"
    document.getElementById("img-prev-section").setAttribute("style", "display: none")
    document.getElementById("label-select-img").innerText = "Select image file:"
    //  Вікриваємо модалку
    modal.open()
}

// Зміна параметрів модалки для РЕДАГУВАННЯ поточного елементу
function modifyModalToEdit(id) {
    document.getElementsByClassName("modal-title")[0].innerText = "Редагувати материнську плату"
    document.getElementById("submitbtn").innerText = "Змінити"
    document.getElementById("submitbtn").setAttribute("onclick", `editElementInLocalStorage(${id})`)
    //  Вибираємо елемент по ID з LS і парсимо в об'єкт
    let edElem = JSON.parse(localStorage.getItem(id))
    //  Встановлюємо значення полів форми
    document.getElementById("name").value = edElem.name;   
    document.getElementById("socket").value = edElem.socket;   
    document.getElementById("Chipset").value = edElem.Chipset;  
    document.getElementById("Dimm").value = edElem.Dimm;  
    document.getElementById("Form_Factor").value = edElem.Form_Factor; 
    document.getElementById("imgprev").setAttribute("src", `img/${edElem.pictname}`)
    document.getElementById("label-select-img").innerText = "Ви можете обрати інше фото:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
    // document.getElementById("imgfile").value = edElem.pictname; 
    //  Вікриваємо модалку
    modal.open()
}

//  Відображення в модалці зменшеної картинки
function showPrewImg(){
    let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
    document.getElementById("imgprev").setAttribute("src", `img/${filename}`)
    document.getElementById("label-select-img").innerText = "Ви можете обрати інше фото:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
}

//Слухаємо, чи змінилося значення поля input type="file" (чи вибралася інша картинка)
document.getElementById("imgfile").addEventListener("change", showPrewImg)



function validNameAndsocket(){
    let valid = true;
    let showMsg = '';
    let formName = document.getElementById("name").value.trim();
    let formsocket = document.getElementById("socket").value.trim();
    let formChipset = document.getElementById("Chipset").value.trim();
    if (!formName) {
        showMsg = ' Поле назви материнської плати порожнє!! '
        valid = false;
    }  
    if (!formsocket) {
        showMsg = showMsg + ' Поле сокету материнської плати порожнє!!'
        valid = false;
    } 
 
    if (!formChipset) {
        showMsg = showMsg + ' Поле Чіпсету материнської плати порожнє!!'
        valid = false;
    } 
    if (valid) {return valid} else {alert (showMsg)}
   
}
function validImg() {
    if (document.getElementById("imgfile").value) {return true} 
    else {
        alert ("Помилка !! Зображення не вибрано")
        return false} ;
}

// Створення параметрів нового елемента та розміщення його в LS
function addElementToLocalStorage(){
            
    if (validNameAndsocket() && validImg()) {
        //Шукаємо максимальне значення ID,  в LS не зайняте
        let keyArr = [];
        for(let i=0; i<localStorage.length; i++) {
            let key = Number(localStorage.key(i)) ;
            keyArr[i] = key
        }
        const freeKey = Math.max(...keyArr) + 1; 
        //Забираємо значення з форми
        let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
        // Будуємо новий елемент
        const newElement = {};
        newElement.name =  document.getElementById("name").value;   
        newElement.socket = document.getElementById("socket").value;   
        newElement.Chipset = document.getElementById("Chipset").value;  
        newElement.Dimm = document.getElementById("Dimm").value; 
        newElement.Form_Factor = document.getElementById("Form_Factor").value; 
        newElement.pictname = filename;   
        // Конвертуємо елемент в стрічку
        let rowSt = JSON.stringify(newElement)
        // Пакуємо елемент в LS
        localStorage.setItem(`${freeKey}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000)
    }
}
   
// Редагування параметрів елемента та розміщення його в LS
function editElementInLocalStorage(id) {
    if (validNameAndsocket()) {
        let edElem = JSON.parse(localStorage.getItem(id))
        edElem.name =  document.getElementById("name").value;   
        edElem.socket = document.getElementById("socket").value;   
        edElem.Chipset = document.getElementById("Chipset").value;   
        edElem.Dimm = document.getElementById("Dimm").value;  
        edElem.Form_Factor = document.getElementById("Form_Factor").value;  
        if (document.getElementById("imgfile").value) {
            let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
            edElem.pictname = filename; 
        }
        // Конвертуємо елемент в стрічку
        let rowSt = JSON.stringify(edElem)
        // Пакуємо елемент в LS
        localStorage.setItem(`${id}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000) //Перезавантажуємо вікно
    }
   
}

// Видалення параметрів елемента з LS
function removeElementFromStorage(id){
    if (confirm("Ви дійсно хочете видалити елемент?")) {
        localStorage.removeItem(id)
        location.reload();          //Перезавантажуємо вікно
    }

} 

let keyNumbers = Object.keys(localStorage).length //Визначаємо кількість об'єктів LocalStorage

for (let k=0; k<keyNumbers; k++) {
    let keyName = localStorage.key(k)
    let row = JSON.parse(localStorage.getItem(keyName))
    buildElementToPage(keyName, row)
}
function closeAdvertisement() {
    var advertisement = document.querySelector('.advertisement');
    advertisement.style.display = 'none';
  }
  

