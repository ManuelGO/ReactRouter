const url = 'http://localhost:3001/customers';
export const getCustomers = () => fetch(url).then(c => c.json());