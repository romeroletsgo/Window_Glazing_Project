const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        //Триггер на несколько одинаковых элементов, с одинаковым селектором повесить одни и те же функции
        const trigger = document.querySelectorAll(triggerSelector);

        //Модальное окно, которое будет показываться
        const modal = document.querySelector(modalSelector);

        //Крестик внутри модального окна, нажимая на который, модальное окно будет закрываться 
        const close = document.querySelector(closeSelector);

        //item - каждый триггер, на который будем вешать обработчик событий
        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                //Проверяем на существование объекта Event
                if (event.target) {
                    //если событие не обрабатывается явно, его действие по умолчанию не должно выполняться
                    event.preventDefault();
                }

                //Делаем модальное окно блочным элементом
                modal.style.display = "block";
                //Когда модальное окно открыто, можем листать только модальное окно
                //Если занимает больше нашего экрана по высоте, если нет, страница замораживается
                document.body.style.overflow = "hidden";
            });
        });

        close.addEventListener('click', () => {
            //Убираем дисплей
            modal.style.display = "none";
            //Возвращаем стандартное значение
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', () => {
            //Кликая вне модального окна, окно закрывается
            if (event.target === modal) {
                //Убираем дисплей
                modal.style.display = "none";
                //Возвращаем стандартное значение
                document.body.style.overflow = "";
            }
        });
    }

    //Модальное окно,появляющееся каждые 60 сек
    function showModelByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = "block";
            //Когда модальное окно открыто, можем листать только модальное окно
            //Eсли занимает больше нашего экрана по высоте, если нет, страница замораживается
            document.body.style.overflow = "hidden";
        }, time);
    }

    //Передаём селекторы 
    // Триггер | Модальное окно | Кнопка закрытия модального окна
    //Вызвать замерщика
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    //Заказать звонок
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    //Рассчитать стоимость
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    //Модальное окно,появляющееся каждые 60 сек
    showModelByTime('.popup', 60000);

};

export default modals;