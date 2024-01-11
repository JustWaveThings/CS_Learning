import { LinkedList } from './linked_list.js';

function HashMap() {
  let capacity = 16;
  const loadFactor = 0.75;
  let keyCount = 0;

  let buckets = Array.from({ length: capacity }, () => null);

  const insert = value => {
    // check load ratio first, expand if needed
    // checkLoadRatio(capacity, loadFactor, keyCount);
    // calc hash and key
    const hashValue = hash(value);
    const keyValue = hashValue.hashCode % capacity;

    // set hashValue value pair in correct keyValue bucket

    set(keyValue, hashValue);
  };

  const hash = value => {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < value.length; i++) {
      hashCode = primeNumber * hashCode + value.charCodeAt(i);
    }
    return { hashCode, value };
  };

  const checkLoadRatio = (capacity, loadFactor, keyCount) => {
    const loadRatio = keyCount / capacity;

    const overLoaded = loadRatio >= loadFactor;

    if (overLoaded) {
      const newCapacity = capacity * 2;
      const newBuckets = Array.from({ length: newCapacity }, () => null);

      buckets.forEach((bucket, i) => {
        const newPosition = Math.floor(i * (newCapacity / capacity));
        newBuckets[newPosition] = bucket;
      });

      buckets = newBuckets;
      capacity = newCapacity;
    }
  };

  const values = () => {
    let valueList = [];
    for (let i = 0; i < buckets.length; i++) {
      const notNull = buckets[i] !== null;

      if (notNull) {
        valueList.push(buckets[i].nodeValues());
      }
    }
    const valueListFlat = valueList.flat();

    return { valueList, valueListFlat };
  };

  const set = (key, value) => {
    const emptyBucket = buckets[key] === null;

    if (emptyBucket) {
      buckets[key] = new LinkedList();
      buckets[key].append(value);
    } else {
      buckets[key].append(value);
    }
  };

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

  const logAfter = () => {
    console.log(buckets, ' - this is the logAfter function');
  };

  const entries = () => {};

  return {
    insert,
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
// initializes a hashmap instance

const hm = HashMap();
names.forEach(name => {
  hm.insert(name);
});
// console.log(hm.values().valueListLength);
console.log(hm.values());
hm.logAfter();
