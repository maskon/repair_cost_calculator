const inputSquare = document.querySelector('#square-input');
const inputRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
const calcPrice = document.querySelector('.calc-price-value');

const inputRadioType = document.querySelectorAll('input[name="type"]');
const inputRadioBuilding = document.querySelectorAll('input[name="building"]');
const inputRadioRooms = document.querySelectorAll('input[name="rooms"]');

const inputRadioCeiling = document.querySelectorAll('input[name="ceiling"]');
const inputRadioWalls = document.querySelectorAll('input[name="walls"]');
const inputRadioFloor = document.querySelectorAll('input[name="floor"]');


let result;

function calculate () {
    
    // Площадь
    result = +(inputSquare.value) * 6000;
    
    // Мобильная адаптивность
    inputRadioType.forEach(function (radio) {
        if (radio.checked) {
           result = result * +(radio.value);
        }; 
    });
        
    inputRadioBuilding.forEach(function (radio) {
        if (radio.checked) {
           result = result * +(radio.value);
        };
    });
    
    // Количество комнат
    inputRadioRooms.forEach(function (radio) {
        if (radio.checked) {
           result = result * +(radio.value);
        };
    });
    
    // Дополнительные опции
    inputRadioCeiling.forEach(function (radio) {
        if (radio.checked) {
           result = result * +(radio.value);
        };
    });
    
    inputRadioWalls.forEach(function (radio) {
        if (radio.checked) {
           result = result * +(radio.value);
        };
    });
    
    inputRadioFloor.forEach(function (radio) {
        if (radio.checked) {
           result = result * +(radio.value);
        };
    });
    
    calcPrice.textContent = result.toLocaleString('ru-RU');
};
calculate();

inputRange.addEventListener('input', function() {  
   inputSquare.value = inputRange.value;
    calculate();
});

inputSquare.addEventListener('input', function() {  
    inputRange.value = inputSquare.value;
    calculate();
});

inputs.forEach(function (item) {
    item.addEventListener('input', function() {
        calcPrice.textContent = result.toLocaleString('ru-RU');
        calculate();
    });
});



    
    
