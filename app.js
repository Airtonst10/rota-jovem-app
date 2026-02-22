function generateResponse(text) {
  const lower = text.toLowerCase();

  if (lower.includes("disciplina")) {
    return "Disciplina nasce de rotina. Comece com 20 minutos por dia.";
  }

  if (lower.includes("dinheiro")) {
    return "Guarde pelo menos 10% do que você ganha.";
  }

  if (lower.includes("carreira")) {
    return "Desenvolva habilidades digitais e vendas.";
  }

  return "Defina metas claras e avance todos os dias.";
}

function askAI() {
  const question = document.getElementById("question").value;
  const responseDiv = document.getElementById("response");

  if (!question) return;

  const reply = generateResponse(question);
  responseDiv.innerText = reply;
}
