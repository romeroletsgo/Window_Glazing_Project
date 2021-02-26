const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = "none";
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = "block";
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    //Вешаем обработчик события на общую область, которая соединяет в себе все табы
    header.addEventListener('click', (event) => {
        const target = event.target;
        if (target &&
            //Проверяем, что кликнули на один из табов
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            //Когда удостоверились, что кликнули таб, начинаем перебирать один за другим
            //Запоминаем таб и номер по порядку
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;