import operate from './operate';

export default (data = { total: null, next: null, operation: null }, btn) => {
  let newData;
  const { total, next, operation } = data;
  switch (btn) {
    case '+/-':
      if (total !== null && next === null) {
        newData = {
          ...data,
          total: data.total * -1,
        };
      }
      if (total !== null && next !== null) {
        newData = {
          ...data,
          next: data.next * -1,
        };
      }

      break;
    case 'AC':
      newData = {
        ...data, total: null, next: null, operation: null,
      };
      break;
    case '=':
      newData = { ...data, total: total === null ? total : operate(total, next, operation) };
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      newData = { ...data, operation: data.total !== null ? btn : null };
      break;
    case '%':
      if (data.next === null) {
        newData = { ...data, total: total !== null ? total / 100 : null };
      } else {
        newData = { ...data, next: next / 100 };
      }
      break;
    case '.':
      if (operation !== null && total !== null) {
        newData = { ...data, next: next === null || next.includes('.') ? next : next + btn };
      } else {
        newData = { ...data, total: total === null || total.includes('.') ? total : total + btn };
      }
      break;
    default:
      if (operation !== null && total !== null) {
        newData = { ...data, next: next === null ? btn : next + btn };
      } else newData = { ...data, total: total === null ? btn : total + btn };
      break;
  }

  return newData;
};
