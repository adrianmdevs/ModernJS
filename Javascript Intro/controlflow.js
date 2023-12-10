//Control flow in Javascript
//The FOR loop>>
    // for(let i=0; i<10; i++){
    //     console.log('in loop', i);
    // }
    // console.log('Loop finished!');
    //Cycling through

    const devs = ['Charles', 'Ken','Athanus','Mike'];
        for (let i = 0; i < devs.length; i++) {
            // console.log(devs[i]);
            let html=`<div>${devs[i]}</div>`;
            console.log(html);
        }

//While loop>>
     let j='0';
        while (j <= 5) {
            console.log('in loop:',j);
            j++;
        }
    const techs=['Mike', 'Zeddi','Zekki','James']
    let k=0;
     while (k < techs.length) {
        console.log(techs[k]);
        k++;
     }

//The do-while loop
    let a=1;
     do{
        console.log('The value of a is: ',a);
        a++;
     }
     while(a < 10);

//IF statement
     const age=10;
     if (age > 20) {
        console.log("You are over 20");
     }
     else{
        console.log('You are below 20 years');
     }

     const viewers = ['Her','Him','She','He']
        if (viewers.length > 4) {
            console.log('The number of acceptable genders is ',viewers);
        }
        else{
            ('Your pronoun is unrecognized');
        }
//Example
//  const players=['James','Jervas','Adrian','Douglas'];
//   if(players.length > 4){
//     console.log("That's a lot of players"); //Double quotes used where a string has a single quote
//   };
 //Example if...else if..else
  const password ='p@ss12';
  if(password.length >=12 && password.includes('@')){
    console.log("That password is very strong!!");
  }
   else if (password.length >=8 || password.includes('@') && password.length > 5){
    console.log('That password  is strong enough');
   }
   else{
    console.log('password must be 8 characters long!!');
   }

 //Logical NOT(!)
//  let subscriber = false;
//    if (!subscriber){
//     console.log('He must be logged in to continue');//Evaluates with the logical operator set to false
//    }
//    console.log(!true);
//    console.log(!false);

   //Break & continue in loops;
   let scores = [70,89,67,56,98,76,88,69,100,34,67,0];

    for(let i =0; i < scores.length; i++){
        if(scores[i]===0){
            continue;
        }
        console.log("Your score: ", scores[i]);

        if(scores[i]=== 100){
            console.log('Congratulations! You got the highest score!');
            break;
        }
    }
 //Switch statement..Triple equality for multiple statements
  const grade = 'A';

   switch(grade){
    case 'A':
    console.log("You got an A");
    break;
    case 'B':
    console.log("You got a B");
    break;
    case 'C':
        console.log("You got a C");
    break;
    case 'D':
        console.log("You got a D");
    break;
    case 'E':
        console.log("You got an E");
    break;
    default:
        console.log("Not a Valid Grade");
   }

//Block Level-scope with Variables
 let salary=50000; //Global Scope>> Globally accessed

 if (true){
    let salary = 40000; //Variable can be re-defined, recreates variable and assigns it a local scope within the Code block
    let role= 'Web development';
    console.log("Your role is ",role, "Your Salary is ", salary);
    if(true){
        let role = 'Call Center'; //Can ovveride the previously defined role in the parent codeblock
        console.log("inside the second codeblock:", role); //Local variable within grasp of nested blocks and can be overidden.
    }
 }
 console.log("Your salary is: ",salary)




        