function cubo(){
    let ladoCubo = prompt("Qual o valor do lado do cubo?")
    let valorCubo = ladoCubo*ladoCubo*ladoCubo
    alert(`o valor do volume do cubo é de ${valorCubo} m³`)
    textoCubo = document.querySelector('h2.volume')
    textoCubo.textContent = `O valor do volume do cubo é de ${valorCubo} m³`
}