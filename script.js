//os comentários vão servir para eu lembrar o que foi feito e mudado. Até o momento semana 3 concluída
// JaspionPowers=[`espadium laser`,`turbo magnum`, `gaibin`] isso foi uma forma mais simples de converter o array de objetos e uma única string

// for(i=0; i<JaspionPowers.lenght; i++){
//     Jaspion.skillsItens.push(JaspionPowers[i])
// }


Jaspion={
/*const name1*/ name: /*=*/ `Jaspion`,
/*const age1*/ age: /*=*/25,
/*const giantRobot1*/giantRobot:/*=*/ true,
/*const skillsItens1*/ skillsItens: /*`${JaspionPowers[0]}, ${JaspionPowers[1]}, ${JaspionPowers[2]}`*//*=*/ [`espadium laser`,`turbo magnum`, `gaibin`]
}
// for(i=0; i<Jaspion.skillsItens.length; i++){
//     Jaspion.skillsItens === [i]
//     console.log(`${Jaspion}`)
// } loop de string

LionMan={
/*const name2=*/ name: `Dan Shimaru`,
/*const age2=*/ age:21,
/*const giantRobot2=*/giantRobot: false,
/*const skillsItens2=*/skillsItens:[`lion furacão`, `lion terremoto`, `kinsachi`]
}

BlackKamenRider={
/*const name3=*/name:`Issamu Minami`,
/*const age3=*/age:19,
/*const giantRobot3=*/giantRobot: false,
/*const skillsItens3=*/skillsItens: [`golpe insectus`, `golpe louvadeus`, `battle hopper`]
}

let heroes=[]
let boolean=[]
heroes.push(Jaspion,LionMan,BlackKamenRider) /*atividade 3 semana 3*/
if (Jaspion.giantRobot===true){
    boolean.push(Jaspion)
}else{
    // boolean.push(Jaspion.name, Jaspion.age, Jaspion.skillsItens)
    // alert(`No giant robot for ${Jaspion.name}, sorry...`)
}
if (LionMan.giantRobot===true){
    boolean.push(LionMan)
}else{
    // boolean.push(LionMan)
    //alert(`No giant robot for ${LionMan.name}, sorry...`)
}
if (BlackKamenRider.giantRobot===true){
    boolean.push(BlackKamenRider)
}else{
    //boolean.push(BlackKamenRider.name, BlackKamenRider.age, BlackKamenRider.skillsItens)
    //alert(`No giant robot for ${BlackKamenRider.name}, sorry...`)
}
console.log(boolean)//imprimir o valor booleano

const mediaAge = (Jaspion.age+BlackKamenRider.age+LionMan.age)/3
// const giantRobot = giantRobot1&&giantRobot2&&giantRobot3===true
// let jaspion = name1.toUpperCase()+`\nidade: `+ age1+`\nrobô gigante? `+giantRobot1 +`\nhabilidades & itens: `+ skillsItens1;
// let lionMan= name2.toUpperCase()+`\nidade: `+age2+`\nroboô gigante? `+giantRobot2+`\nhabilidades & itens: `+skillsItens2;
// let kamenRider= name3.toUpperCase()+` `+`\nidade: `+ age3+`\nrobô gigante? `+giantRobot3 +`\nhabilidades & itens: `+ skillsItens3;

console.log(`A média de idade dos heróis é ${mediaAge}`)
// console.log(giantRobot)
// // console.log(jaspion)
// // console.log(lionMan)
// // console.log(kamenRider)
// console.log(`${name1.toUpperCase()}; \n idade: ${age1} \n robô gigante? ${giantRobot1} \n habilidades & itens: ${skillsItens1}`)
// console.log(`${name2.toUpperCase()}; \n idade: ${age2} \n robô gigante? ${giantRobot2} \n habilidades & itens: ${skillsItens2}`)
// console.log(`${name3.toUpperCase()}; \n idade: ${age3} \n robô gigante? ${giantRobot3} \n habilidades & itens: ${skillsItens3}`)

console.log(heroes)//IMPRIMIR A LISTA

//LOOP QUE CONVERTE TUDO EM STRING
// for(hero of heroes){
//     for (attribute in hero){
//         console.log(`${attribute}: ${hero[attribute].toString()}`)}
// }

//SEMANA 6
const algo= prompt(`digite nome do heroi`).toUpperCase();
    if (algo==="JSP" || algo==="JASPION") {
        console.log(Jaspion)
    }
    else if(algo === "BLACK KAMEN RIDER" || algo==="BKR" || algo ==="KAMEN RIDER" || algo ==="KAMEN RIDER BLACK" || algo==="ISSAMU MINAMI" || algo==="BLACK" || algo==="KAMENRIDER") {
        console.log(BlackKamenRider)
    }
    else if (algo === `LION MAN` || algo==="LIONMAN" || algo==="LION" || algo==="DAN SHIMARU" || algo === "SHIMARU" || algo==="DAN" ) {
        console.log(LionMan)
    }
    
    else{
        alert(`fracasso em encontrar um heroi... as forças de Mantor triunfaram`)
    }

