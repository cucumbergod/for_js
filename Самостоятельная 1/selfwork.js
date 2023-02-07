"use strict" 
let password = "vknfdhdh"
let passLength = password.length
passLength > 4 || password.includes("_","-") ? console.log("Пароль надежный"):console.log("Пароль ненадежный")
