//Hashtable
//Function to delete a key from the hashtable

delete(key){_
 const index = this.setkey(key);
 if(this.table[index]){
    this.table[index] = [];
    this.size --;
    return true;
 }
 else{
    return false;
 }
}