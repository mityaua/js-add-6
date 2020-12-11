// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName));
};
// Пиши код выше этой строки

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
