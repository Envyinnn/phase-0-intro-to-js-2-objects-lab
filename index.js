const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        return Object.assign(employee, {[key]: value})
}

function deleteFromEmployeeByKey(employee, key){
    const newObject = {...employee}
        delete newObject[key]
           return newObject;
}

function destructivelyDeleteFromEmployeeKey(employee, key, value){
    employee[key] = value
        return employee;
}
