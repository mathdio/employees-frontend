export default async function fetchEmployees() {
  const response = await fetch('http://localhost:3000/employees');
  const data = await response.json();
  return data;
}
