let temperatureC = +prompt("Введите температуру в градусах Цельсия");
let temperatureF = Math.trunc(((9 / 5) * temperatureC + 32) * 100) / 100;
alert(`${temperatureC} градусов(а) Цельсия после переводу в Фаренгейты составляет ${temperatureF} `);
