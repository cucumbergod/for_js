let name1 = "aBoobaaA"
let surname = "sobobasOVsfo"
let newName = name1.toLowerCase()
name1 = name1.length
let newSurname = surname.toLowerCase()
surname = surname.length
let nameLastSymb = newName.slice(0,1).toUpperCase()
newName = newName.slice(1, name1)
newName = nameLastSymb + newName
let surnameLastSymb = newSurname.slice(0,1).toUpperCase()
newSurname = newSurname.slice(1, surname)
newSurname = surnameLastSymb + newSurname
console.log(newSurname)
console.log(newName)
