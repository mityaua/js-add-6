// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return console.log(filteredNumbers);
};

filterArray([1, 2, 3, 4, 5], 3); // возвращает [4, 5].
filterArray([1, 2, 3, 4, 5], 4); // возвращает [5].
filterArray([1, 2, 3, 4, 5], 5); // возвращает [].
filterArray([12, 24, 8, 41, 76], 38); // возвращает [41, 76].
filterArray([12, 24, 8, 41, 76], 20); // возвращает [24, 41, 76].

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
