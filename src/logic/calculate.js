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
      newData = { ...data, total: data.total === null ? total : operate(total, next, operation) };
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      newData = { ...data, operation: data.total !== null ? btn : null };
      break;
    case '%':
      if (data.next === null) {
        const result = operate(total, next, operation);
        newData = { ...data, total: data.total !== null ? result.c : null };
      } else {
        const result = operate(total, next, operation);
        newData = { ...data, next: result.c };
      }
      break;
    case '.':
      if (data.operation !== null && data.total !== null) newData = { ...data, next: next === null ? next : `${next}.` };
      else newData = { ...data, total: total === null ? total : `${data.total}.` };
      break;
    default:
      if (data.operation !== null && data.total !== null) {
        newData = { ...data, next: data.next === null ? btn : data.next + btn };
      } else newData = { ...data, total: data.total === null ? btn : data.total + btn };
      break;
  }

  return newData;
};
