function Company(id, type, ceo, hq) {
    var self = {
        id: id,
        type: type,
        ceo: ceo,
        hq: hq,
        income: 0,
        capital: 0,
        sallary: 0,
    };

    self.employees = [];

    self.payment = function(){
        self.capital += self.income;
        for (var i in self.employees) {
            population[self.employees[i]].money += self.sallary;
        }
    }
}

