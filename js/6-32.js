// Пиши код ниже этой строки
const calculateTotalBalance = users => {
  return users.reduce((acc, { balance }) => (acc += balance), 0);
};
// Пиши код выше этой строки

// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
