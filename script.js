// let jmeno = "David"
// console.log(jmeno)

// let vek = 32
// console.log(vek)
// console.log(vek-10)

/* Komentář na více řádků jako v HTML nebo v CSS */

let menuIcon = document.querySelector(".menu-icon")
let menu = document.querySelector(".menu")

menuIcon.addEventListener("click", function(){
    let iconSRC = menuIcon.src
    let splitSRC = iconSRC.split("/")
    let imageName = splitSRC[splitSRC.length-1]

    if(imageName == "hamburger.png"){
        menuIcon.src = "img/krizek.png"
        menu.style.left = "0%"
    } else  {
        menuIcon.src = "img/hamburger.png"
        menu.style.left = "-100%"
     }
})
// let nadpis = document.querySelector(".logo")
// nadpis.style.color = "blue"
// nadpis.style.fontSize = "40px"
// console.log(nadpis);
//     nadpis.addEventListener("click", function(){
//         console.log("Nazdar")
//     })

// let navigace = document.querySelector("nav")
// console.log(navigace)

// let zamestnanci = ["David", "Jana", "Petr", "Zaneta"]
// console.log(zamestnanci[0])
// console.log(zamestnanci[1])
// console.log(zamestnanci[2])

// console.log(zamestnanci[zamestnanci.length-1])

// console.log(zamestnanci[0] + " " + zamestnanci[2])

// let jmeno = "Zaneta"
// console.log(jmeno.split("e"));


// let jmeno = ["Ahoj", "Nazdar", "Cau"]

// if(jmeno [1] == jmeno[2]){
//     console.log("Je to pravda")
// } else{
//     console.log("není to pravda")
// }

// if("Zaneta" == "David"){
//     console.log("Je to pravda")
// } else {
//     console.log("Není to pravda")
// }


