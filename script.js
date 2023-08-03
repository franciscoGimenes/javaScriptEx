function cubo(){
    let ladoCubo = Number(prompt("Qual o valor do lado do cubo?"))
    let valorCubo = ladoCubo*ladoCubo*ladoCubo
    alert(`o valor do volume do cubo é de ${valorCubo} m³`)
    textoCubo = document.querySelector('h2#cubo')
    textoCubo.textContent = `O valor do volume do cubo é de ${valorCubo} m³`
}
function cone(){
    const pi = 3.14
    let raioCone = Number(prompt("Qual o valor do raio da base do cone?"))
    let alturaCone = Number(prompt("Qual o valor da altura do cone?"))
    let valorCone = ((pi*(raioCone*raioCone))*alturaCone)/3
    alert(`o valor do volume do cone é de ${valorCone} m³`)
    textoCone = document.querySelector('h2#cone')
    textoCone.textContent = `O valor do volume do cone é de ${valorCone} m³`
}
function piramide(){
    let ladoPiramide = Number(prompt("Qual o valor do lado da base da piramide?"))
    let alturaPiramide = Number(prompt("Qual o valor da altura da piramide"))
    let valorPiramide = ((ladoPiramide*ladoPiramide)*alturaPiramide)/3
    alert(`o valor do volume da piramide é de ${valorPiramide} m³`)
    textoCone = document.querySelector('h2#piramide')
    textoCone.textContent = `O valor do volume da piramide é de ${valorPiramide} m³`
}