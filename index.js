import phb from 'posthtml-beautify';
import bf from 'bf';

const text = `lorem
ipsum ${bf('test')}`;

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.values(object1));