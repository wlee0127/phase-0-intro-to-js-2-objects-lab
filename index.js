// Write your solution in this file!
/*beforeEach(() => {
    employee = {
      name: "",
      streetAddress: ""
      
    }
})*/
const employee = {name:"", streetAddress:""};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee1 = {...employee};
    newEmployee1[key] = value;
    
    //employee.name = key;
    //employee.streetAddress = value;
    //console.log(newEmployee1);
    return newEmployee1;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    console.log(newEmployee);
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
//updateEmployeeWithKeyAndValue(employee, 'name', 'test')