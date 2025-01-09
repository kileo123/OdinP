import LinkedList from "./LinkedList.js"

export default function HashSet() {
  let hashTable = Array(16);
  
  return{
    clear(){ hashTable = Array(hashTable.length) },
    hash(key){
      let hashCode = 0
      const primeNumber = 31
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % hashTable.length
      }
      return hashCode
    },
    increaseSize(){
      const capacity = hashTable.length;
      const loadFactor = 0.75;
      let entriesNumber = 0;
      hashTable.forEach((bucket) => {
        entriesNumber += bucket.size();
      });
      if (entriesNumber >= capacity * loadFactor) {
        const entriesList = this.keys()
        hashTable = Array(capacity * 2)
        for (const entry of entriesList) {
          this.set(entry)
        }
      }
    },
    set(key) {
      this.increaseSize()
      const hashCode = this.hash(key)
      if (hashTable[hashCode] === undefined) {
        const bucket = LinkedList();
        bucket.append(key);
        hashTable[hashCode] = bucket;
      } else {
        const bucket = hashTable[hashCode];
        const keyExist = bucket.find(key);
        if (keyExist === null) {
          bucket.append(key);
        } else {
          console.log("Key Already Exist")
        }
        hashTable[hashCode] = bucket;
      }
    },
    get(key){
      let idx
      for (const bucket of hashTable) {
        if (bucket !== undefined) {
          idx = bucket.find(key)
          if (idx !== null) {
            return bucket.at(idx).value[1];
          }
        }
      }
      return null;
    },
    has(key){
      let idx
      for (const bucket of hashTable) {
        if (bucket !== undefined) {
          idx = bucket.find(key)
          if (idx !== null) {
            return true;
          }
        }
      }
      return false;
    },
    remove(key){
      let idx;
      for (const bucket of hashTable) {
        if (bucket !== undefined) {
          idx = bucket.find(key);
          if (idx !== null) {
            bucket.removeAt(idx);
            if (bucket.head() === null) {
              delete hashTable[hashTable.indexOf(bucket)];
            }
            return true;
          }
        }
      }
      return false;
    },
    length(){
      let entries = 0;
      hashTable.forEach((bucket) => {
        for (let i = 0; i < bucket.size(); i++) {
          entries++;
        }
      });
      return entries;
    }, 
    keys(){
      const keys = [];
      hashTable.forEach((bucket) => {
        for (let i = 0; i < bucket.size(); i++) {
          keys.push(bucket.at(i).value);
        }
      });
      return keys;
    },
    printTable(){
      const entries = [];
      hashTable.forEach((bucket, idx) => {
        entries.push([idx, bucket]);
        // console.log(`${idx} : ${bucket.toString()}`)
      });
      return entries;
    }
  }
}