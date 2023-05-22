// Отримуємо посилання на елементи
var consultationButton = document.getElementById("consultation-button");
var orderButton = document.getElementById("order-button");
var consultationModal = document.getElementById("consultation-modal");
var orderModal = document.getElementById("order-modal");
var closeButtons = document.getElementsByClassName("close");
var consultationForm = document.getElementById("consultation-form");
var orderForm = document.getElementById("order-form");
var cancelButton = document.getElementById("cancel-button");

// Функція, яка відкриває модальне вікно
function openModal(modal) {
  modal.style.display = "block";
}

// Функція, яка закриває модальне вікно
function closeModal(modal) {
  modal.style.display = "none";
}

// Додаємо обробник події для кнопки "Отримати консультацію"
consultationButton.addEventListener("click", function () {
  openModal(consultationModal);
});

// Додаємо обробник події для кнопки "Оформити замовлення"
orderButton.addEventListener("click", function () {
  openModal(orderModal);
});

// Додаємо обробник події для кнопок "Закрити"
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    closeModal(this.closest(".modal"));
  });
}

// Обробка подання форми консультації
consultationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  // Отримуємо значення полів форми
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  // Виконуємо додаткові дії з отриманими даними (наприклад, відправляємо на сервер)

  // Закриваємо модальне вікно
closeModal(consultationModal);
});

// Обробка подання форми замовлення
orderForm.addEventListener("submit", function (event) {
event.preventDefault(); // Зупиняємо стандартну поведінку форми

// Отримуємо значення полів форми
var sourceLanguage = document.getElementById("source-language").value;
var targetLanguage = document.getElementById("target-language").value;
var documentType = document.getElementById("document-type").value;
var file = document.getElementById("file").files[0];

// Виконуємо додаткові дії з отриманими даними (наприклад, відправляємо на сервер)

// Закриваємо модальне вікно
closeModal(orderModal);
});

// Обробка натискання кнопки "Скасувати" в формі замовлення
cancelButton.addEventListener("click", function () {
closeModal(orderModal);
});
