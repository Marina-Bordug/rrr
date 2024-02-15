let list = [
    {
        "title": "Маячок",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Маячок</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Что будет, если подключить к земле анод светодиода вместо катода?</p><p class='simple-text'>2. Что будет, если подключить светодиод с резистором большого номинала (например, 10 кОм)?</p><p class='simple-text'>3. Что будет, если подключить светодиод без резистора?</p><p class='simple-text'>4. Зачем нужна встроенная функция pinMode? Какие параметры она принимает?</p><p class='simple-text'>5. Зачем нужна встроенная функция digitalWrite? Какие параметры она принимает?</p><p class='simple-text'>6. С помощью какой встроенной функции можно заставить микроконтроллер ничего не делать?</p><p class='simple-text'>7. В каких единицах задается длительность паузы для этой функции?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Сделайте так, чтобы маячок светился полсекунды, а пауза между вспышками была равна одной секунде</p><p class='simple-text pad-bot'>2. Измените код примера так, чтобы маячок включался на три секунды после запуска устройства, а затем мигал в стандартном режиме</p></aside>"
    },
    {
        "title": "Эксперимент 2. Маячок с нарастающей яркостью",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 2. Маячок с нарастающей яркостью</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Какие из следующих идентификаторов корректны и не вызовут ошибку?</p><p class='simple-text'>13pin</p><p class='simple-text'>MOTOR_1</p><p class='simple-text'>контакт_светодиода</p><p class='simple-text'>sensor value</p><p class='simple-text'>leftServo</p><p class='simple-text'>my-var</p><p class='simple-text'>distance_eval2</p><p class='simple-text'>2. Что произойдет, если создать директиву #define HIGH LOW?</p><p class='simple-text'>3. Почему мы не сможем регулировать яркость светодиода, подключенного к порту 7?</p><p class='simple-text'>4. Какое усреднённое напряжение мы получим на пине 6, если вызовем функцию analogWrite(6, 153)?</p><p class='simple-text'>5. Какое значение параметра value нужно передать функции analogWrite, чтобы получить усреднённое напряжение 2 В?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1.	Отключите питание, отключите светодиод от 9-го порта и подключите к 11-му. Измените программу так, чтобы схема снова заработала</p><p class='simple-text'>2.	Измените код программы так, чтобы в течение секунды на светодиод последовательно подавалось усреднённое напряжение 0, 1, 2, 3, 4, 5 В</p><p class='simple-text pad-bot'>3.	Возьмите еще один светодиод, резистор на 220 Ом и соберите аналогичную схему на этой же макетке, подключив светодиод к пину номер 3 и другому входу GND, измените программу так, чтобы светодиоды мигали в противофазу: первый выключен, второй горит максимально ярко и до противоположного состояния</p></aside>"
    },
    {
        "title": "Эксперимент 3. Светильник с управляемой яркостью",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 3. Светильник с управляемой яркостью</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Можем ли мы при сборке схемы подключить светодиод и потенциометр напрямую к разным входам GND микроконтроллера?</p><p class='simple-text'>2. В какую сторону нужно крутить переменный резистор для увеличения яркости светодиода?</p><p class='simple-text'>3. Что будет, если стереть из программы строчку pinMode(LED_PIN, OUTPUT)? строчку pinMode(POT_PIN, INPUT)?</p><p class='simple-text'>4. Зачем мы делим значение, полученное с аналогового входа перед тем, как задать яркость светодиода? что будет, если этого не сделать?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text pad-bot'>1. Отключите питание платы, подключите к порту 5 еще один светодиод. Измените код таким образом, чтобы второй светодиод светился на 1/8 от яркости первого</p></aside>"
    },
    {
        "title": "Эксперимент 4. Терменвокс",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 4. Терменвокс</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Каким сопротивлением должен обладать фоторезистор, чтобы на аналоговый вход было подано напряжение 1 В?</p><p class='simple-text'>2. Можем ли мы регулировать яркость светодиода, подключенного к 11-му порту, во время звучания пьезопищалки?</p><p class='simple-text'>3. Что изменится в работе терменвокса, если заменить резистор на 10 кОм резистором на 100 кОм? Попробуйте ответить без эксперимента. Затем отключите питание, замените резистор и проверьте.</p><p class='simple-text'>4. Каков будет результат вызова map(30,0,90,90,-90)?</p><p class='simple-text'>5. Как будет работать вызов tone без указания длительности звучания?</p><p class='simple-text'>6. Можно ли устроить полифоническое звучание с помощью функции tone?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1.	Уберите из программы чтение датчика освещенности и пропищите азбукой Морзе позывной SOS: три точки, три тире, три точки</p><p class='simple-text'>2.	Измените код программы так, чтобы с падением освещенности звук становился ниже (например, падал от 5 кГц до 2,5 кГц)</p><p class='simple-text pad-bot'>3.	Измените код программы так, чтобы звук терменвокса раздавался не непрерывно, а 10 раз в секунду с различимыми паузами</p></aside>"
    },
    {
        "title": "Эксперимент 5. Ночной светильник",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 5. Ночной светильник</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Если мы установим фоторезистор между аналоговым входом и землей, наше устройство будет работать наоборот: светодиод будет включаться при увеличении количества света. Почему?</p><p class='simple-text'>2. Какой результат работы устройства мы получим, если свет от светодиода будет падать на фоторезистор?</p><p class='simple-text'>3. Если мы все же установили фоторезистор так, как сказано в предыдущем вопросе, как нам нужно изменить программу, чтобы устройство работало верно?</p><p class='simple-text'>4. Допустим, у нас есть код if (условие) {действие;}. В каких случаях будет выполнено действие?</p><p class='simple-text'>5. При каких значениях y выражение x + y > 0 будет истинным, если x > 0?</p><p class='simple-text'>6. Обязательно ли указывать, какие инструкции выполнять, если условие в операторе if ложно?</p><p class='simple-text'>7. Чем отличается оператор == от оператора =?</p><p class='simple-text'>8. Если мы используем конструкцию if (условие) действие1; else действие2;, может ли быть ситуация, когда ни одно из действий не выполнится? Почему?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Перепишите программу без использования переменной tooDark с сохранением функционала устройства.</p><p class='simple-text'>2. Добавьте в схему еще один светодиод. Дополните программу так, чтобы при падении освещенности ниже порогового значения включался один светодиод, а при падении освещенности ниже половины от порогового значения включались оба светодиода.</p><p class='simple-text pad-bot'>3. Измените схему и программу так, чтобы светодиоды включались по прежнему принципу, но светились тем сильнее, чем меньше света падает на фоторезистор.</p></aside>"
    },
    {
        "title": "Эксперимент 6. Пульсар",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 6. Пульсар</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Почему у светодиодной шкалы на 10 сегментов 20 ножек?</p><p class='simple-text'>2. Зачем в схеме биполярный транзистор?</p><p class='simple-text'>3. За счет чего увеличивается яркость шкалы?</p><p class='simple-text'>4. Почему после достижения значения 255 переменная brightness обнуляется?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Измените программу так, чтобы яркость шкалы росла только до половины от максимальной.</p><p class='simple-text'>2. Измените программу так, чтобы шкала становилась максимально яркой в три раза быстрее, без изменения функции delay.</p><p class='simple-text pad-bot'>3. Измените исходную программу так, чтобы такой же результат был получен без использования операции %, но с применением условного оператора if.</p></aside>"
    },
    {
        "title": "Эксперимент 7. Бегущий огонёк",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 7. Бегущий огонёк</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Почему в данном эксперименте мы подключаем светодиодную шкалу, не используя транзистор?</p><p class='simple-text'>2. Если бы мы включали светодиоды только на портах 5, 6, 7, 8, 9, что нужно было бы изменить в программе?</p><p class='simple-text'>3. С помощью какой другой инструкции можно выполнить действие, эквивалентное ++pin?</p><p class='simple-text'>4. В чем разница между переменными типов int и unsigned int?</p><p class='simple-text'>5. Что возвращает функция millis()?</p><p class='simple-text'>6. Как в данном эксперименте мы вычисляем номер порта, на котором нужно включить светодиод?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Измените код так, чтобы светодиоды переключались раз в секунду.</p><p class='simple-text'>2. Не выключая порты, сделайте так, чтобы огонёк бежал только по средним четырем делениям шкалы.</p><p class='simple-text'>3. Переделайте программу так, чтобы вместо int pin = FIRST_LED_PIN + (ms / 120) % 10 перемещением огонька управлял цикл for</p><p class='simple-text dap-bot'>4. Не меняя местами провода, измените программу так, чтобы огонёк бегал в обратном направлении.</p></aside>"
    },
    {
        "title": "Эксперимент 8. Мерзкое пианино",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 8. Мерзкое пианино</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Почему мы не настраивали порты, к которым подключены кнопки, как INPUT, но устройство работает?</p><p class='simple-text'>2. Каким образом мы избежали написания отдельного когда для чтения каждой кнопки?</p><p class='simple-text'>3. Почему разные «ноты», издаваемые пищалкой, звучат с разной громкостью?</p><p class='simple-text'>4. Для чего мы использовали оператор логического отрицания !?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Сделайте так, чтобы наше пианино звучало в диапазоне от 2 кГц до 5 кГц.</p><p class='simple-text'>2. Добавьте еще 2 кнопки и измените программу так, чтобы можно было извлечь 5 различных нот.</p><p class='simple-text dap-bot'>3. Подключите кнопки по схеме со стягивающим резистором и измените программу так, чтобы она продолжала работать.</p></aside>"
    },
    {
        "title": "Эксперимент 9. Миксер",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 9. Миксер</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Зачем в схеме использован диод?</p><p class='simple-text'>2. Почему мы использовали полевой MOSFET-транзистор, а не биполярный?</p><p class='simple-text'>3. Почему мы не использовали резистор между портом Arduino и затвором транзистора?</p><p class='simple-text'>4. Как работает инструкция continue, использованная в цикле for?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Внесите единственное изменение в программу, после которого максимальной скоростью вращения мотора составит половину от возможной.</p><p class='simple-text'>2. Перепишите программу без использования инструкции continue.</p><p class='simple-text pad-bot'>3. Добавьте в схему еще одну кнопку, чтобы у миксера стало три режима. Понадобилось ли изменять что-либо в программе?</p></aside>"
    },
    {
        "title": "Эксперимент 10. Кнопочный переключатель",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 10. Кнопочный переключатель</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. В каком случае оператор && возвращает значение «истина»?</p><p class='simple-text'>2. Что такое «дребезг»?</p><p class='simple-text'>3. Как мы с ним боремся в программе?</p><p class='simple-text'>4. Как можно избежать явного указания значения уровня напряжения при вызове digitalWrite?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Измените код так, чтобы светодиод переключался только после отпускания кнопки.</p><p class='simple-text pad-bot'>2. Добавьте в схему еще одну кнопку и доработайте код, чтобы светодиод зажигался только при нажатии обеих кнопок.</p></aside>"
    },
    {
        "title": "Эксперимент 11. Светильник с кнопочным управлением",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 11. Светильник с кнопочным управлением</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Что необходимо для определения собственной функции?</p><p class='simple-text'>2. Что означает ключевое слово void?</p><p class='simple-text'>3. Как ведет себя программа при упоминании одной переменной с разных сторон от оператора присваивания =?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Доработайте код таким образом, чтобы шаг изменения яркости настраивался в одном месте.</p><p class='simple-text pad-bot'>2. Создайте еще одну функцию и переделайте код так, чтобы одна функция отвечала за отслеживание нажатий, а другая — за вычисление яркости светодиода и возвращала его в analogWrite.</p></aside>"
    },
    {
        "title": "Эксперимент 12. Кнопочные ковбои",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 12. Кнопочные ковбои</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Можно ли поместить в один массив элементы типа boolean и int?</p><p class='simple-text'>2. Обязательно ли при объявлении массива заполнять его значениями?</p><p class='simple-text'>3. Чем удобно использование массива?</p><p class='simple-text'>4. Как обратиться к элементу массива, чтобы прочитать его значение?</p><p class='simple-text'>5. Чем отличаются инструкции continue и break?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Сделайте напряженный вариант игры: пусть интервал между сигналами будет в диапазоне от 10 до 15 секунд. </p><p class='simple-text'>2. В игре есть лазейка: кнопку можно зажать до сигнала «пли!» и таким образом сразу же выиграть. Дополните программу так, чтобы так выиграть было нельзя.</p><p class='simple-text pad-bot'>3. Добавьте в игру еще двух ковбоев!</p></aside>"
    },
    {
        "title": "Эксперимент 13. Секундомер",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 13. Секундомер</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. К которой ножке нашего семисегментного индикатора нужно подключать землю?</p><p class='simple-text'>2. Как мы храним закодированные символы цифр?</p><p class='simple-text'>3. Каким образом мы выводим символ на индикатор?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Измените код, чтобы индикатор отсчитывал десятые секунды.</p><p class='simple-text'>2. Поменяйте программу так, чтобы вместо символа «0» отображался символ «А».</p><p class='simple-text pad-bot'>3. Дополните схему и программу таким образом, чтобы сегмент-точка включался при прохождении четных чисел и выключался на нечетных</p></aside>"
    },
    {
        "title": "Эксперимент 14. Счётчик нажатий",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 14. Счётчик нажатий</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Для чего нужны микросхемы? Для чего нужен выходной сдвиговый регистр?</p><p class='simple-text'>2. Как найти ножку микросхемы, на которую отправляются данные?</p><p class='simple-text'>3. Что нужно сделать до и после отправки собственно данных на 74HC595?</p><p class='simple-text'>4. Сколько данных можно передать с помощью shiftOut() и как управлять порядком их передачи?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Заставьте shiftOut() отправлять биты, начиная со старшего, и измените код так, чтобы счетчик по-прежнему показывал арабские цифры.</p><p class='simple-text pad-bot'>2. Замените кнопку на датчик света (фоторезистор в схеме делителя напряжения) и переделайте программу так, чтобы индикатор цифрой показывал уровень освещенности.</p></aside>"
    },
    {
        "title": "Эксперимент 15. Комнатный термометр",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 15. Комнатный термометр</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Как нужно подключить термистор, чтобы получать на Arduino данные о температуре?</p><p class='simple-text'>2. Каким образом можно воспользоваться ранее разработанными функциями, не переписывая их в программный код?</p><p class='simple-text'>3. Чем неудобно использование чисел с плавающей точкой на Arduino?</p><p class='simple-text'>4. Что за выражение стоит справа от = при объявлении булевой переменной enableSegment?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Измените код программы таким образом, чтобы индикатор включался при 0 градусов и его показания прирастали на одно деление каждые 5 градусов.</p><p class='simple-text pad-bot'>2. Добавьте в схему пьезопищалку и доработайте программу так, чтобы срабатывала звуковая сигнализация при достижении температуры, например, 25 градусов.</p></aside>"
    },
    {
        "title": "Эксперимент 16. Метеостанция",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 16. Метеостанция</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Какие действия нужно предпринять, чтобы читать на компьютере данные с Arduino?</p><p class='simple-text'>2. О каких ограничениях не следует забывать при работе с последовательным портом?</p><p class='simple-text'>3. Как избежать ошибки в передаче данных, содержащих обратный слэш (\)?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Перед таблицей данных о температуре добавьте заголовок (например, 'Meteostation').</p><p class='simple-text pad-bot'>2. Добавьте столбец, содержащий количество секунд, прошедших с момента запуска микроконтроллера. Можно уменьшить интервал передачи данных.</p></aside>"
    },
    {
        "title": "Эксперимент 17. Пантограф",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 17. Пантограф</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Зачем нужен конденсатор при включении в схему сервопривода?</p><p class='simple-text'>2. Каким образом библиотека <Servo.h> позволяет нам работать с сервоприводом?</p><p class='simple-text'>3. Зачем мы ограничиваем область допустимых значений для angle?</p><p class='simple-text'>4. Как быть уверенным в том, что в переменную типа int после вычислений попадет корректное значение?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Измените программу так, чтобы по мере поворота ручки потенциометра, сервопривод последовательно занимал 8 положений: 45, 135, 87, 0, 65, 90, 180, 150°.</p><p class='simple-text pad-bot'>2. Предположим, что сервопривод управляет шторкой, и нам нужно поддерживать постоянное количество света в помещении. Создайте такой механизм.</p></aside>"
    },
    {
        "title": "Эксперимент 18. Тестер батареек",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 18. Тестер батареек</h1><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>Возможно, вы захотите воспользоваться еще одним методом вашего объекта lcd — clear(): он очищает экран и устанавливает курсор в левую колонку верхней строчки.</p><p class='simple-text'>1. Создайте секундомер, который будет отсчитывать время, прошедшее с начала работы Arduino и выводить секунды и сотые секунд на экран.</p><p class='simple-text'>2. Совместите отсчет времени и измерение напряжения. Отобразите все данные на дисплее. Отправляйте их раз в 10 секунд на компьютер.</p><p class='simple-text pad-bot'>Теперь вы можете выводить без компьютера и проводов любые данные, с которыми работаете, и использовать это как в режиме эксплуатации вашего устройства, так и во время отладки!</p></aside>"
    },
    {
        "title": "Эксперимент 19. Светильник, управляемый по USB",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 19. Светильник, управляемый по USB</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Какие объекты позволяют легко манипулировать текстовыми данными?</p><p class='simple-text'>2. Что возвращают методы Serial.available() и Serial.read()?</p><p class='simple-text'>3. Чем отличаются конструкции for и while? </p><p class='simple-text'>4. Каким образом можно организовать более сложное ветвление, чем if … else?</p><p class='simple-text'>5. Как можно объединить текстовые строки?</p><p class='simple-text'>6. Как можно привести текстовую строку, содержащую цифры, к числовому типу?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text'>1. Проверьте, попадает ли переданное число в диапазон значений, которые нужно передавать в analogWrite(). Передайте на компьютер сообщение об ошибке, если нет.</p><p class='simple-text'>2. Переделайте программу так, чтобы устройство распознавало текстовые команды, например, «on» и «off», и соответственно включало и выключало светодиод.</p><p class='simple-text pad-bot'>Вам может пригодиться один из методов String: toLowerCase(yourString) или toUpperCase(yourString), которые возвращают переданную строку yourString, приведенную к нижнему или верхнему регистру соответственно.</p></aside>"
    },
    {
        "title": "Эксперимент 20. Перетягивание каната",
        "text": "<aside class='teory' id='scrollbar2'><h1 class='h1-another'>Эксперимент 20. Перетягивание каната</h1><h1 class='small-topic-2'>Вопросы для проверки себя</h1><p class='simple-text'>1. Каким образом мы подавляем дребезг аппаратно?</p><p class='simple-text'>2. Для чего используются прерывания?</p><p class='simple-text'>3. Каким образом можно включить обработку внешних прерываний?</p><p class='simple-text'>4. О каких нюансах работы с уже известными нам вещами следует помнить при работе с прерываниями?</p><p class='simple-text'>5. Как выбрать максимальное из двух значений? Минимальное?</p><p class='simple-text'>6. Как получить абсолютное значение переменной? Чего следует избегать при использовании этой функции?</p><p class='simple-text'>7. Когда оператор логическое «или» возвращает «ложь»?</p><h1 class='small-topic-2'>Задания для самостоятельного решения</h1><p class='simple-text pad-bot'>1. Вместо светодиодной шкалы подключите сервопривод и измените код таким образом, чтобы перетягивание демонстрировалось путем отклонения сервопривода от среднего положения.</p></aside>"
    },
]