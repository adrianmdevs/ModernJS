//Insert>> used to insert a new key-value pair inside the hashtable

//Function to insert a value in the hash table using setKey function

    insert(value) {
        const index = this._setKey(value);
        this.table[index] = value;
        this.size++;
    }
