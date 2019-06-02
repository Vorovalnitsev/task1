// обработчик события oncklick
document.getElementById("result").onclick = function(){
    //получаем в переменные значения, введенные в поля формы
    var digitOne = document.getElementById("digitOne").value;
    var digitTwo = document.getElementById("digitTwo").value;
    var result = parseFloat(digitOne) + parseFloat(digitTwo);

    //вы водим результат при условии, что результат числовое значение
    if (result === Number(result)) 
        alert("Результат:\n\n" + +result.toFixed(10));
}