console.log(Math.ceil(6.1))


const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola 2' tbm funciona
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec ...', nome)
    }
}

const obj2 = new Obj('thiago')
const obj3 = new Obj('futenma')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()