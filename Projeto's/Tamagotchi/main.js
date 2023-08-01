/*
    INFO's
        - 
        - 
        - 
    FUNÇÕEs
        - Personalização
        - 
        - Ciclo de vida
        - Doenças e remédios
        - Conquistas e recompensas
        - História e narrativa
    ERROR
        - Função showMessage() trava os demais comandos ao ser executada
        - 
        - 
*/

/*let criaturas = [
    '' = {
        nome: 'Pingo',
        caracteristica: 'Doce e amigável',
        ataque: '',
        defesa: '',
        tipo: 'Animal.',
        raca: 'Pinguim.',
        Origem: 'Polos: Artico e Antárico',
        Tatica: 'Rodeia o inimigo se dividindo e flutuando ao seu redor.',
        Info: 'Sempre em busca de uma boa onda gelada.',
    },
    '' = {
        nome: 'Bia',
        caracteristica: 'Não gosta de ser ameaçado',
        ataque: '',
        defesa: '',
        tipo: 'Entidade.',
        raca: 'Slime.',
        Origem: 'Calabouços do Tibia. Estas movem-se por fluir ao invés de andar.',
        Tatica: 'Rodeia o inimigo se dividindo e flutuando ao seu redor.',
        Info: 'Possui um pesado ataque, borém baixa defesa.',
    },
];*/

//Obj Tamagotchi
let tamagotchi = {
    nome: "Pingo",
    fome: 100,
    energia: 100,
    felicidade: 100,
    experiencia: 0,
    estagio: "Ovo",
};

//Função: Linka os ID's para atualizar os dados em tela
function updateDisplay() {
    document.getElementById("experience").textContent = tamagotchi.experiencia;
    document.getElementById("phase").textContent = tamagotchi.estagio;

    document.getElementById("name").textContent = tamagotchi.nome;
    document.getElementById("hunger").textContent = tamagotchi.fome;
    document.getElementById("energy").textContent = tamagotchi.energia;
    document.getElementById("happiness").textContent = tamagotchi.felicidade;
}

/*function showMessage(message) {
    document.getElementById("message").textContent = message;
}*/
/*function showMessage(status, message) {
    if(status === "Fome"){
    }else if (None, message){
    }
    document.getElementById("message").textContent = message;
}*/

//Função: Gerencia os atributos do TAMAG
function updateAtributos() {
    update_AtrFome(5);
    update_AtrEnerg(3);
    update_AtrFelic(2);

    if((tamagotchi.energia <= 20) && (tamagotchi.energia > 0)){
        //showMessage("Estou com muita fome!");
    }else{
        if(tamagotchi.energia <= 0){
            //deathTamag(tamagotchi.nome, tamagotchi.energia)
        }else{
            checkEvolution();
            update_XP(6);
        }
    }    
}

update_AtrFome = (value) => { //Update: Fome
    tamagotchi.fome -= value; //Decrementa o valor passado no obj TAMAGOTCHI
    tamagotchi.fome = Math.max(0, Math.min(100, tamagotchi.fome));
    document.getElementById("hunger").textContent = tamagotchi.fome; //Atualiza a informação para o usuário
    /*if (tamagotchi.fome <= 20) {
        //showMessage("Estou com muita fome!");
        showMessage("Fome", "Estou com muita fome!")
    }else {
        showMessage(None, "");
    }*/
}

update_AtrEnerg = (value) => { //Update: Energia
    tamagotchi.energia -= value; //Decrementa o valor passado no obj TAMAGOTCHI
    tamagotchi.energia = Math.max(0, Math.min(100, tamagotchi.energia));
    document.getElementById("energy").textContent = tamagotchi.energia; //Atualiza a informação para o usuário
}

update_AtrFelic = (value) => { //Update: Felicidade
    tamagotchi.felicidade -= value; //Decrementa o valor passado no obj TAMAGOTCHI
    tamagotchi.felicidade = Math.max(0, Math.min(100, tamagotchi.felicidade));
    document.getElementById("happiness").textContent = tamagotchi.felicidade; //Atualiza a informação para o usuário
    if (tamagotchi.felicidade <= 20) {
        //showMessage("Estou com muita fome!");
    }
}

update_XP = (value) => { //Update: 
    tamagotchi.experiencia += value; //Decrementa o valor passado no obj TAMAGOTCHI
    document.getElementById("experience").textContent = tamagotchi.experiencia; //Atualiza a informação para o usuário
}

