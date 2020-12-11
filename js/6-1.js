function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(element => {
    totalPrice += element;
  });

  // Пиши код выше этой строки
  return console.log(totalPrice);
}

calculateTotalPrice([12, 85, 37, 4]); // возвращает 138.
calculateTotalPrice([164, 48, 291]); // возвращает 503.
calculateTotalPrice([412, 371, 94, 63, 176]); // возвращает 1116.

// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
