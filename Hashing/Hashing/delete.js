//Delete used in order to delete a particular key value pair from the hash table

 delete(key){
    const index = this._setKey(key);
    if(this.table[index]){
        this.table. [index] = [];
        this.size--;
        return true;
    }
    else{
        return false;
    }
 }