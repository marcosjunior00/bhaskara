const form = document.getElementById('form')
const resultContainer = document.getElementById('resolucao')
const backButton = document.getElementById('back')

window.onload = () => {
    resultContainer.style.display = 'none'
}

form.onsubmit = (e) => {
    e.preventDefault()

    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const c = document.getElementById('c').value

    if (!a || !b || !c) return alert('Você deve preencher todos os campos!')

    console.log({ data: { a, b, c } })

    document.getElementById('formula').innerHTML = `${a}x<sup>2</sup> + ${b}x + ${c} = 0`
    const paragraph = document.getElementById('resultado')
    
    let delta = (b ** 2) - 4 * a * c
    document.getElementById('delta').textContent = delta
    
    const x1 = () => ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2)
    const x2 = () => ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2)
    
    if (delta < 0) {
        paragraph.textContent = 'Não existe raízes para este delta'
    }
    else if (delta === 0) {
        paragraph.textContent = `X = ${x1()}`
    }
    else {
        paragraph.innerHTML = `X1 = ${x1()} <br>
        X2 = ${x2()}`
    }
    
    resultContainer.style.display = 'flex'
    form.style.display = 'none'
}

backButton.onclick = () => {
    form.style.display = 'flex'
    resultContainer.style.display = 'none'
}