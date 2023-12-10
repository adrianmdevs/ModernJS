//Search a value using Search
//Key using setKey function

    search(value){
        const index = this._setKey(value);
        if(this.table[index]==value)
        console.log("The value is found at index: ", index);
        else
        console.log("Not Found");
    }