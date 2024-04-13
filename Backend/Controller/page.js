const paletasDeCores = [
    {"area": "Alimentação", "cores": "Laranja e Marrom", "codigos": "#FFA500, #8B4513, #D2691E"},
    {"area": "Alimentação", "cores": "Vermelho e Verde", "codigos": "#FF0000, #008000, #B22222"},
    {"area": "Alimentação", "cores": "Azul e Roxo", "codigos": "#0000FF, #800080, #4169E1"},
    {"area": "Alimentação", "cores": "Preto e Branco", "codigos": "#000000, #FFFFFF, #808080"},
    {"area": "Alimentação", "cores": "Cinza e Amarelo", "codigos": "#808080, #FFFF00, #696969"},
    {"area": "Alimentação", "cores": "Verde e Laranja", "codigos": "#008000, #FFA500, #ADFF2F"},
    {"area": "Alimentação", "cores": "Marrom e Vermelho", "codigos": "#8B4513, #FF0000, #A52A2A"},
    {"area": "Alimentação", "cores": "Ciano e Roxo", "codigos": "#00FFFF, #800080, #4682B4"},
    {"area": "Alimentação", "cores": "Azul e Amarelo", "codigos": "#0000FF, #FFFF00, #6495ED"},
    {"area": "Alimentação", "cores": "Rosa e Branco", "codigos": "#FF69B4, #FFFFFF, #FFB6C1"},
    {"area": "Beleza, saúde e estética", "cores": "Lavanda e Cinza", "codigos": "#E6E6FA, #708090, #D3D3D3"},
    {"area": "Beleza, saúde e estética", "cores": "Verde e Rosa", "codigos": "#008000, #FF69B4, #2E8B57"},
    {"area": "Beleza, saúde e estética", "cores": "Ciano e Laranja", "codigos": "#00FFFF, #FFA500, #20B2AA"},
    {"area": "Beleza, saúde e estética", "cores": "Azul e Amarelo", "codigos": "#0000FF, #FFFF00, #6495ED"},
    {"area": "Beleza, saúde e estética", "cores": "Roxo e Prata", "codigos": "#800080, #C0C0C0, #9932CC"},
    {"area": "Beleza, saúde e estética", "cores": "Azul e Verde", "codigos": "#0000FF, #008000, #6A5ACD"},
    {"area": "Beleza, saúde e estética", "cores": "Marrom e Amarelo", "codigos": "#8B4513, #FFFF00, #DAA520"},
    {"area": "Beleza, saúde e estética", "cores": "Rosa e Azul", "codigos": "#FFC0CB, #0000FF, #ADD8E6"},
    {"area": "Beleza, saúde e estética", "cores": "Verde e Prata", "codigos": "#008000, #C0C0C0, #2E8B57"},
    {"area": "Beleza, saúde e estética", "cores": "Roxo e Verde", "codigos": "#800080, #008000, #9932CC"},
    {"area": "Consertos", "cores": "Azul e Laranja", "codigos": "#0000FF, #FFA500, #4682B4"},
    {"area": "Consertos", "cores": "Roxo e Amarelo", "codigos": "#800080, #FFFF00, #9370DB"},
    {"area": "Consertos", "cores": "Verde e Cinza", "codigos": "#008000, #808080, #2E8B57"},
    {"area": "Consertos", "cores": "Ciano e Marrom", "codigos": "#00FFFF, #8B4513, #00CED1"},
    {"area": "Consertos", "cores": "Vermelho e Branco", "codigos": "#FF0000, #FFFFFF, #DC143C"},
    {"area": "Consertos", "cores": "Cinza e Amarelo", "codigos": "#808080, #FFFF00, #B0C4DE"},
    {"area": "Consertos", "cores": "Rosa e Azul", "codigos": "#FF69B4, #0000FF, #6A5ACD"},
    {"area": "Consertos", "cores": "Azul e Verde", "codigos": "#0000FF, #008000, #4682B4"},
    {"area": "Consertos", "cores": "Marrom e Verde", "codigos": "#8B4513, #008000, #556B2F"},
    {"area": "Tecnologia", "cores": "Ciano e Preto", "codigos": "#00FFFF, #000000, #A9A9A9"},
    {"area": "Tecnologia", "cores": "Roxo e Laranja", "codigos": "#800080, #FFA500, #9932CC"},
    {"area": "Tecnologia", "cores": "Verde e Cinza", "codigos": "#008000, #808080, #2E8B57"},
    {"area": "Tecnologia", "cores": "Azul e Marrom", "codigos": "#0000FF, #8B4513, #4682B4"},
    {"area": "Tecnologia", "cores": "Rosa e Prata", "codigos": "#FFC0CB, #C0C0C0, #FF69B4"},
    {"area": "Tecnologia", "cores": "Roxo e Cinza", "codigos": "#800080, #808080, #9932CC"},
    {"area": "Tecnologia", "cores": "Vermelho e Verde", "codigos": "#FF0000, #008000, #DC143C"},
    {"area": "Tecnologia", "cores": "Cinza e Azul", "codigos": "#808080, #0000FF, #A9A9A9"},
    {"area": "Mercado Pet", "cores": "Rosa e Amarelo", "codigos": "#FFC0CB, #FFFF00, #FF69B4"},
    {"area": "Mercado Pet", "cores": "Ciano e Laranja", "codigos": "#00FFFF, #FFA500, #20B2AA"},
    {"area": "Mercado Pet", "cores": "Azul e Marrom", "codigos": "#0000FF, #8B4513, #4682B4"},
    {"area": "Mercado Pet", "cores": "Verde e Cinza", "codigos": "#008000, #808080, #2E8B57"},
    {"area": "Mercado Pet", "cores": "Roxo e Amarelo", "codigos": "#800080, #FFFF00, #9370DB"},
    {"area": "Mercado Pet", "cores": "Rosa e Verde", "codigos": "#FFC0CB, #008000, #FF69B4"},
    {"area": "Mercado Pet", "cores": "Azul e Laranja", "codigos": "#0000FF, #FFA500, #4682B4"},
    {"area": "Mercado Pet", "cores": "Ciano e Marrom", "codigos": "#00FFFF, #8B4513, #00CED1"},
    {"area": "Mercado Pet", "cores": "Roxo e Cinza", "codigos": "#800080, #808080, #9932CC"},
    {"area": "Marketing", "cores": "Verde e Laranja", "codigos": "#008000, #FFA500, #ADFF2F"},
    {"area": "Marketing", "cores": "Roxo e Amarelo", "codigos": "#800080, #FFFF00, #9370DB"},
    {"area": "Marketing", "cores": "Azul e Rosa", "codigos": "#0000FF, #FFC0CB, #4682B4"},
    {"area": "Marketing", "cores": "Verde e Marrom", "codigos": "#008000, #8B4513, #556B2F"},
    {"area": "Marketing", "cores": "Roxo e Laranja", "codigos": "#800080, #FFA500, #9932CC"},
    {"area": "Marketing", "cores": "Azul e Marrom", "codigos": "#0000FF, #8B4513, #4682B4"},
    {"area": "Marketing", "cores": "Verde e Cinza", "codigos": "#008000, #808080, #2E8B57"},
    {"area": "Marketing", "cores": "Roxo e Preto", "codigos": "#800080, #000000, #9932CC"},
    {"area": "Marketing", "cores": "Azul e Amarelo", "codigos": "#0000FF, #FFFF00, #6495ED"},
    {"area": "Marketing", "cores": "Rosa e Verde", "codigos": "#FFC0CB, #008000, #FF69B4"}
 ];

 let coresAleatorias = []

function paleta () {
    return paleta
}

function escolherPaletas (area) {
    const escolhaIdeal = paletasDeCores.filter (paleta => paletasDeCores.area === area);
    return escolhaIdeal
}

// get
export function paletaEscolhida (req, res) {
    const {area} = req.body;
    const paletasfiltrados = escolherPaletas (area);
    res.json ({paletasfiltrados});
}

function filtrarCor (cor) {
    const coresFiltradas = cor.filter (cor => cor.cores === cores);
    return filtrarCor
}

//get
export function filtrarCores (req, res) {
    const {cores} = req.body;
    const corFiltrada = filtrarCor (cores);
    res.json ({corFiltrada});
}

function paletaAleatoria () {

    const chars = "0123456789ABCDEF";

    for(let i = 0; i < 6; i++) {
        let color = "#";
        for(let a = 0; a <= 6; a++) {
            color += chars.charAt(Math.floor(Math.random()* chars.length))
        }
        coresAleatorias.push(color)
    }

    return coresAleatorias;
};

paletaAleatoria();
console.log(coresAleatorias);

//get
export function paletaAleatorio (req, res) {
    const aleatoriaPaleta = paletaAleatoria ();
    res.json (aleatoriaPaleta)
}





