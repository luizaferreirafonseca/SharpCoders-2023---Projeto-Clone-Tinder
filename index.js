


const buttonHeart = () => {
    alert('Vocês deram match!')

}




function createPerson(nome, descricao, photo){
    return {
        nome,
        descricao,
        photo
    }
}

const person1 = createPerson("Luna", "Sou estudante de  Moda da UFRJ e amo sair no meu tempo vago! Adoro um sambinha e AMO conversar.", "./img/girl.png")
const person2 = createPerson("Daniel", "Sou de Nova Iguaçu, gosto de escutar rock e viajar.", "./img/homem-sorrindo.jpg")
const person3 = createPerson("Alice", "Faço Sistemas da Informação e amo jogar videogame!", "./img/menia.png")
const person4 = createPerson("Bento", "Amo pets, viagens, sair e ficar com os amigos e famílía", "./img/homem.png")

const arrayPerson = [person1, person2, person3, person4]

let index = 0 

const buttonX = () => {
    if(index > 0){
        index -= 1  
    } else {
        index = arrayPerson.length - 1 
    }
    changePhoto()
}

function changePhoto() {
    const mainImage = document.querySelector('.photo'); 
    mainImage.innerHTML = `
    <div class="text">
        <h1>${arrayPerson[index].nome}</h1>
        <p>${arrayPerson[index].descricao}</p>
    </div>
     `
     mainImage.style.backgroundImage = `url(${arrayPerson[index].photo})`
}