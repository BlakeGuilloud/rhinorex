import patterns from './patterns';

export default function rhinorex(v, p, m = 'test') {
  const pattern = patterns[p];

  if (!pattern) {
    return Promise.reject(new Error(`Pattern: "${p}" is invalid`));
  }

  return pattern.test(v);
}

console.log(rhinorex('blake@gmail.com', 'email'));
