let erro = '[ERRO]0'

let boost = 0
let boostusage = 0


let rodada = 0
let acertos = 0

let p1 = window.document.getElementById('p1')
let p2 = window.document.getElementById('p2')
let p3 = window.document.getElementById('p3')
let p4 = window.document.getElementById('p4')

let res = window.document.getElementById('res')

let intervalboost = setInterval("boosttime()", 1000)

function boosttime() {
    if (boost == 4) {
        boost = 0
        res.innerHTML += '<section id:"textos"><p>Você recebeu um boost com ele você pode pular um pokemom</p></section>'
        res.innerHTML += '<section id="botoes"><p id:"booster"><input type="button" value="boost" onclick="boosted()"></p></section>'
    }
}

function boosted() {
    acertos++
    rodada++
    boostusage++
    if (rodada == 5) {
        window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/1200px-150Mewtwo.png'
    }
    if (rodada == 6) {
        window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/1200px-384Rayquaza.png'
    }
    if (rodada == 7) {
        window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
    }
    if (rodada == 8) {
        window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
    }
    if (rodada == 9) {
        window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'
    }
    res.innerHTML = ''
}

function parar() {
    let porcentagem = acertos * 10
    let pulados = 10 - rodada

    window.document.getElementById("imge").src = 'https://i.pinimg.com/originals/7a/f6/0b/7af60b2b6fa202db54f0aa275fee6e17.png'

    p1.innerHTML = '<section id="botoes"><p id="p1">Pikachu:<input type="radio" name="opção" id="primeiro"></p></section>'
    p2.innerHTML = '<section id="botoes"><p id="p2">Charmander:<input type="radio" name="opção" id="segundo"></p></section>'
    p3.innerHTML = '<section id="botoes"><p id="p3">BubaSauro:<input type="radio" name="opção" id="terceiro"></p></section>'
    p4.innerHTML = '<section id="botoes"><p id="p4">Pichu:<input type="radio" name="opção" id="quarto"></p></section>'

    res.innerHTML += `<p>Você parou na rodada ${rodada}:(</p>`
    res.innerHTML += '<section id="score"><h1>Seu score:</h1></section>'
    res.innerHTML += `<section id="score"><p>Acertos:${acertos}</p></section>`
    res.innerHTML += `<section id="score"><p>Porcentagem de acerto:${porcentagem}%</p>`
    res.innerHTML += `<section id="score"><p>Boosts:${boostusage}</p>`
    res.innerHTML += `<section id="score"><p>Pulados:${pulados}</p>`

    boostusage = 0
    boost = 0
    acertos = 0
    rodada = 0
}