//DOM TESTES
// let frase=document.getElementsByClassName(`LionMan`)
// console.log(frase)
// frase.innerHTML += `EU SOU O GENIO DO MAL! ME CHAMARAM?`
// console.log(frase)
// let r = document.getElementById("nome")
// console.log(r.value) 

// r.value=""
// console.log(r.value) 

let elemento= document.getElementById(`lista jaspion`)
let newli1=document.createElement(`li`)
let li1=document.createTextNode(`Nome: Jaspion`)
newli1.appendChild(li1)
elemento.insertAdjacentElement(`beforebegin`, newli1)

let newli2=document.createElement(`li`)
let li2=document.createTextNode(`Idade: 25`)
newli2.appendChild(li2)
elemento.insertAdjacentElement(`afterbegin`, newli2)

let newli3=document.createElement(`li`)
let li3=document.createTextNode(`Robô Gigante: Daileon`)
newli3.appendChild(li3)
elemento.insertAdjacentElement(`beforeend`, newli3)

//TENTATIVA FRACASSADA DE SUBLISTA EM DOM
// let newli4=document.createElement(`li`)
// let li4=document.createTextNode(`Habilidades & itens:`)
// newli4.appendChild(li4)
// elemento.insertAdjacentElement(`beforeend`, newli4)

// // elemento.insertAdjacentElement(`afterend`, paragrafo)

// let paragrafo=document.getElementById(`habilidades Jaspion`)
// let newp1=document.createElement(`p`)
// let p1=document.createTextNode(`Nome: Espadium laser`)
// newp1.appendChild(p1)
// paragrafo.insertAdjacentElement(`afterbegin`,newp1)

// let newp2=document.createElement(`p`)
// let p2=document.createTextNode(`Nome: Turbo magnum`)
// newp2.appendChild(p1)
// paragrafo.insertAdjacentElement(`beforeend`,newp2)

// let newp3=document.createElement(`p`)
// let p3=document.createTextNode(`Nome: Gaibin`)
// newp3.appendChild(p3)
// paragrafo.insertAdjacentElement(`beforeend`,newp3)

// newli4.appendChild(paragrafo)
// console.log(newli4)
let elemento1= document.getElementById(`lista BKR`)
let newli4=document.createElement(`li`)
let li4=document.createTextNode(`Nome: Issamu Minami`)
newli4.appendChild(li4)
elemento1.insertAdjacentElement(`beforebegin`, newli4)

let newli5=document.createElement(`li`)
let li5=document.createTextNode(`Idade: 19`)
newli5.appendChild(li5)
elemento1.insertAdjacentElement(`afterbegin`, newli5)

let newli6=document.createElement(`li`)
let li6=document.createTextNode(`Robô Gigante: Não Tem`)
newli6.appendChild(li6)
elemento1.insertAdjacentElement(`beforeend`, newli6)

let elemento2= document.getElementById(`lista lionMan`)
let newli7=document.createElement(`li`)
let li7=document.createTextNode(`Nome: Dan Shimaru`)
newli7.appendChild(li7)
elemento2.insertAdjacentElement(`beforebegin`, newli7)

let newli8=document.createElement(`li`)
let li8=document.createTextNode(`Idade: 21`)
newli8.appendChild(li8)
elemento2.insertAdjacentElement(`afterbegin`, newli8)

let newli9=document.createElement(`li`)
let li9=document.createTextNode(`Robô Gigante: Não Tem`)
newli9.appendChild(li9)
elemento2.insertAdjacentElement(`beforeend`, newli9)

function search(event){
    let input=document.getElementById(`nome`).value
    input=input.toUpperCase();
    let x = document.getElementById('h');
    if (x.innerHTML.toUpperCase().includes(input)) {
        //FALHEI EM CRIAR O MECANISMO DE BUSCA
        if (input==="JSP" || input==="JASPION") {
            x.style=`Jaspion`
        }
        else if(input === "BLACK KAMEN RIDER" || input==="BKR" || input ==="KAMEN RIDER" || input ==="KAMEN RIDER BLACK" || input==="ISSAMU MINAMI" || input==="BLACK" || input==="KAMENRIDER") {
            x.style=`BKM`
       }
        else if (input === `LION MAN` || input==="LIONMAN" || input==="LION" || input==="DAN SHIMARU" || input === "SHIMARU" || input==="DAN" ) {
            x.style=`lm`
       }
        
            
    else{
            alert(`procure um heroi para combater Satan Gos`)
    }
}}