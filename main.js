                        //1. Функция для нахождения минимального числа
function findMinimum(num1, num2) {
    const minimum = Math.min(num1, num2);
    console.log(minimum);
}
findMinimum(9, 7);

                        //2. Функция для определения длины строки
function getStringLength() {
    const userInput = prompt("Введите строку:");
    console.log(userInput.length);
}
getStringLength();

                       //3 Простой калькулятор
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
            case '-':
                result = num1 - num2;
                break;
                case '*':
                    result = num1 * num2;
                    break;
                    case '/':
                        if (num2 === 0) {
                            console.log("Ошибка: деление на ноль невозможно.");
                            return;
                        }
                        result = num1 / num2;
                        break;
                        default:
                            console.log("Ошибка: неверный оператор.");
                            return;
                            }
                            console.log(result);
                        }
                        calculator(173, 27, '+');

