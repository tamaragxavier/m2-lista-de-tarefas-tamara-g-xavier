const tasks = [
  { title: "Comprar comida para o gato", type: "urgente" },
  { title: "Consertar Computador", type: "importante" },
  { title: "Beber água", type: "normal" },
  { title: "Enviar relatório trimestral", type: "importante" },
  { title: "Fazer exercícios físicos", type: "normal" },
  { title: "Agendar consulta médica", type: "urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "normal" },
  { title: "Limpar a despensa", type: "importante" },
  { title: "Pagar a conta de energia", type: "urgente" },
  { title: "Assistir a um documentário interessante", type: "normal" },
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

  if (task.type === "urgente") {
    listItemSpan.classList.add("span-urgent");
  } else if (task.type === "importante") {
    listItemSpan.classList.add("span-important");
  } else if (task.type === "normal") {
    listItemSpan.classList.add("span-normal");
  }

  const listItemParagraph = document.createElement("p");
  listItemParagraph.innerText = task.title;

  const listItemButton = document.createElement("button");
  listItemButton.classList.add("task__button--remove-task");

  listItemButton.addEventListener("click", function () {
    removeTask(task); // Chama a função de remoção passando a tarefa
  });

  listItemDiv.appendChild(listItemSpan);
  listItemDiv.appendChild(listItemParagraph);
  listItem.appendChild(listItemDiv);
  listItem.appendChild(listItemButton);

  return listItem;
}

function removeTask(taskToRemove) {
  const taskIdentifier = taskToRemove.title + taskToRemove.type;

  const taskIdentifiers = tasks.map(function (task) {
    return task.title + task.type;
  });

  const taskIndex = taskIdentifiers.indexOf(taskIdentifier);

  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    renderElements(tasks);
  }
}

function addTask(event) {
  event.preventDefault();

  const titleInput = document.getElementById("input_title");
  const prioritySelect = document.querySelector(".form__input--priority");

  const title = titleInput.value.trim();
  const type = prioritySelect.value.trim();

  if (title && type) {
    const newTask = { title, type };

    tasks.push(newTask);

    renderElements(tasks);

    titleInput.value = "";
    prioritySelect.value = "";
  }
}

const addButton = document.querySelector(".form__button--add-task");
addButton.addEventListener("click", addTask);

renderElements(tasks);
