export default [
    {
        tip: 'Проверка адреса электронной почты',
        validator: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        placeholder: 'sample@email.com',
        title: 'Электропочта',
        group: 'email'
    },
    {
        tip: 'Варианты: http | https | ftp | file',
        validator: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        placeholder: 'https://sample.com',
        title: 'URL с протоколом',
        group: 'url'
    },
    {
        tip: 'Номер мобильного в международном формате (Россия)',
        validator: /^((\+7|7|8)+([0-9]){10})$|\b\d{3}[-.]?\d{3}[-.]?\d{4}/,
        placeholder: '+79212487784',
        title: 'Мобильник',
        group: 'other'
    },
    {
        tip: 'Время в 24-часовом формате',
        validator: /([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?/g,
        placeholder: '23.00',
        title: 'time'
    },

]