// Задання вихідних параметрів (title, [x], content) конфігурації модалки 
const modal = $.modal({
    title: ' options',
    closable: true,
    content: `
      <div class="modal-form">
  <label for="name">Назва материнської плати:</label><br>
  <input type="text" id="name" name="name" class="modal-form-field" placeholder="Введіть назву материнської плати..."/><br><br>

  <label for="socket">Socket:</label><br>
  <input type="text" id="socket" name="socket" class="modal-form-field" placeholder="Введіть сокет"/><br><br>

  <label for="Chipset">Chipset:</label><br>
  <input type="text" id="Chipset" name="Chipset" placeholder="Введіть чіпсет" class="modal-form-field"><br><br>

  <label for="Dimm">DIMM:</label><br>
  <select class="modal-form-field" name="Dimm" id="Dimm">
    <option value="4 x DDR4">4 x DDR4</option>
    <option value="2 x DDR4">2 x DDR4</option>
    <option value="4 x DDR3">4 x DDR3</option>
    <option value="2 x DDR3">2 x DDR3</option>
    <option value="4 x DDR5">4 x DDR5</option>
  </select>
  <br><br>

  <label for="Form_Factor">Form Factor:</label><br>
  <select class="modal-form-field" name="Form_Factor" id="Form_Factor">
    <option value="ATX">ATX</option>
    <option value="mini-ATX">mini-ATX</option>
    <option value="microATX">microATX</option>
    <option value="LPX">LPX</option>
    <option value="Mini-LPX">Mini-LPX</option>
  </select>
  <br><br>

  <div id="img-prev-section">
    <img id="imgprev" src="">
  </div>

  <label for="file" id="label-select-img">Select image file:</label><br>
  <input type="file" id="imgfile" name="imgfile"><br><br>

  <button id="submitbtn" class="blue-button" onclick="myFunction()">Click me</button>
</div>

    `,
    width: '500px'
})



