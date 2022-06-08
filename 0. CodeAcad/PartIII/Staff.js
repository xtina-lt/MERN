class Staff{
    // CONSTRUCTOR
    constructor(name, department){
        this._name = name;
        this._department = department;
        this._vacationDays = 14;
    }

    // ACCESSORS
    getName() { return this.name; }
    getDepartment() { return this.department; }
    getVacationDays() { return this._vacationDays; }

    // MUTATORS
    setName(e) { return this.name = e; }
    setDepartment(e) { return this.department = e; }
    setVacationDays(e) { return this._vacationDays = e; }

    // METHODS
    takeVacation(e) {if (this._vacationDays >= e) return this._vacationDays -= e; }
}

const test = new Staff('xtina', 'coding');
console.log( test.getVacationDays() );
test.takeVacation(5);
console.log( test.getVacationDays() );


