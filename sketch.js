let campoOrcamento;
let campoCalor;
let campoFrio;

function setup() {
  createCanvas(600, 400);
  createElement("h2", "Recomendador de lugares para conhecer");
  createSpan("Quanto você pode gastar R$");
  campoOrcamento = createInput("1000");
  campoCalor = createCheckbox("Gosta de Calor?");
  campoFrio = createCheckbox("Gosta de Frio?");
}

function draw() {
  background("white");
  let orcamento = parseFloat(campoOrcamento.value());
  let gostaDeCalor = campoCalor.checked();
  let gostaDeFrio = campoFrio.checked();
  let recomendacao = geraRecomendacao(orcamento, gostaDeCalor, gostaDeFrio);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(20);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(orcamento, gostaDeCalor, gostaDeFrio) {
  if (orcamento >= 50){
    if (orcamento >= 100){
    if (gostaDeCalor) {
      return "Dubai - ótimo para quem gosta de calor e deserto.";
    } else if (gostaDeFrio) {
      return " Groenlândia - ideal para quem gosta de climas frios.";
    } else {
      return "Belém - perfeito para quem gosta de clima tropical.";
    }
   }
  } else 
    if (orcamento >= 400) {
      if (orcamento >= 700){
    if (gostaDeCalor) {
      return "Rio de Janeiro - excelente para quem quer praias e lugares quentes.";
    } else if (gostaDeFrio) {
      return "Campos do Jordão - ideal para ir no outono.";
    } else {
      return "Bali, Indonésia - otimo para quem gosta de ilhas e para o verão."
    }
      }
  } else {
    if (gostaDeCalor) {
      return "Maragogi - conhecida como o Caribe brasileiro.";
    } else {
      if (gostaDeFrio) {
      return "Gramado - cidade otima para turismo.";
    } else {
      return "Caravelas - cidade ideal para passar as férias.";
    }
    }
  }
}