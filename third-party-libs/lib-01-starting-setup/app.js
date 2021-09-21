const customers = ["James", "Marina", "Denise"];

const activeCustomers = ["Marina", "Denise"];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
