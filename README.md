# HW5Blockchain
Homework #5 of smart-contracts development course

## Контрольные вопросы

### Почему на этапе разработки используется локальная EVM, а не рабочая?
Использование локальной EVM упрощает работу с дебагом контракта и позволяет легко изменять детали проекта, что не так просто происходит в блокчейне, поскольку смарт-контракты являются неизменяемыми, и для изменения логики контракта необходимо использовать обходные пути, например, прокси-контракты.
Например, Hardhat позволяет увидеть пути ошибок, вывод консоли и напрямую показывает сообщения ошибок, когда транзакции ломаются.


### Как передать eth при вызовах call и delegatecall?

Необходимо добавить к вызову функции параметры, содержащиеся в {}, специфицировав их с помощью атрибутов, например value. Функция обязательно должна быть payable.
Например: address.call{value: 1 ether, gas:2300}(abi.encodeWithSignature("signature", params)).