function jogar() {
    let s1 = window.document.getElementById('primeiro')
    let s2 = window.document.getElementById('segundo')
    let s3 = window.document.getElementById('terceiro')
    let s4 = window.document.getElementById('quarto')

    let res = window.document.getElementById('res')

    let errou = [
        `Você errou,o pokemom era Charmander`,
        `Você errou,o pokemom era Pikachu`,
        `Você errou,o pokemom era Pichu`,
        `Você errou,o pokemom era Bubasauro`,
        `Você errou,o pokemom era Charizard`,
        `Você errou,o pokemom era MewTwo`,
        `Você errou,o pokemom era Rayquaza`,
        `Você errou,o pokemom era Snorlax`,
        `Você errou,o pokemom era Miau`,
        `Você errou,o pokemom era Mew`
    ]
    let acertou = [
        `Parabens você acertou, o pokemom era Charmander`,
        `Parabens você acertou, o pokemom era Pikachu`,
        `Parabens você acertou, o pokemom era Pichu`,
        `Parabens você acertou, o pokemom era Bubasauro`,
        `Parabens você acertou, o pokemom era Charizard`,
        `Parabens você acertou, o pokemom era MewTwo`,
        `Parabens você acertou, o pokemom era Rayquaza`,
        `Parabens você acertou, o pokemom era Snorlax`,
        `Parabens você acertou, o pokemom era Miau`,
        `Parabens você acertou, o pokemom Mew`
    ]

    rodada++

    if (rodada == 1) { //charmander
        if (s1.checked == true) {
            res.innerHTML = errou[0]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com//assets/cms2/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/inline/world.png'
        } else if (s2.checked == true) {
            res.innerHTML = acertou[0]
            acertos++
            boost++
            window.document.getElementById("imge").src = 'https://assets.pokemon.com//assets/cms2/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/inline/world.png'
        } else if (s3.checked == true) {
            res.innerHTML = errou[0]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com//assets/cms2/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/inline/world.png'
        } else if (s4.checked == true) {
            res.innerHTML = errou[0]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com//assets/cms2/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/inline/world.png'
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }
        res.innerHTML = ''
    }

    if (rodada == 2) { //Pikachu
        if (s1.checked == true) {
            res.innerHTML = acertou[1]
            acertos++
            boost++
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png'
        } else
        if (s2.checked == true) {
            res.innerHTML = errou[1]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png'
        } else if (s3.checked == true) {
            res.innerHTML = errou[1]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png'
        } else if (s4.checked == true) {
            res.innerHTML = errou[1]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png'
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }
    }

    if (rodada == 3) { //Pichu
        if (s1.checked == true) {
            res.innerHTML = errou[2]
            window.document.getElementById("imge").src = 'https://i.pinimg.com/originals/3b/78/47/3b7847675982776e5219e12a680ecd84.png'
        } else if (s2.checked == true) {
            res.innerHTML = errou[2]
            window.document.getElementById("imge").src = 'https://i.pinimg.com/originals/3b/78/47/3b7847675982776e5219e12a680ecd84.png'
        } else if (s3.checked == true) {
            res.innerHTML = errou[2]
            window.document.getElementById("imge").src = 'https://i.pinimg.com/originals/3b/78/47/3b7847675982776e5219e12a680ecd84.png'
        } else if (s4.checked == true) {
            res.innerHTML = acertou[2]
            acertos++
            boost++
            window.document.getElementById("imge").src = 'https://i.pinimg.com/originals/3b/78/47/3b7847675982776e5219e12a680ecd84.png'
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }
    }

    if (rodada == 4) { //Bubasauro
        if (s1.checked == true) {
            res.innerHTML = errou[3]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
        } else if (s2.checked == true) {
            res.innerHTML = errou[3]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
        } else if (s3.checked == true) {
            res.innerHTML = acertou[3]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
            acertos++
            boost++
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
        } else if (s4.checked == true) {
            res.innerHTML = errou[3]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }

        p1.innerHTML = '<section id="opcoes"> <p id="p1">MewTwo:<input type="radio" name="opção" id="primeiro"></p> </section>'
        p2.innerHTML = '<section id="opcoes"> <p id="p1">Charizard:<input type="radio" name="opção" id="segundo"></p> </section>'
        p3.innerHTML = '<section id="opcoes"> <p id="p1">Snorlax:<input type="radio" name="opção" id="terceiro"></p> </section>'
        p4.innerHTML = '<section id="opcoes"> <p id="p1">Rayquaza:<input type="radio" name="opção" id="quarto"></p> </section>'
    }

    if (rodada == 5) { //Charizard
        if (s1.checked == true) {
            res.innerHTML = errou[4]
            window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/1200px-150Mewtwo.png'
        } else if (s2.checked == true) {
            res.innerHTML = acertou[4]
            acertos++
            boost++
            window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/1200px-150Mewtwo.png'
        } else if (s3.checked == true) {
            res.innerHTML = errou[4]
            window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/1200px-150Mewtwo.png'
        } else if (s4.checked == true) {
            res.innerHTML = errou[4]
            window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/1200px-150Mewtwo.png'
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }
    }

    if (rodada == 6) { //MewTwo
        if (s1.checked == true) {
            res.innerHTML = acertou[5]
            acertos++
            boost++
            window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/1200px-384Rayquaza.png'
        } else if (s2.checked == true) {
            res.innerHTML = errou[5]
            window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/1200px-384Rayquaza.png'
        } else if (s3.checked == true) {
            res.innerHTML = errou[5]
            window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/1200px-384Rayquaza.png'
        } else if (s4.checked == true) {
            res.innerHTML = errou[5]
            window.document.getElementById("imge").src = 'https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/1200px-384Rayquaza.png'
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }
    }

    if (rodada == 7) { //rayquaza
        if (s1.checked == true) {
            res.innerHTML = errou[6]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
        } else if (s2.checked == true) {
            res.innerHTML = errou[6]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
        } else if (s3.checked == true) {
            res.innerHTML = errou[6]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
        } else if (s4.checked == true) {
            res.innerHTML = acertou[6]
            acertos++
            boost++
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }
    }

    if (rodada == 8) { //snorlax
        if (s1.checked == true) {
            res.innerHTML = errou[7]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
        } else if (s2.checked == true) {
            res.innerHTML = errou[7]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
        } else if (s3.checked == true) {
            res.innerHTML = acertou[7]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
            acertos++
            boost++
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
        } else if (s4.checked == true) {
            res.innerHTML = errou[7]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }

        p1.innerHTML = '<section id="opcoes"> <p id="p1">Miau:<input type="radio" name="opção" id="primeiro"></p> </section>'
        p2.innerHTML = '<section id="opcoes"> <p id="p1">Raichu:<input type="radio" name="opção" id="segundo"></p> </section>'
        p3.innerHTML = '<section id="opcoes"> <p id="p1">Mew:<input type="radio" name="opção" id="terceiro"></p> </section>'
        p4.innerHTML = '<section id="opcoes"> <p id="p1">Froakie:<input type="radio" name="opção" id="quarto"></p> </section>'
    }

    if (rodada == 9) { //miau
        if (s1.checked == true) {
            res.innerHTML = acertou[8]
            acertos++
            boost++
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'
        } else if (s2.checked == true) {
            res.innerHTML = errou[8]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'
        } else if (s3.checked == true) {
            res.innerHTML = errou[8]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'
        } else if (s4.checked == true) {
            res.innerHTML = errou[8]
            window.document.getElementById("imge").src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }
    }

    if (rodada == 10) { //mew
        if (s1.checked == true) {
            res.innerHTML = errou[9]
        } else if (s2.checked == true) {
            res.innerHTML = errou[9]
        } else if (s3.checked == true) {
            res.innerHTML = acertou[9]
            acertos++
        } else if (s4.checked == true) {
            res.innerHTML = errou[9]
        } else {
            res.innerHTML = 'Porfavor selecione um pokemom para poder jogar'
        }

        let erros = 10 - acertos
        let porcentagem = acertos * 10


        res.innerHTML += '<p>Acabou as rodadas :(</p>'
        res.innerHTML += '<section id="score"><h1>Seu score:</h1></section>'
        res.innerHTML += `<section id="score"><p>Acertos:${acertos}</p></section>`
        res.innerHTML += `<section id="score"><p>Erros:${erros}</p></section>`
        res.innerHTML += `<section id="score"><p>Porcentagem de acerto:${porcentagem}%</p>`
        res.innerHTML += `<section id="score"><p>Boosts:${boostusage}</p>`
        res.innerHTML += `<section id="botoes"><p><input type="button" value="Jogar Novamente" onclick="reload()"></p></section>`
    }

}

function reload() {
    window.document.getElementById("imge").src = 'https://i.pinimg.com/originals/7a/f6/0b/7af60b2b6fa202db54f0aa275fee6e17.png'

    let res = window.document.getElementById('res')

    erros = 0
    acertos = 0
    rodada = 0
    boost = 0
    boostusage = 0
    res.innerHTML = ''

    p1.innerHTML = '<section id="botoes"><p id="p1">Pikachu:<input type="radio" name="opção" id="primeiro"></p></section>'
    p2.innerHTML = '<section id="botoes"><p id="p2">Charmander:<input type="radio" name="opção" id="segundo"></p></section>'
    p3.innerHTML = '<section id="botoes"><p id="p3">BubaSauro:<input type="radio" name="opção" id="terceiro"></p></section>'
    p4.innerHTML = '<section id="botoes"><p id="p4">Pichu:<input type="radio" name="opção" id="quarto"></p></section>'
}