import { LinkedList } from './linked_list.js';
import { top75 } from './input.js';

function HashMap() {
  let capacity = 16;
  const loadFactor = 0.75;
  let keyCount = 0;
  let timesGrown = 0;

  let buckets = Array.from({ length: capacity }, () => null);

  const hash = value => {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < value.length; i++) {
      hashCode = BigInt(primeNumber) * BigInt(hashCode) + BigInt(value.charCodeAt(i));
    }
    hashCode = BigInt(hashCode) % BigInt(capacity);
    hashCode = Number(hashCode);
    return hashCode;
  };

  const set = (key, value) => {
    manageLoadRatio();

    const index = hash(key);

    if (buckets[index] !== null) {
      buckets[index].append({ key, value });
      // console.log(`${key} - key, ${value} points - value, appended to LL in bucket ${index}`);
    } else {
      buckets[index] = new LinkedList();
      buckets[index].append({ key, value });
      // console.log(`${key} - key, ${value} points - value, new Linked List in bucket ${index}`);
    }
    keyCount++;
  };

  const manageLoadRatio = () => {
    const loadRatio = keyCount / capacity;
    const overLoaded = loadRatio >= loadFactor;

    if (overLoaded) {
      timesGrown++;
      const currentValues = values().valueListFlat;
      const newCapacity = capacity * 2;
      capacity = newCapacity;

      buckets = Array.from({ length: newCapacity }, () => null);
      keyCount = 0;

      currentValues.forEach(({ key, value }) => {
        const index = hash(key);

        if (buckets[index] !== null) {
          buckets[index].append({ key, value });
          // console.log(`${key} - key, ${value} points - value, appended to LL in bucket ${index}`);
        } else {
          buckets[index] = new LinkedList();
          buckets[index].append({ key, value });
          // console.log(`${key} - key, ${value} points - value, new Linked List in bucket ${index}`);
        }
        keyCount++;
      });
    }
  };

  const values = () => {
    let valueList = [];
    for (let i = 0; i < buckets.length; i++) {
      const empty = buckets[i] === null;

      if (!empty) {
        valueList.push(buckets[i].nodeValues());
      }
    }
    const valueListFlat = valueList.flat();

    return { valueList, valueListFlat };
  };

  const get = key => {
    if (!has(key)) return null;
    const index = hash(key);
    console.log(buckets[index].toString());
  };

  const has = key => {
    const index = hash(key);
    const exists = buckets[index] !== null && buckets[index]?.containsObjKey(key);
    return exists;
  };

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

  const logAfter = () => {
    buckets.forEach((bucket, i) => {
      bucket ? console.log(i + 1, ' - ', bucket.toString()) : console.log(i + 1, ' - ', 'empty bucket');
    });
    console.log('-----------------');
    console.log('hashmap data');
    console.log('-----------------');
    console.log({ capacity });
    console.log(capacity === buckets.length ? '- Array Length matches Capacity' : '- Array Length does not match Capacity');
    console.log('- Times hashmap had to grow: ', timesGrown);
  };

  return {
    set,
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

const hm = HashMap();

top75.forEach(obj => {
  hm.set(obj.name, obj.points);
});

hm.logAfter();
