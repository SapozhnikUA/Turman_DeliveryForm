// ==UserScript==
// @name         Turman_DeliveryForm
// @namespace    sapozhnik@gmail.com
// @version      2023.03.05.006
// @description  Turman - filling out delivery form (Ukraine)
// @author       SapozhnikUA
// @match        https://base.turman.ua/db/send_create
// @updateURL    https://github.com/SapozhnikUA/Turman_DeliveryForm/raw/master/Turman_DeliveryForm.user.js
// @downloadURL  https://github.com/SapozhnikUA/Turman_DeliveryForm/raw/master/Turman_DeliveryForm.user.js
// @supportURL   https://github.com/SapozhnikUA/Turman_DeliveryForm/issues
// @grant        none
// ==/UserScript==


console.log('Start');
// Меняем ФИО отправителя
let my_form = document.getElementById('students-form');
let input_field = my_form.querySelectorAll('input');
console.log("вывод:", input_field);
console.log("вывод до:", input_field[10].value);
input_field[10].value = 'Фоменко Андрій';
console.log("вывод после:", input_field[10].value);

// Тип отправки Эконом-экспесс-ВИП
//document.getElementsByName('T_SRV').value = "EX";
document.getElementsByName('T_SRV')[2].checked = "1";

// Обратный адрес
document.getElementsByName('S_Adr')[0].value = "вул. Сверстюка Євгена, буд. 2А / БЦ Лівобережний";
document.getElementsByName('Descr')[0].defaultValue = "Документи";

console.log ('Done');