//Get: Used to search a key inside the hash table and return the value that is associated with that key

//Function inside hashtable to acces a value using it's key
    get(key){
        const.target = this._setKey(key);
        return this.table[target];
    }