//Função: Responsavel pela alterações de atributos do TAMAG de acordo com seu XP
function checkEvolution() {
    if (tamagotchi.experiencia <=5) {
        tamagotchi.estagio = "Ovo"; //showMessage("O Tamagotchi evoluiu para a fase de Bebê!");
        document.getElementById("phase").textContent = tamagotchi.estagio;
        update_tamagImg("ovo_gelo_000.png");
    } else if (tamagotchi.experiencia >= 6 && tamagotchi.estagio === "Ovo") {
        tamagotchi.estagio = "Bebê"; //showMessage("O Tamagotchi evoluiu para a fase de Adolescente!");
        document.getElementById("phase").textContent = tamagotchi.estagio;
        update_tamagImg("ping_crian_001.png");
    } else if (tamagotchi.experiencia >= 15 && tamagotchi.estagio === "Bebê") {
        tamagotchi.estagio = "Criança"; //showMessage("O Tamagotchi atingiu a fase de Adulto!");
        document.getElementById("phase").textContent = tamagotchi.estagio;
        update_tamagImg("ping_crian_002.png");
    }/*else if (tamagotchi.experiencia >= 30 && tamagotchi.estagio === "Criança") {
        tamagotchi.estagio = "Adolescente"; //showMessage("O Tamagotchi atingiu a fase de Adulto!");
        document.getElementById("phase").textContent = tamagotchi.estagio;
        update_tamagImg("ping_crian_003.png");
    }*/
}

function update_tamagImg(imagePath) {
    diretorio = "imagens/"
    document.getElementById("imgTamag").src = (diretorio + imagePath);
}

//Informa a morte do TAMAG
function deathTamag(tamagName, tamagEnerg){
    if(tamagEnerg <=0){
        alert(`${tamagName} não resistiu :(`)
    }else{
        checkEvolution();
        tamagotchi.experiencia += 6;
    }
}

// -- INTERAÇÃO -- //
function btnAlimentar(foodValue) {
    tamagotchi.fome += foodValue;
    updateAtributos();
}

function btnDormir() {
    tamagotchi.energy += 15;
    updateAtributos();
}

// -- HABILIDADES BÁSICAS -- //
/*function attack() {
    tamagotchi.felicidade -= 15;
    showMessage("Você atacou o Tamagotchi! Ele está um pouco triste.");
    updateAtributos();
}
function defend() {
    tamagotchi.felicidade += 10;
    showMessage("Você defendeu o Tamagotchi! Ele está mais feliz.");
    updateAtributos();
}*/

// -- HABILIDADES ESPECIAIS -- //
function useHeal() {
    if (tamagotchi.energia >= 25) {
        tamagotchi.energia -= 25;
        tamagotchi.felicidade += 20;
        showMessage("Você usou a habilidade Curar! O Tamagotchi está mais feliz e recuperou energia.");
    } else {
        showMessage("Energia insuficiente para usar a habilidade Curar!");
    }
    updateAtributos();
}

function useSpecialAttack() {
    if (tamagotchi.energia >= 30) {
        tamagotchi.energia -= 30;
        tamagotchi.felicidade -= 25;
        showMessage("Você usou a habilidade Ataque Especial! O Tamagotchi atacou com um poderoso golpe!");
    } else {
        showMessage("Energia insuficiente para usar a habilidade Ataque Especial!");
    }
    updateAtributos();
}

function summonFriend() {
    if (tamagotchi.energia >= 40) {
        tamagotchi.energia -= 40;
        tamagotchi.felicidade += 30;
        showMessage("Você usou a habilidade Invocar Amigo! Um amigo do Tamagotchi apareceu para ajudar.");
    } else {
        showMessage("Energia insuficiente para usar a habilidade Invocar Amigo!");
    }
    updateAtributos();
}

//Função: (Atividade - Brincar) Gera um n° aleátorio para o XP como recompensa
function play() {
    const xp = Math.floor(Math.random() * 10) + 1; //Gera um valor aleatório entre 1 e 10
    tamagotchi.experiencia += xp; //showMessage(`Você brincou com o Tamagotchi e ele ganhou ${xp} pontos de experiência!`);
    checkEvolution();
    updateAtributos();
}

setInfoTaago = () => {
}

//Chama a função updateAtributos() a cada 1s
setInterval(updateAtributos, 1000);

