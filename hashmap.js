import { LinkedList } from './linked_list.js';

function HashMap() {
  let capacity = 16;
  const loadFactor = 0.75;
  let keyCount = 0;

  let buckets = Array.from({ length: capacity }, () => null);

  const hash = value => {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < value.length; i++) {
      hashCode = primeNumber * hashCode + value.charCodeAt(i);
    }

    return hashCode;
  };

  const set = (key, value) => {};

  const manageLoadRatio = () => {
    const loadRatio = keyCount / capacity;
    const overLoaded = loadRatio >= loadFactor;

    if (overLoaded) {
      const currentValues = values().valueListFlat;
      const newCapacity = capacity * 2;

      buckets = Array.from({ length: newCapacity }, () => null);

      currentValues.forEach(obj => {
        const newKeyValue = obj.hashCode % newCapacity;
        set(newKeyValue, obj);
      });

      capacity = newCapacity;
    }
  };

  const values = () => {};

  const get = key => {};

  const has = key => {};

  const remove = key => {};

  const length = () => {};

  const clear = () => {
    buckets = [];
    capacity = 16;
    buckets = Array.from({ length: capacity }, () => null);
    return null;
  };

  const keys = () => {};

  const entries = () => {};

  return {
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    logAfter,
  };
}

const names = [
  'toby',
  'Carlos',
  'timato',
  'KM',
  'josh',
  'Marvin',
  'mdfr4nk',
  'nevz',
  'Mr. ARL',
  'Cake',
  'rlmoser',
  'takinabradley',
  'Manon',
  'Eduardo06sp',
  'Scheals',
  'Mao',
  'Miggels',
  'JMyers',
  'Arun',
  'BriggsE',
  'Bender',
  '105Ron',
  'Zach',
  'var(--cody)',
  'zer0',
];

const hm = HashMap();

names.forEach(name => {
  hm.insert(name);
});
