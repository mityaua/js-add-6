// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(({ age }) => age > minAge && age < maxAge);
};
// Пиши код выше этой строки

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
