var component = document.getElementById('value')

fetch(`http://economia.awesomeapi.com.br/json/last/USD-BRL`).then(res => {
    return res.json()
}).then(result => {
    const { name, high, low, ...rest } = result.USDBRL
    component.innerHTML = `Maxima do dia: ${high} <br> Minima do dia: ${low}`
})

