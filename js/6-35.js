const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort(
  (yearA, yearB) => yearA - yearB,
);

const descendingReleaseDates = [...releaseDates].sort(
  (yearA, yearB) => yearB - yearA,
);

console.log(ascendingReleaseDates);
console.log(descendingReleaseDates);

// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию.
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
