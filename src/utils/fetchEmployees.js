const TEN_LIMIT = 10;
const DDD_LIMIT = 4;
const PHONE_LIMIT = 9;

function parseDate(dateObj) {
  const day = `${dateObj.getUTCDate() < TEN_LIMIT
    ? `0${dateObj.getUTCDate()}` : dateObj.getUTCDate()}`;

  const month = `${dateObj.getUTCMonth() + 1 < TEN_LIMIT
    ? `0${dateObj.getUTCMonth() + 1}` : dateObj.getUTCMonth() + 1}`;

  const year = `${dateObj.getUTCFullYear()}`;

  return `${day}/${month}/${year}`;
}

function parsePhone(phone) {
  const country = phone.substring(0, 2);
  const ddd = phone.substring(2, DDD_LIMIT);
  const firstPart = phone.substring(DDD_LIMIT, PHONE_LIMIT);
  const secondPart = phone.substring(PHONE_LIMIT);

  return `+${country} (${ddd}) ${firstPart}-${secondPart}`;
}

function parseEmployeesData(data) {
  return data.map((employee) => {
    const dateObj = new Date(employee.admission_date);
    const parsedDate = parseDate(dateObj);

    const parsedPhone = parsePhone(employee.phone);

    return {
      ...employee,
      admission_date: parsedDate,
      phone: parsedPhone,
    };
  });
}

async function fetchEmployees() {
  const response = await fetch('http://localhost:3000/employees');
  const data = await response.json();

  const parsedData = parseEmployeesData(data);
  return { status: response.status, data: parsedData };
}

export default fetchEmployees;
