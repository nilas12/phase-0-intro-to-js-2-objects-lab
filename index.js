const employee = {}
 function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}
 function  deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
   Object.assign({}, employee);
    delete employee[key];
    return employee;
  }