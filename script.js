// LÓGICA DE VERIFICAÇÃO DE IDADE

const idadeInput = document.getElementById('idadeInput');
const verifyButton = document.getElementById('verifyButton');
const result = document.getElementById('resultado'); 

function verificarIdade(){
    result.classList.remove('visivel');
    const idade = parseInt(idadeInput.value);
    let menssagem = '';

    if(isNaN(idade) || idade < 0){
        menssagem = 'Por favor, insira uma idade válida.';
    }else if(idade < 18){
        menssagem = 'VOcê é menor de idade.';
    }else if(idade < 60){
        menssagem = 'Você é adulto.';
    }else{
        menssagem = 'Você é idoso.';
    }

    setTimeout(() => {
         result.innerText = menssagem;
         result.classList.add('visivel');
    }, 100);
}

verifyButton.addEventListener('click', verificarIdade);
idadeInput.addEventListener('keyup', (event) => {
      if(event.key === 'Enter') verificarIdade();
   });
   
   // animação do canvas de fundo

   const canvas = document.getElementById('background-canvas');
   const ctx = canvas.getContext('2d'); // constexto 2d do canvas , onde vamos desenhar
   
   // ajusta o tamanho do canvas para preencher o tamanho da janela
   canvas.clientWidth = window.innerWidth;
   canvas.height = window.innerHeight;

// Objeto para armazenar a posicão do mouse
let mouse  = {
    x: null,
    y: null,
    radius: 150 // area de einfluencia do mouse
}; 

window.addEventListerer('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
});

// classe para representar cada particulas

let particulasArray = [];
const numeroDeParticulas = 100;
class Particula{
    constructor(x, y, direcaoX, direcaoY, tamanho, cor){
         this.x = x;
         this.y = y;
         this.direcaoX = direcaoX;
         this.direcaoY = direcaoY;
         this.tamanho = tamanho;
         this.cor = cor;

    }

desenhar(){
    ctx.beginPath();
    ctx.arc(this.x, this,y, this.tamanho, 0, Math.PI * 2, false );
    ctx.fillStyle = '#007bff';
    ctx.fill();


}
    
atualizar(){
    if(this.x > canvas.width || this.x < 0){
        this.direcaoX = -this.direcaoX;

    }

    if(this.y > canvas.height || this.y < 0){

}
this.X += this.direcaoX;
this.y += this.direcaoY;
this.desenhar();

}

}

function init(){
    particulasArray = [];
    for(let i =0; i< numeroDeParticulas; i++){
        let tamanho = Math.random() * 2 = 1;
        let x = Math.random * (innerWidth - tamanho * 2) + tamanho;
        let y = Math.random * (innerHeight - tamanho * 2) + tamanho;
        let direcaoX = (Math.rando() * 0.4) - 0.2;
        let direcaoY = (Math.random() * 0.4) - 0.2;
        let cor = '#007bff';
        particulasArray, push(new Particula(x, y, direcaoX, direcaoY, tamanho, cor));
    }
}

function conectar(){
    for(let a = 0; a < particulasArray.length; a++){
        for(let  b = a; b < particulasArray.length; b++){
            let distancia = ((particulasArray[a].x - particulasArray[b].x) * ())
            
        