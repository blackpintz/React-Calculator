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
    case '.':
      if (data.operation !== null && data.total !== null) newData = { ...data, next: data.next === null ? '.' : `${data.next}.` };
      else newData = { ...data, total: data.total === null ? '.' : `${data.total}.` };
      break;
    case '=':
      newData = { ...data, total: data.total === null ? 0 : operate(total, next, operation) };
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      if (operation === null) {
        newData = { ...data, total: data.total === null ? 0 : operate(total, next, btn) };
      } else {
        newData = { ...data, total: data.total === null ? 0 : operate(total, next, operation) };
      }
      break;
    default:
      if (data.operation !== null && data.total !== null) newData = { ...data, next: data.next === null ? `${btn}` : `${data.next}${btn}` };
      else newData = { ...data, total: data.total === null ? `${btn}` : `${data.total}${btn}` };
      break;
  }

  return newData;
};
