let name1 = "aBoobaaA".toLowerCase()
let surname = "sobobasOVsfo".toLowerCase()
let newName
newName = name1.slice(0, 1).toUpperCase() + name1.slice(1)
let newSurname
newSurname = surname.slice(0, 1).toUpperCase() + surname.slice(1)
console.log(newSurname)
console.log(newName)
if (name1 == newName && surname == newSurname){
    console.log("Не изменялось")
}
else {
    console.log("Изменялось")
}
