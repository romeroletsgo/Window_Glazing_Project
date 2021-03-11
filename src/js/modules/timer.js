//id - Какой элемент будем рендерить
//deadline - до какого времени будет идти таймер

const timer = (id, deadline) => {

    //Функция добавляющая ноль к числу
    //Когда пытаемся записать какое-то значение внутрь блока, сначала пропускаем через эту функцию
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    //Функция принимает получает deadline и выдаёт время которое осталось до конца акции
    const getTimeRemaining = (endtime) => {

        //Время в JS исчесляется в миллисекундах
        //Получаем разницу между временем endtime и временем, которое сейчас
        const time = Date.parse(endtime) - Date.parse(new Date());
        //Переводим кол-во миллисекунд в секунды и округляем число
        const seconds = Math.floor((time / 1000) % 60);
        //Вычисляем кол-во минут
        const minutes = Math.floor((time / 1000 / 60) % 60);
        //Вычисляем кол-во часов
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        //Вычисляем кол-во дней
        const days = Math.floor((time / (1000 * 60 * 60 * 24)));

        //Возращаем ранее высчитанные значения в виде объекта
        return {
            //Здесь содержится всё время
            'total': time,
            //Кол-во дней
            'days': days,
            //Кол-во часов
            'hours': hours,
            //Кол-во минут
            'minutes': minutes,
            //Кол-во секунд
            'seconds': seconds
        };
    };

    //Функция отвечающая за то, что определенное значение 
    //помещаем в определенные элементы у нас на странице
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector);
        const days = timer.querySelector("#days");
        const hours = timer.querySelector("#hours");
        const minutes = timer.querySelector("#minutes");
        const seconds = timer.querySelector("#seconds");
        const timeInterval = setInterval(updateClock, 1000);

        //Вызываем функцию вручную, ещё до того как она запустится при помощи setInterval
        updateClock();

        //Определяем сколько времени осталось до deadline
        function updateClock() {
            //Возвращаем объект со всеми данными
            const time = getTimeRemaining(endtime);

            //Запиливаем значение в блок на экране
            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            //Устанавливаем значение в нули, останавливаем таймер
            if (time.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                //Останавливаем наш интервал
                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;