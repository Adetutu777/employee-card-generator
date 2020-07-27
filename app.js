
 let users =  [
      {
          username: 'jacobkent',
          department: 'Admin',
          staffIdNo : 300,
          password:1234,
      },
  
      {
          username: 'paulsimon',
          department: 'IT',
          staffIdNo :113,
          password: 3112
      },
  
      {
          username: 'jessicasmith',
          department: 'Legal',
          staffIdNo : 485,
          password: 5211
      }
    ]

// buttonOne Dom manipulation
let buttonOne = document.getElementById('button-one');
let staff = document.getElementById('class-check-one');
let pass = document.getElementById('class-check-two');
let errrorOutput = document.getElementById('error-text');

   let valRecords =()=> {
      let nameVal = staff.value;
      let passVal = pass.value;
   	const checkname = users.some(person => person.username == nameVal)
   	const checkpass = users.some(person => person.password == passVal)
   	staff.value ='';
     pass.value='';

   	if (checkname && checkpass ===true){
   		console.log('right records')
   		location.assign("./dashboard.html");
   	}

   	else{
   		errrorOutput.innerHTML ='Wrong Username/Password';
   	}

      }

buttonOne.addEventListener('click', valRecords)
