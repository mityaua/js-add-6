// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
  // return users.find(({ email: findEmail }) => findEmail === email);
};
// Пиши код выше этой строки

// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
