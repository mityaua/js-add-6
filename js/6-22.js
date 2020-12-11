// Пиши код ниже этой строки
const getActiveUsers = users => {
  return users.filter(({ isActive }) => isActive === true);
  // return users.filter(({ isActive }) => isActive);
};
// Пиши код выше этой строки

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
