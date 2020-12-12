// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  return users.reduce((acc, { friends }) => (acc += friends.length), 0);
};
// Пиши код выше этой строки

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
