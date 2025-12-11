// Инициализация Telegram Web App
Telegram.WebApp.ready();
Telegram.WebApp.expand();

// Приветствие по имени
const user = Telegram.WebApp.initDataUnsafe.user;
const greeting = document.getElementById('greeting');
if (user) {
  greeting.textContent = Привет, ${user.first_name};
}

// Работа со списком элементов
const list = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
let items = JSON.parse(localStorage.getItem('inventbar_items')) || [];

function renderItems() {
  list.innerHTML = '';
  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = <strong>${item.title}</strong><p>${item.content}</p><small>№${i+1}</small>;
    list.appendChild(div);
  });
}

addBtn.onclick = () => {
  const title = prompt('Название:');
  if (!title) return;
  const content = prompt('Описание:');
  items.push({ title, content });
  localStorage.setItem('inventbar_items', JSON.stringify(items));
  renderItems();
};

// Показываем элементы при загрузке
renderItems();