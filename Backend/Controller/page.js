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
    {"area": "Saúde", "cores": "Lavanda e Cinza", "codigos": "#E6E6FA, #708090, #D3D3D3"},
    {"area": "Saúde", "cores": "Verde e Rosa", "codigos": "#008000, #FF69B4, #2E8B57"},
    {"area": "Saúde", "cores": "Ciano e Laranja", "codigos": "#00FFFF, #FFA500, #20B2AA"},
    {"area": "Saúde", "cores": "Azul e Amarelo", "codigos": "#0000FF, #FFFF00, #6495ED"},
    {"area": "Saúde", "cores": "Roxo e Prata", "codigos": "#800080, #C0C0C0, #9932CC"},
    {"area": "Saúde", "cores": "Azul e Verde", "codigos": "#0000FF, #008000, #6A5ACD"},
    {"area": "Saúde", "cores": "Marrom e Amarelo", "codigos": "#8B4513, #FFFF00, #DAA520"},
    {"area": "Saúde", "cores": "Rosa e Azul", "codigos": "#FFC0CB, #0000FF, #ADD8E6"},
    {"area": "Saúde", "cores": "Verde e Prata", "codigos": "#008000, #C0C0C0, #2E8B57"},
    {"area": "Saúde", "cores": "Roxo e Verde", "codigos": "#800080, #008000, #9932CC"},
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
    {"area": "MercadoPet", "cores": "Rosa e Amarelo", "codigos": "#FFC0CB, #FFFF00, #FF69B4"},
    {"area": "MercadoPet", "cores": "Ciano e Laranja", "codigos": "#00FFFF, #FFA500, #20B2AA"},
    {"area": "MercadoPet", "cores": "Azul e Marrom", "codigos": "#0000FF, #8B4513, #4682B4"},
    {"area": "MercadoPet", "cores": "Verde e Cinza", "codigos": "#008000, #808080, #2E8B57"},
    {"area": "MercadoPet", "cores": "Roxo e Amarelo", "codigos": "#800080, #FFFF00, #9370DB"},
    {"area": "MercadoPet", "cores": "Rosa e Verde", "codigos": "#FFC0CB, #008000, #FF69B4"},
    {"area": "MercadoPet", "cores": "Azul e Laranja", "codigos": "#0000FF, #FFA500, #4682B4"},
    {"area": "MercadoPet", "cores": "Ciano e Marrom", "codigos": "#00FFFF, #8B4513, #00CED1"},
    {"area": "MercadoPet", "cores": "Roxo e Cinza", "codigos": "#800080, #808080, #9932CC"},
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

 const paletasPorCores = [
    {"cores": "Vermelho", "codigos": ["#FF0000", "#FFA07A", "#8B0000"]},
    {"cores": "Laranja", "codigos": ["#FFA500", "#FFD700", "#FF6347"]},
    {"cores": "Amarelo", "codigos": ["#FFFF00", "#FFD700", "#FFA500"]},
    {"cores": "Verde", "codigos": ["#008000", "#00FF00", "#228B22"]},
    {"cores": "Azul Claro", "codigos": ["#ADD8E6", "#00BFFF", "#87CEFA"]},
    {"cores": "Azul Escuro", "codigos": ["#00008B", "#0000CD", "#4169E1"]},
    {"cores": "Índigo", "codigos": ["#4B0082", "#800080", "#6A5ACD"]},
    {"cores": "Violeta", "codigos": ["#8A2BE2", "#9400D3", "#9932CC"]},
    {"cores": "Marrom", "codigos": ["#8B4513", "#A52A2A", "#D2691E"]},
    {"cores": "Cinza Claro", "codigos": ["#D3D3D3", "#DCDCDC", "#F5F5F5"]},
    {"cores": "Cinza Escuro", "codigos": ["#696969", "#808080", "#A9A9A9"]},
    {"cores": "Rosa Claro", "codigos": ["#FFB6C1", "#FFC0CB", "#FF69B4"]},
    {"cores": "Rosa Escuro", "codigos": ["#C71585", "#DB7093", "#FF1493"]},
    {"cores": "Turquesa", "codigos": ["#40E0D0", "#00CED1", "#20B2AA"]},
    {"cores": "Ouro", "codigos": ["#FFD700", "#FFDF00", "#DAA520"]},
    {"cores": "Prata", "codigos": ["#C0C0C0", "#D3D3D3", "#B0C4DE"]},
    {"cores": "Bronze", "codigos": ["#D2691E", "#CD7F32", "#8B4513"]},
    {"cores": "Púrpura", "codigos": ["#800080", "#8A2BE2", "#9932CC"]},
    {"cores": "Esmeralda", "codigos": ["#008000", "#00FF00", "#228B22"]},
    {"cores": "Aqua", "codigos": ["#00FFFF", "#00CED1", "#7FFFD4"]},
    {"cores": "Tangerina", "codigos": ["#FFA500", "#FF7F50", "#FF6347"]},
    {"cores": "Lavanda", "codigos": ["#E6E6FA", "#9370DB", "#6A5ACD"]},
    {"cores": "Orquídea", "codigos": ["#DA70D6", "#9932CC", "#8A2BE2"]},
    {"cores": "Cereja", "codigos": ["#DC143C", "#FF4500", "#FF6347"]},
    {"cores": "Limão", "codigos": ["#32CD32", "#ADFF2F", "#7FFF00"]},
    {"cores": "Salmão", "codigos": ["#FA8072", "#FFA07A", "#FF6347"]},
    {"cores": "Azeitona", "codigos": ["#808000", "#556B2F", "#6B8E23"]},
    {"cores": "Âmbar", "codigos": ["#FFBF00", "#FFD700", "#FFA500"]},
    {"cores": "Jade", "codigos": ["#00A86B", "#008B8B", "#2E8B57"]},
    {"cores": "Bordô", "codigos": ["#800000", "#8B0000", "#A52A2A"]}
];

 let coresAleatorias = []

function paleta () {
    return paleta
}

function escolherPaletas (area) {
    const escolhaIdeal = paletasDeCores.filter(paleta => paleta.area === area);
    return escolhaIdeal
}

// get  
export function paletaEscolhida (req, res) {
   
    try {
        const {area} = req.query;
        const paletasfiltrados = escolherPaletas (area)
        console.log(area);
        res.status(201).json ({paletasfiltrados});
    } catch (error) {
        console.log('Não foi possivel filtrar a cor com base na area',error)
    }
   
}

function filtrarCor (cores) {
    const coresFiltradas = paletasPorCores.filter (cor => cor.cores === cores);
    return coresFiltradas
}

//get
export function filtrarCores (req, res) {

    try{
        const {cores} = req.query;
        const corFilltrada = filtrarCor (cores); 
        console.log(cores)
        res.status(201).json ({corFilltrada})
    } catch (error) {
        console.log('Não foi possivel filtrar a cor com base na cor',error)
    }
}

function paletaAleatoria () {

    const chars = "0123456789ABCDEF";
    let coresAleatorias = [];

    for(let i = 0; i < 6; i++) {
        let color = "#";
        for(let a = 0; a <= 6; a++) {
            color += chars.charAt(Math.floor(Math.random()* chars.length))
        }
        
        console.log(color)
        coresAleatorias.push(color)
        
    }

    return coresAleatorias;
};

paletaAleatoria();

//get
export function paletaAleatorio (req, res) {
    const aleatoriaPaleta = paletaAleatoria ();
    res.json (aleatoriaPaleta)
}



