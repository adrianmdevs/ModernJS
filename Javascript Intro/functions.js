//Functions>>>
    //Function declaration
    function greet(){
        console.log("Welcome to functions in Javascript functions");
   
    }
    greet(); //Calling the functions
    greet();//functions can be called multiple times

    const speak=function(){
        console.log('Good day')
    };
    speak();

    //Hoisting>>(worls with function)
    argue();
    argue();
    argue();
    argue();

    //Other Code
    //Other code
    //Other code
    function argue(){
        console.log('This argument demonstrates hoisting in Javascript')
    };
 //Passing Values to functions
  const calculations = function(values,type){
    console.log('The result is: ',values,type);
  };
  calculations(10,'Whole Number');

//   const calcArea = function(radius){
//     let area= 3.14 * radius**2;
//     // console.log(area);
//     return area;
//   }
//   const area= calcArea(7);
//   console.log('The Area of a circe is: ',area);

  let employeeSalary = function(gross,bonus){
    let salary = gross + bonus;
    return salary;
  }
  const salary = employeeSalary(14000,5000);
  console.log(salary);


  let developerName = function(firstName,lastName){
    let fullName= firstName + lastName;
    return fullName;
  }
  const fullName = developerName('Charles ','Gitonga');
  console.log(fullName);

  const rectArea = function(length, width){
    let area = length * width;
     return area;
  };
  const area = rectArea(20,10);
  console.log(area);

  const calcVol= function(area,height){
    let vol= area*height;
        return vol;
  };
  const vol = calcVol(area,10);

  const bill = function(products,tax){
    let total = 0;
    for(let i=0; i< products.length; i++){
        total +=products[i] + products[i] *tax;
    }
    return total;
  };
  console.log(bill([10,15,20],0.2));