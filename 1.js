const inputUser = Number.parseInt(prompt('Введите температуру в градусах Цельсия: '));
alert(`Цельсия: ${inputUser}\nФаренгейт: ${Math.round((9 / 5) * inputUser + 32)}`);