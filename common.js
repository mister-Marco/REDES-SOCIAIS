const getCSS = (variavel) => {
    return  getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--cor-secundaria'),
    size: 16,
    family: getCSS('--font')
}

export {getCSS, tickConfig}