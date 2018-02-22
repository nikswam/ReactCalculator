import calculate from './calculate';
import isNumber from './isNumber';

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
**/
export default function format(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: calculate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }
  if (buttonName === "sqrt"){
    return {
      total: calculate(obj.next, obj.next, "sqrt"),
      next: null,
      operation: null,
    };
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: calculate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }
 

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
