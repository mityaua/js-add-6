// Пиши код ниже этой строки
const getInactiveUsers = users => {
  return users.filter(({ isActive }) => isActive === false);
  // return users.filter(({ isActive }) => !isActive);
};
// Пиши код выше этой строки

// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
