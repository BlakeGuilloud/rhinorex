import patterns from './patterns';

module.exports = function rhinorex({ pattern, value, method = 'test' }) {
  const regexp = patterns[pattern];

  if (!regexp) {
    return handleError('Pattern', pattern);
  }

  if (!value) {
    return handleError('Value', value);
  }

  return init({ regexp, method, value });
};

function init({ regexp, method, value }) {
  let returnVal;

  switch (method) {
    case 'test':
      returnVal = regexp.test(value);
      break;
    case 'match':
      returnVal = value.match(regexp);
      break;
    case 'exec':
      returnVal = regexp.exec(value);
      break;
    case 'search':
      returnVal = value.search(regexp);
      break;
    default:
      returnVal = regexp.test(value);
  }

  return returnVal;
}

function handleError(property, value) {
  return Promise.reject(new Error(`${property} : "${value}" is invalid`));
}
