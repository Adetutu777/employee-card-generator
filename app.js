let users =  [

	{
		username: 'jacobkent',
		department: 'Admin',
		password:1234,
	},
  
	{
		username: 'paulsimon',
		department: 'IT',
		password: 3112
	},
  
	{
		username: 'jessicasmith',
		department: 'Legal',
		password: 5211
	}
  ]
  
  // buttonOne Dom manipulation
  
  const buttonOne = document.getElementById('button-one'),
  buttonTwo = document.getElementById('button-two'),
  staff = document.getElementById('class-check-one'),
  pass = document.getElementById('class-check-two'),
  errrorOutput = document.getElementById('error-text'),
  errrorOutputSignUp = document.getElementById('error-text-sign-up'),
  newUser = document.getElementById('new-user'),
  newPass = document.getElementById('new-password'),
  newDept = document.getElementById('new-depart'),
  logIn = document.getElementById('sign-up'),
  signMeUp = document.getElementById('section-two');
  let signUpDiv = document.getElementById('sign-up-btn');
  let signInDiv = document.getElementById('sign-in-btn');
  
  
  
  
  
  
  let signUpUI =()=>{
  
  logIn.style.display='none'
  signMeUp.style.display='block'
  signUpDiv.style.display='none'
  signInDiv.style.display='block'
  }
  
  let logInUI =()=>{
  logIn.style.display='block'
  signMeUp.style.display='none'
  signUpDiv.style.display='block'
  signInDiv.style.display='none'
  }
  
  
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
	errrorOutput.classList.add("error");
  
	 errrorOutput.innerHTML ='Wrong Username/Password';
	 }
	 
	 localStorage.setItem('myStaffRecords', JSON.stringify(users));
  
	}
  
  
	let newRecords =()=>{
  
		let checkOne= newUser.value;
	   let checkTwo= newPass.value;
	   let checkThree= newDept.value;
  
  
		let newOpt ={
		  username: checkOne,
		  password:checkTwo,
		  department:checkThree,
		  
		}
  
  if ((checkOne && checkTwo && checkThree)==''){
   errrorOutputSignUp.classList.add("error");
  errrorOutputSignUp.textContent ='All filed are required';
   console.log('hiii')
   return;
  
	}
		newUser.value='';
		newPass.value='';
		newDept.value='';
  
	  users.push(newOpt)
  
	  console.log(users) 
	  logInUI();
  
		errrorOutput.classList.add("success");
  
	   errrorOutput.innerHTML ='Signup successful, login to proceed';
  
	}
	  
  
  
  
  // adddeventlistener
  buttonOne.addEventListener('click', valRecords)
  buttonTwo.addEventListener('click', newRecords)
  signUpDiv.addEventListener('click', signUpUI)
  signInDiv.addEventListener('click', logInUI)
