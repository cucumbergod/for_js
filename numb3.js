"use strict"
let n = 10
let m = -5
let random =( n > m? Math.random(n,m) * (n - m) + m: Math.random(m,n) * (m - n) + n).toFixed(0)
random % 2 == 0? random = random - 1: random = random 
console.log(random)
//не знаю, как сделать это без ветвления, особенно при разных n и m(в плане больше или меньше)