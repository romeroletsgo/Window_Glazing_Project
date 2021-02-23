const modals = () => {
    function bindModal(triger, modal, close) {
        triger.addEventListener('click', (event) => {
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

        close.addEventListener('click', () => {
            //Убираем дисплей
            modal.style.display = "none";
            //Возвращаем стандартное значение
            document.body.style.overflow = "";
        });
    }

    //Триггер, по которому будет тыкать пользователь
    const callEngineerBtn = document.querySelector('.popup_engineer_btn');
    
    //Модальное окно, которое будет показываться
    const modalEngineer = document.querySelector('.popup_engineer');

    //Крестик внутри модального окна, нажимая на который, модальное окно будет закрываться | Прописываем чётко, что внутри модального окна, есть этот крестик
    const modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    //Запускаем нашу функцию и говорим ей, что будем использовать 3 аргумента
    bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);

};

export default modals;