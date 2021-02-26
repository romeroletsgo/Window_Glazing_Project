const forms = () => {
    //Получаем элементы,которые нам понадобятся
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    //Создаём объект сообщения, которые будут показываться пользователю
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    //Функция отвечающая за отправку запроса
    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = message.loading;
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    //Функция по очищению всех инпутов
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    //Перебираем все формы, навешиваем обработчик событий submit
    form.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();

            //Создаём блок, в котором показываем, что что-то пошло не так, либо запрос отправился
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            //Помещаем блок в конец формы
            item.appendChild(statusMessage);

            //Собираем все введенные данные из нашей формы
            const formData = new FormData(item);

            //Отправляем запрос на сервер по адресу с данными, которые получил formData
            postData('assets/server.php', formData)
                .then(result => {
                    console.log(result);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;