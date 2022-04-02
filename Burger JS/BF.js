class Param{
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset["price"];
        this.calories = + element.dataset["calories"];
    }
}


class Burger {
    constructor(size, add, topping) {
        this.size = new Param (this._select(size));
        this.add = new Param(this._select(add));
        this.topping = this._getToppings(topping);
    }
    _getToppings(name) {
        let result = [];
        this._selectall(name).forEach(el=> {
            let obj = new Param(el);
            result.push(obj);
        });
        return result;
    }
    _select(name){
        return document.querySelector(`input[name=${name}]:checked`);
    }
    _selectall(name) {
        return [... document.querySelector(`input[name=${name}]:checked`)]
    }

    _sumprice() {
        let result = this.size.price + this.add.price;
        this.topping.forEach(el => 
            result += el.price
        )
        return  result;
     }

    _calories() {
        let result = this.size.calories + this.add.calories;
        this.topping.forEach(el =>          result += el.calories
        );
        return result;
    }
    showSum(price, calories){
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }
}