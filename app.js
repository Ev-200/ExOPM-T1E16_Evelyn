let letraSorte = Math.random() * 10 + 17
letraSorte = Math.floor(letraSorte)
console.log(letraSorte)


let adivinhar = prompt("Adivinha uma letra, entre A e Z")

console.log("letra:" + letraSorte, "letra de visitante:" + adivinhar)

let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let f = 6
let g = 7
let h = 8
let i = 9
let j = 10
let k = 11
let l = 12
let m = 13
let n = 14
let o = 15
let p = 16
let q = 17
let r = 18
let s = 19
let t = 20
let u = 21
let v = 22
let w = 23
let x = 24
let y = 25
let z = 26

let ganhou = false

if (adivinhar = a)




    while (!ganhou) {
        if (letraSorte === adivinhar) alert("Certo")
        ganhou = true
    } else if (numeroSorte > adivinhar && letraSorte - adivinhar <= 2 || letraSorte < adivinhar && adivinhar - letraSorte <= 2) {
        alert("Quase lá!!")
        adivinhar = prompt("Adivinha a letra, entre A e Z")
        adivinhar = Math.floor(Number(adivinhar))
    }

const n = 65;
const c = String.fromCharCode(n);
console.log(c);
