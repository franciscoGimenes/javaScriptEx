function cubo(){
    let ladoCubo = Number(prompt("Qual o valor do lado do cubo?"))
    let valorCubo = ladoCubo*ladoCubo*ladoCubo
    alert(`o valor do volume do cubo é de ${valorCubo} m³`)
    textoCubo = document.querySelector('h2.volume')
    textoCubo.textContent = `O valor do volume do cubo é de ${valorCubo} m³`
}
function cone(){
    const pi = 3.14
    let raioCone = Number(prompt("Qual o valor do raio da base do cone?"))
    let alturaCone = Number(prompt("Qual o valor da altura do cone?"))
    let valorCone = ((pi*(raioCone*raioCone))*alturaCone)/3
    alert(`o valor do volume do cubo é de ${valorCone} m³`)
    textoCone = document.querySelector('h2.volume')
    textoCone.textContent = `O valor do volume do cone é de ${valorCone} m³`
}