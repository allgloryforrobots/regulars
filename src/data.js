export default [
    {
        tip: 'Проверка адреса электронной почты',
        validator: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        placeholder: 'sample@email.com',
        title: 'Электропочта',
        group: 'email'
    },
    {
        tip: 'Адрес URL с протоколом http',
        validator: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        placeholder: 'https://sample.com',
        title: 'URL с протоколом'
    },

]