//Methods for declaring a new array
    //let arr= new Array();
    //let array=[];
//Zero based property in arrays
    let fruits=['Apple','Orange','Plum','Mangoes','Tomato'];
    fruits[4]='Pineapple';
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[4]);
    console.log(fruits.length);

    let devs=[
        'Adrian',
        'Kennedy',
        'Athanus',
        'paul',
        'Antony'
    ];
    console.log(devs);
    console.log(devs.length);
    console.log(devs.at(-1));//.at gets the last element

    //Methods and data structures in array Push,shift,pop
    let devices=['Router','Switch','Adapter','Ethernet'];
    console.log(devices.pop());//Pop removes the last element(Ethernet) and return it.
    console.log(devices);//Last element not here
    //Appending the element back to the array by pushing it
    devices.push('Ethernet');
    console.log(devices);
     //Methods that work at the beginning of an array
        //Shift
        let animals=['Cats','Dogs','Donkeys','Lions'];
        console.log(animals.shift());
        console.log(animals);//remove the first element(Cats) and returns it individually
        //unshift
        animals.unshift('Cats'); //Add the element back using unshift("element")
        console.log(animals);
        //Push and unshift adding multiple elements simulataneously
        let techs=['Monjo','Zeddi','Mike','Antony'];
        //techs.push('Kasee','Osborn');//Multiple elements pushed
        techs.unshift('Jaymoh','Isaac','Kevo');
        console.log(techs);

//Internals
    // let Zones=['Seasons','Umoja','majii','Garage'];
    // let arr=Zones;
    // //console.log(arr);//True(Returns zones)
    // //console.log(arr === Zones);//Also returns true
    // arr.push('Umoja','Kayole','Lucky Summer');
    // console.log(arr);//returns all elements

    let family=[];//making an array
    family[780]=10;//Assigning a property where i > length
    family.size=8;//creating a property with an arbitrary name
    //console.log(family);

//Loops>>>
    // let wildAnimals=['Rhino','Elephants','Hippopotamus','Crocodile'];
    //  for (let i = 0; i < arr.length; i++) {
    //     console.log(wildAnimals[i]);
    //  }

    let arr=['Apple','Orange','Mangoes','Pineapples'];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);   
    }
    //for..of
    let wildAnimals=['Elephant','Rhino','Lion','Hippotamus'];
    for(let wildAnimal of wildAnimals){
        console.log(wildAnimal);
    }
    //for..in(Not suitable for arrays)...Optimized for generic objects thus much slower than for..of


    //A word about Length
    let players=['Charles','Jervas','Douglas','Alex'];
    players[5]='Naftaly';
    console.log(players.length);

    //The writable property about array length
    let evens=[2,4,6,8,10];
    // evens.length= 3;//Truncates the elements to two
    // console.log(evens);//Returns the first three elements
    // evens.length=5;
    // console.log(evens);
    evens.length=0;//Simplest way to clear an array
    console.log(evens);

//Multidimensional arrays
    let matrix=[
        [1.2,3],
        [4,5,6],
        [7,8,9]
    ];
    console.log(matrix[1][1]); //Second row, second column
    console.log(matrix[0][1]);//first row, second column;3
    console.log(matrix[2][1]);//Third row,second column
    console.log(matrix[2][0]);//Third row, first column

    let employees=[
        ['Mike','james','Monjo'],
        ['Millet','jackie','Lemy'],
        ['Charles','Wambua','Paul']
    ];
    console.log(employees[0][1]); //Should Obtain James
    console.log(employees[2][2]);//Should Obtain Paul
    console.log(employees[0][0]);//Should Obtain Mike

//toString


//Practice Exercise
    // function sumInput(){
    //     let numbers=[];
    //     while(true){
    //         let value=prompt("Please Enter a Number ", 0);
    //             if(value ===""|| value === null || isFinite(value))break;
    //             numbers.push(+value);
    //     }

    //     let sum = 0;
    //     for(let number of numbers){
    //         sum +=number;
    //     }
    //     return sum;
    // }
    // alert(sumInput());

//Maximal subarray
 //Fast solution
 //Time complexity== 0(n2)
 //Calculating all possible subsums>> Kadanes algorithim;
    function getMaxSubSum(arr){
        let maxSum =0; //Taking no elements will return 0;

        for(let i=0; i < arr.length; i++ ){
            let sumFixedStart = 0;
            for(let j=1; j < arr.length; j++){
                sumFixedStart= +arr[j];
                maxSum = Math.max(maxSum,sumFixedStart);
            }
        }
        return maxSum;
    }
    console.log(getMaxSubSum([-1, 2 ,3, -9])); //5
    console.log(getMaxSubSum([-1, 2 ,3, -9, 11])); //11
    console.log(getMaxSubSum([-2, -1 ,1, 2])); //3
    console.log(getMaxSubSum([1, 2 ,3,]));//6
    console.log(getMaxSubSum([100, -9 ,2, -3, 5]));//100

    console.log(getMaxSubSum([100, -9 ,2, -3, 5]));//
