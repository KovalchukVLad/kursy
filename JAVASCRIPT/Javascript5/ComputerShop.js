//////////////////////////////////////////////////////////////////////////
// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
//     Назва.
//     В кожного компютера має бути метод включання.
////////////
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Computers {
    constructor(ram, powerOfProc) {
        this.ram = ram;
        this.powerOfProc = powerOfProc;
        if (powerOfProc > 1000 || powerOfProc < 1000){
            alert('потужність має бути в межах 0 -1000');
            return 0;
        }
    }

    compOn() {
        document.write(`<br>Ваш компютер увівмнуто <br>`);
    }

    baseInfo() {
        document.write(`Компютер успішно зібраний <br> Характеристики: <br>
         Оперативна память: ${this.ram} ГБ<br> Потужність процесора: ${this.powerOfProc}<br>`)
    }

    increasePower(newPower) {

        if (newPower / this.powerOfProc <= 1.1 || newPower < this.powerOfProc) {
            this.powerOfProc = newPower;
            document.write(`Нова потужність компютера : ${this.powerOfProc}<br>`);
        } else {
            alert('Ви намагаєтесь збільшити потужність більше ніж на 10%');
        }
    }

    increaseRam() {
        let boll = confirm('Вм хочете збільшити Оперативну память в двічі?');
        if (boll) {
            this.ram *= 2;
            document.write(`Нова оперативна память компютера : ${this.ram} ГБ<br>`);
        }
    }

}


class Laptops extends Computers {
    constructor(ram, powerOfProc, diagonal) {
        super(ram, powerOfProc);
        this.diagonal = diagonal;
        this.batteryLife = this.powerOfProc / (this.diagonal * this.ram);
    }

    info() {
        document.write(`Діагональ екрану: ${this.diagonal}  дюймів <br> Час роботи батареї: ${Math.round(this.batteryLife)} год <br>`)
    }
}

let dell = new Laptops(8, 800, 13);
dell.compOn();
dell.baseInfo();
dell.info();

// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class Ultrabooks extends Laptops {
    constructor(ram, powerOfProc, diagonal, weight, batteryLife = 0) {
        super(ram, powerOfProc, diagonal, batteryLife);
        ////// this.batteryLife = this.powerOfProc/(this.diagonal*this.ram);
        this.weight = weight;
        if (this.weight > 2 || this.batteryLife < 4) {
            alert('ПОМИЛКА!!!!!!!!!!!!!!!!!');
            return 0;
        }
    }

    info() {
        document.write(` Діагональ екрану: ${this.diagonal}  дюймів <br> Час роботи батареї: ${Math.round(this.batteryLife)} год <br>Вага: ${Math.round(this.weight)} кг <br>`)
    }
}

let acer = new Ultrabooks(8, 800, 15.6, 1);
acer.compOn();
acer.baseInfo();
acer.info()

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
class BasePc extends Computers {
    constructor(ram, powerOfProc) {
        super(ram, powerOfProc);
        this.FPS = powerOfProc / ram;
    }

    info() {
        document.write(`Частота оновлення кадрів: ${this.FPS} FPS <br>`)
    }

    setapGame(gameName) {
        document.write(`Ви граєте гру -"${gameName}" з частотою онвлення кадрів ${Math.round(this.FPS)} FPS<br>`)
    }

}

let simens = new BasePc(16, 700);
simens.compOn();
simens.baseInfo();
simens.info();
simens.setapGame('FIFA21');
simens.increasePower(720);
simens.increaseRam();

// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.

class GamePc extends BasePc {
    constructor(ram, powerOfProc) {
        super(ram, powerOfProc);
        this.FPS = 2 * powerOfProc / ram;

    }

    info() {
        document.write(`Частота оновлення кадрів: ${this.FPS} FPS <br>`)
    }

    setapGame(gameName) {
        if (this.powerOfProc < 500) {
            alert('На цьому відрі ігри не запускаються');
            return 0;
        }

        document.write(`<br>Ви граєте гру -"${gameName}" з частотою онвлення кадрів ${Math.round(this.FPS)} FPS`);
        this.powerOfProc = this.powerOfProc * 0.9;
    }

}

let lenovo = new GamePc(32, 700);
lenovo.compOn();
lenovo.baseInfo();
lenovo.info();
lenovo.setapGame('FIFA21');//700
lenovo.setapGame('DOTA2');//630
lenovo.setapGame('UFC');//567
lenovo.setapGame("Assassin's Creed ");//510
lenovo.setapGame("Cossacs 3"); //460 ця гра вже не піде

//////////////////////////////////
//функція fps краще поміняти на
// this.FPS = (powerOfProc * ram)/500;



