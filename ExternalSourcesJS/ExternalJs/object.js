 //Syntax for Objects
    // let user=new Object();
    // let user= {};
//Object literals and properties>
 let firstUser={ //Objects
    username:'Adrian',
    age:23, //Properties
    role:'developer',
    'likes javascript': true, //Multiword property in quotes not comma

    
 }
 //Fetching properties
 console.log(firstUser.username);
 console.log(firstUser.age)
 console.log(firstUser.role);
 console.log(firstUser.isDeveloper=false); //boolean properties
 //deleting properties
 delete firstUser.age; //delete operator 

 let admin = {};
 //set
 admin['Is very strict']=true; //square bracket notation
 //get
 console.log(admin['Is very strict']);//returns true
 //delete
 delete admin['Is very strict'];//Delete property

 //Computed properties
 let fruit = prompt('Which fruit to buy?', 'Mango');
    let bag = {
        [fruit]:5, //name of property taken from Variable fruit
    };
    console.log(bag.Mango);

