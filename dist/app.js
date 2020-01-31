"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.describe();
var accountingCopy = { name: 'DUMMEY', describe: accounting.describe };
accountingCopy.describe();
//# sourceMappingURL=app.js.map