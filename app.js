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
    response.innerText = "Planejamento Estratégico: defina visão. Tático: metas mensais. Operacional: tarefas diárias.";
  } else if (question.includes("financeiro")) {
    response.innerText = "Comece anotando gastos, crie reserva de emergência e defina meta de investimento.";
  } else if (question.includes("currículo")) {
    response.innerText = "Currículo: dados pessoais, objetivo claro, experiência, habilidades e formação.";
  } else {
    response.innerText = "Defina metas claras e divida em pequenas ações diárias.";
  }
}

updateUI();

let xp = localStorage.getItem("xp") ? parseInt(localStorage.getItem("xp")) : 0;
let level = localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 1;

updateUI();

function completeMission(amount) {
  xp += amount;

  if (xp >= 100) {
    xp = xp - 100;
    level++;
  }

  localStorage.setItem("xp", xp);
  localStorage.setItem("level", level);

  updateUI();
}

function updateUI() {
  document.getElementById("xp").innerText = xp;
  document.getElementById("level").innerText = level;
  document.getElementById("progress").style.width = xp + "%";
}
