const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks) {
  const tasksList = document.querySelector("ul");

  tasksList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskItem = createTaskItem(task);

    tasksList.appendChild(taskItem);
  }
}

function createTaskItem(task) {
  const listItem = document.createElement("li");
  listItem.classList.add("task__item");

  const listItemDiv = document.createElement("div");
  listItemDiv.classList.add("task-info__container");

  const listItemSpan = document.createElement("span");
  listItemSpan.classList.add("task-type");

  if (task.type === "Urgente") {
    listItemSpan.classList.add("span-urgent");
  } else if (task.type === "Importante") {
    listItemSpan.classList.add("span-important");
  } else if (task.type === "Normal") {
    listItemSpan.classList.add("span-normal");
  }

  const listItemParagraph = document.createElement("p");
  listItemParagraph.innerText = task.title;

  const listItemButton = document.createElement("button");
  listItemButton.classList.add("task__button--remove-task");

  listItemDiv.appendChild(listItemSpan);
  listItemDiv.appendChild(listItemParagraph);
  listItem.appendChild(listItemDiv);
  listItem.appendChild(listItemButton);

  return listItem;
}

renderElements(tasks);