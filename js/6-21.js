// Пиши код ниже этой строки
const getFriends = users => {
  return users
    .flatMap(({ friends }) => friends)
    .filter((friends, index, array) => array.indexOf(friends) === index);
};

// Пиши код выше этой строки

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).
// У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
