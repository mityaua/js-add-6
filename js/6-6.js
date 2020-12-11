// Пиши код ниже этой строки
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => (totalPrice += item));

  return totalPrice;
};
// Пиши код выше этой строки

calculateTotalPrice([12, 85, 37, 4]); // возвращает 138.
calculateTotalPrice([164, 48, 291]); // возвращает 503.
calculateTotalPrice([412, 371, 94, 63, 176]); // возвращает 1116.

// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.
// Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.
