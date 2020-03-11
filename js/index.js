window.addEventListener("load", function () {
    let startBtn = document.getElementById("start");

    let budgetValue = document.getElementsByClassName('budget-value')[0];
    let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
    let levelValue = document.getElementsByClassName('level-value')[0];
    let exspensesValue = document.getElementsByClassName('expenses-value')[0];
    let optionalExspensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
    let incomeValue = document.getElementsByClassName('income-value')[0];
    let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
    let yearsSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

    let expensesItem = document.getElementsByClassName('expenses-item');

    let optionalexpensesBtn = document.getElementsByClassName('optionalexpenses-btn');

    var exspensesBtn = document.getElementsByTagName('button')[0];

    var optionalExpensesBtn = document.getElementsByTagName("button")[1];
    var countBtn = document.getElementsByTagName("button")[2];

    let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

    let incomeItem = document.querySelector('.choose-income');
    let checkSvings = document.querySelector('#savings');
    let sumValue = document.querySelector('.choose-sum')
    let percentValue = document.querySelector('.choose-percent');
    let yearValue = document.querySelector('.year-value');
    let monthValue = document.querySelector('.month-value');
    let dayValue = document.querySelector('.day-value');

    let money, date;

    function start() {}
    start();

    startBtn.addEventListener('click', function () {
        debugger
        date = prompt('Введите дату в формате YYYY-MM-DD', "");
        money = +prompt("Ваш бюджет на месяц?", '');

        while (isNaN(money) || money == "" || money == null) {
            money = prompt("Ваш бюджет на месяц?", '');
        }
        appDate.budget = money;
        appDate.date = date;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(date)).getFullYear();
        monthValue.value = new Date(Date.parse(date)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(date)).getDay();
    });

    exspensesBtn.addEventListener('click', function () {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let questionOne = expensesItem[i].value;
            let questionTwo = expensesItem[++i].value;


            if ((typeof (questionOne) == 'string') && (typeof (questionOne)) != null && (typeof (questionTwo)) != null &&
                questionOne != "" && questionTwo != "" && questionOne.length < 50) {
                console.log("done");
                appDate.expenses[questionOne] = questionTwo;
                sum += +questionTwo;

            } else {
                i = i - 1;
            }
        }
        exspensesValue.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click', function () {
        for (let i = 1; i < optionalExpensesItem.length; i++) {
            let quest = optionalExpensesItem[i].value;
            appDate.optionalExpenses[i] = quest;
            optionalExspensesValue.textContent = appDate.optionalExpenses[i] + ' ';

        }
    });

    countBtn.addEventListener('click', function () {

        if (appDate.budget != undefined) {
            appDate.MoneyPerDay = (appDate.budget / 30).toFixed();
            daybudgetValue.textContent = appDate.MoneyPerDay;

            if (appDate.MoneyPerDay < 100) {
                levelValue.textContent = "Минимальный бюджет";

            } else if (appDate.MoneyPerDay > 100 && appDate.MoneyPerDay < 2000) {
                levelValue.textContent = 'Средний уровень достатка';

            } else if (appDate.MoneyPerDay > 2000) {
                levelValue.textContent = 'Высокий уровень достатка';
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
        } else {
            daybudgetValue.textContent = "Произошла ошибка";
        }

    });

    incomeItem.addEventListener('input', function () {
        let items = incomeItem.value;
        appDate.income = items.split(",");
        incomeValue.textContent = appDate.income;
    });

    checkSvings.addEventListener('click', function () {
        if (appDate.savings == true) {
            appDate.savings = false;
        } else {
            appDate.savings = true;
        }
    });

    sumValue.addEventListener('input', function () {
        if (appDate.savings == true) {
            let save = +sumValue.value,
                percent = percentValue.value;

            appDate.monthIncome = save / 100 / 12 * percent;
            appDate.yearIncome = save / 100 * percent;
            monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
            yearsSavingsValue.textContent = appDate.yearIncome.toFixed(1);

        }
    });

    percentValue.addEventListener('input', function () {
        if (appDate.savings == true) {
            let save = +sumValue.value,
                percent = percentValue.value;

            appDate.monthIncome = save / 100 / 12 * percent;
            appDate.yearIncome = save / 100 * percent;
            monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
            yearsSavingsValue.textContent = appDate.yearIncome.toFixed(1);
        }
    });

    let appDate = {
        budget: money,
        date: date,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        ChooseExpenses: function () {},
        detectDayBudget: function () {},
        etectLevel: function () {},
        checkSavings: function () {},
        chooseOptExpenses: function () {},
        chooseIncome: function () {}

    };
});