import { LinkedList } from './linked_list.js';

function HashMap() {
  let capacity = 16;
  const loadFactor = 0.75;
  let keyCount = 0;

  let buckets = Array.from({ length: capacity }, () => null);

  const insert = value => {
    manageLoadRatio();
    const hashValue = hash(value);
    const keyValue = hashValue.hashCode % capacity;
    set(keyValue, hashValue);
    keyCount++;
  };

  const hash = value => {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < value.length; i++) {
      hashCode = primeNumber * hashCode + value.charCodeAt(i);
    }

    return { hashCode, value };
  };

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

  const get = key => (buckets[key]?.nodeValues() ? buckets[key].nodeValues() : null);

  const has = key => (buckets[key] !== null ? true : false);

  const remove = key => {
    const bucketEmpty = has(key);

    if (bucketEmpty) {
      buckets[key] = null;
      return true;
    }
    return false;
  };

  const length = () => {
    return values().valueListFlat.length;
  };

  const clear = () => {
    buckets = [];
    capacity = 16;
    buckets = Array.from({ length: capacity }, () => null);
    return null;
  };

  const keys = () => {
    const keyList = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] !== null) {
        keyList.push(i);
      }
    }
    return keyList;
  };

  const logAfter = () => {
    console.log(buckets, ' - this is the logAfter function', buckets.length);
  };

  const entries = () => {
    const entryList = [];
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i] !== null) {
        const entries = buckets[i].nodeValues();
        entries.forEach(val => {
          entryList.push([i, val]);
        });
      }
    }
    return entryList;
  };

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

const hm = HashMap();

names.forEach(name => {
  hm.insert(name);
});

console.log(hm.length()); //  25
console.log(hm.get(3)); // null
console.log(hm.has(3)); // false
console.log(hm.remove(3)); // false
console.log(hm.get(4));
/*  [
  { hashCode: 3421295364, value: 'timato' },
  { hashCode: 104371452292, value: 'rlmoser' }
] */
console.log(hm.remove(4)); // true
console.log(hm.get(4)); // null

console.log(hm.keys());
/* [
   0,  6, 11, 16, 18, 24, 25,
  26, 27, 28, 29, 34, 36, 41,
  42, 44, 46, 48, 56, 59
] */
console.log(hm.entries());

/* [
  [ 0, { hashCode: 93924078142526300000, value: 'takinabradley' } ],
  [ 6, { hashCode: 1986175942, value: 'Bender' } ],
  [ 11, { hashCode: 61939106955, value: 'BriggsE' } ],
  [ 16, { hashCode: 71442135952, value: 'Miggels' } ],
  [ 16, { hashCode: 2193373712, value: 'JMyers' } ],
  [ 18, { hashCode: 3565586, value: 'toby' } ],
  [ 24, { hashCode: 2092632, value: 'Cake' } ],
  [ 25, { hashCode: 74110105, value: 'Manon' } ],
  [ 26, { hashCode: 3268186, value: 'josh' } ],
  [ 27, { hashCode: 76596243227, value: 'Scheals' } ],
  [ 28, { hashCode: 2011238172, value: 'Carlos' } ],
  [ 29, { hashCode: 2297539101, value: 'Marvin' } ],
  [ 34, { hashCode: 2402, value: 'KM' } ],
  [ 36, { hashCode: 71645007012, value: 'Mr. ARL' } ],
  [ 41, { hashCode: 3735145, value: 'zer0' } ],
  [ 42, { hashCode: 2049706, value: 'Arun' } ],
  [ 44, { hashCode: 2777580, value: 'Zach' } ],
  [ 46, { hashCode: 99698465134, value: 'mdfr4nk' } ],
  [ 48, { hashCode: 99379152616965040, value: 'var(--cody)' } ],
  [ 56, { hashCode: 59300875135022840, value: 'Eduardo06sp' } ],
  [ 59, { hashCode: 3377851, value: 'nevz' } ],
  [ 59, { hashCode: 77115, value: 'Mao' } ],
  [ 59, { hashCode: 1448818683, value: '105Ron' } ]
] */
