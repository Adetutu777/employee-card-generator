
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
let buttonTwo = document.getElementById('button-two');
let staff = document.getElementById('class-check-one');
let pass = document.getElementById('class-check-two');
let errrorOutput = document.getElementById('error-text');
let newUser = document.getElementById('new-user');
let newPass = document.getElementById('new-password');
let newDept = document.getElementById('new-depart');

   let valRecords =()=> {
      let nameVal = staff.value;
      let passVal = pass.value;
   	const checkname = users.some(person => person.username == nameVal)
   	const checkpass = users.some(person => person.password == passVal)
   	staff.value ='';
     pass.value='';

   	if (checkname && checkpass ===true){
       console.log('right records')
       users.forEach((person) => {
          if(person.username == nameVal) {
            localStorage.setItem('loggedInUser', JSON.stringify(person));
            location.assign("./dashboard.html");
          
          }
       })
   	}

   	else{
   		errrorOutput.innerHTML ='Wrong Username/Password';
       }
       
       localStorage.setItem('myStaffRecords', JSON.stringify(users));

      }


    //   let newRecords =(ev)=>{
        //   ev.preventDefault();

        let newRecords =()=>{

            let userNew=newUser.value;
            let passNew = newPass.value;
            let deptNew = newDept.value;

       let checkRec =()=>{
           userNew;
            passNew;
            deptNew;

        }

          newUser.value='';
          newPass.value='';
          newDept.value='';

            users.push(checkRec);

            

            

          }

      

buttonOne.addEventListener('click', valRecords)
// buttonTwo.addEventListener('click', newRecords)
