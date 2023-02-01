"use strict"
let n = 7//кол-во знаков
let num1 = 3124.24562.toFixed(n)//число, округленное до нужного кол-ва знаков
let num2 = 3.324692996.toFixed(n)//число, округленное до нужного кол-ва знаков
let DivN1 = String(num1).split('.')[1]//отделение дробной части от целой
let DivN2 = String(num2).split('.')[1]//отделение дробной части от целой
let MasSign = [DivN1 < DivN2, DivN1 > DivN2, DivN1 >= DivN2, DivN1 <= DivN2, DivN1 === DivN2, DivN1 != DivN2]//создание массива с логическими операциями
console.log(DivN1)//вывод дробной части первого числа
console.log(DivN2)//вывод дробной части второго
console.log(MasSign)//вывод результата логических операций массива