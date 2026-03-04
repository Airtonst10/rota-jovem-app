let xp = localStorage.getItem("xp") ? parseInt(localStorage.getItem("xp")) : 0;

function updateUI() {
  document.getElementById("xp").innerText = xp;

  let level = Math.floor(xp / 100) + 1;
  document.getElementById("level").innerText = level;

  let progressPercent = xp % 100;
  document.getElementById("progress").style.width = progressPercent + "%";

  localStorage.setItem("xp", xp);
}

function completeMission(points) {
  xp += points;
  updateUI();
}

function askAI() {
  const question = document.getElementById("question").value.toLowerCase();
  const response = document.getElementById("response");

  if (question.includes("planejamento")) {
    response.innerText = "1️⃣ Defina 3 metas principais.\n2️⃣ Divida em tarefas menores.\n3️⃣ Organize por prioridade.";
  } 
  else if (question.includes("orçamento")) {
    response.innerText = "1️⃣ Liste sua renda.\n2️⃣ Liste gastos fixos.\n3️⃣ Defina limite para gastos variáveis.";
  } 
  else if (question.includes("currículo")) {
    response.innerText = "1️⃣ Destaque resultados.\n2️⃣ Use palavras de ação.\n3️⃣ Inclua experiências práticas.";
  } 
  else {
    response.innerText = "Seja específico na sua dúvida para que eu possa ajudar melhor.";
  }
}
function updateUI() {
  document.getElementById("xp").innerText = xp;
  document.getElementById("level").innerText = level;
  document.getElementById("progress").style.width = xp + "%";
}
