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
                //Когда модальное окно открыто, можем листать только модальное окно, если занимает больше нашего экрана по высоте, если нет, страница замораживается
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

    //Передаём селекторы 
    // Триггер | Модальное окно | Кнопка закрытия модального окна
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');

};

export default modals;