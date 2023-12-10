// let age = 43;
// let year = 2001;
// log things to the console
// console.log(age,year);

// age=30;
// console.log(age);
// const grades = 100;
// console.log(grades);

//grades = 50;
//console.log(grades); Can't override the first declaration because of the "const" keyword
//Data types

//Strings>>>
//console.log('Welcome to javascript');

//let email='murigucharles3@gmail.com';

//console.log(email);

//strings:Concantenation>>
//let firstName='Charles';
//let middleName='Murigu';
//let lastName='Gitonga';
//let fullName=firstName+' '+ middleName+' '+ lastName;
//console.log(fullName);

//Extracting characters from a string>>
//console.log(fullName[1]);
//console.log(fullName[8]);

//String Length>>
//console.log(fullName.length);

//String Methods>>
//console.log(fullName.toUpperCase());
//console.log(fullName.toLowerCase());
//Storing a string to a variable and outputting it>
//let result=fullName.toLocaleUpperCase();
//console.log(result);

//console.log(fullName,result);

//let index=email.indexOf('a');
//console.log(index);

//Common string methods>>
//let gmail='murigucharles3@gmail.com';

//let output =gmail.lastIndexOf('r');
//let output=gmail.slice(0,6);
//let output=gmail.substring(0,10);
//let output=gmail.replace('m','L');
//let output=gmail.replace('a','q');

//console.log(output);

//Numbers>>>
//let radius=10;
//const pi=3.142;
//console.log(radius, pi);
//Math operators (all)>>
//console.log(10/2);
//let result=(radius%3);
//let result=pi * radius**2;
//order of operations>>
//let result= 5 * (10-2)**2;
//console.log(result);

//let likes= 10;
//likes = likes + 2;
//likes = likes++;
//likes=likes--;
//likes=likes +10;
//likes=likes -=5;
//likes=likes*=10;
//likes=likes/=5;
//console.log(likes);


//Not a Number(NaN)>>
//console.log(5/'hello');//Ouputs NaN;
//console.log(6*"charles");

//let result='My blog has '+ likes + ' likes';
//console.log(result);

//Template string>>>
    //const title='The technopolar moment';
    //const author='Adrian';
    //const views= 56;
//The clumsy/concantenation way>
    //let result ='The article called '+ title + ' by '+ author + ' has ' + views + ' views';
    //console.log(result);
//The template literal way>
    //let result=`The article called ${title} by ${author} has ${views} views`;
    //console.log(result);
//The HTMl template way>
    //let html=`
    //<h2> ${title}</h2>
    //<p>By ${author}</p>
    //<span>This article has ${views} views</span>

    //`;
    //console.log(html);

//Arrays>>>
    //Arrays as objects
        //let developers=['Charles','Ken','Athanus','Paul Q'];
        //console.log(developers);
        //developers[1]='Paul Q';//ovveride values in different positions
        //console.log(developers[1]);//Indexing(zero based)
        //console.log(developers.length)//Number of elements in an array
        
        //Select index
        // let ages=[20,24,57];
        // console.log(ages[0]);
        //Different data types in same array
        // let random = ['Charles',34,];
        // console.log(random);

    //Methods in arrays
        //let result=developers.join(' ');//Joins the elements with a gap between them
        //let result=developers.indexOf('Ken'); Outputs index of element in array
        //let result=developers.concat(['Suzie', 'Jackie','Millet']);//Merges two arrays
        //let result=developers.push('Alex'); //Adds the new element and returns length of the new array
        //result=developers.pop();//Takes out the last element and outputs the new array
        //console.log(developers);


//Null and undefined>>>
    //Introduction
    //let age='null';
    // console.log(age);//undefined
    // console.log(age,age + 3, `the age is ${age}`);//undefined

//Booleans>>>
    //Booleans and comparisons
    //console.log(true,false);//reserved
    //console.log("true","false"); //as strings
    //Booleans and methods
    //let gmail='murigucharles3@gmail.com';
    //let result=gmail.includes('');
    //console.log(result);

    //let technicians=['Zekki','Zeddi','Mike','Brian']
    //let final=technicians.includes('Mike');
    //console.log(final);

    //Comparison operators>>
    let leads = 79;

    console.log(leads == 79);//Equal to
    console.log(leads==57);
    console.log(leads!=69.99); //Not equal to
    console.log(leads > 75);//greater than
    console.log(leads < 79); //less than
    console.log(leads <= 79);//Less than or equal to
    console.log(leads >=79);//Greater than or equal to;

    let firstName ='Charles';

    console.log(firstName == 'Charles');
    console.log(firstName == 'Antony');
    console.log(firstName == 'Charles');
    console.log(firstName == 'Charles');
    console.log(firstName == 'Charles');
    console.log(firstName == 'Charles');

    let salary= 40000;
    //Loose comparison(different data types can be compared and yield definite results)>
    console.log(salary ==40000);
    console.log(salary !=40000);
    console.log(salary == '40000');//type conversion exhibited here
    console.log(salary !='40000');//Second instance of type conversion
    
    //Strict comparison(different data types can not be equal)
    console.log(salary === 40000);
    console.log(salary ==='40000');//yields false in this scenario. Type conversion
    console.log(salary !==40000);//false
    console.log(salary !=='40000');//true

//Type conversion
    // let score = '100';
    // score=Number(score);//String converted to number
    // console.log(score + 1);//concantenation if string is used else addition after type conversion
    // console.log(typeof score);
    //string to Number
    let greetings=Number('hello');
    console.log(greetings);//returns NaN
    //Number to string
    let aggregate=String(70);
    console.log(aggregate, typeof aggregate);
    //Booleans
    let all=Boolean(-5);
    console.log(all, typeof all);
    //String-to-boolean
    let result=Boolean('5')
    console.log(result, typeof result);
