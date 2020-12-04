import operate from './operate';

export default ({ total, next, operation } = {}, btn) => {
  if (btn === '+/-') {
    total *= -1;
    next *= -1;
    return next;
  }

  return operate(total, next, btn);
};
