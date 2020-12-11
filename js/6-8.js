// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return console.log(commonElements);
};

getCommonElements([1, 2, 3], [2, 4]); // возвращает [2].
getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2].
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // возвращает [12, 27, 3].
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // возвращает [10, 30, 40].
getCommonElements([1, 2, 3], [10, 20, 30]); // возвращает [].

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
