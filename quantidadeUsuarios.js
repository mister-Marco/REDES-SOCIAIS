import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomesDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomesDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-secundaria')
            }
        }
    ]
    
    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Redes sociais com mais usuarios no mundo',
            x: 0,
            font: {
                color: getCSS('--cor-de-texto'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis:{
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes sociais',
                font:{
                    color: getCSS('--cor-terciaria')
                }
            }
        },
        yaxis:{
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuarios ativos',
                font:{
                    color: getCSS('--cor-terciaria')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuarios()