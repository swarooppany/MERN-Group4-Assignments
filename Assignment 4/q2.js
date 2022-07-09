const form= document.getElementsByTagName('form')[0]; 

form.addEventListener("submit", (event) => {
    let valid = 1;
    let error_message = '';
    const name = document.querySelector("#name").value;
    if(name==''){
        valid=0;
        error_message+='Enter the name!<br>';
    }
    const email = document.querySelector("#email").value;
    if(email==''){
        valid=0;
        error_message+='Enter the email!<br>';
    }
    const phone = document.querySelector("#phone").value;
    if(phone==''){
        valid=0;
        error_message+='Enter the number!<br>';
    }
    const gendervalue = document.getElementsByName("gender");
    let gender = '';
    for(let i=0;i<gendervalue.length;i++) {
        if(gendervalue[i].checked) {
            gender = gendervalue[i].value;
        }
    }
    if(gender==''){
        valid=0;
        error_message+='Select the gender<br>';
    }
    
    const pin = document.querySelector("#pin").value;
    if(pin=='')
    {
        valid=0;
        error_message+='Enter address correctly<br>';

    }
    const addr = document.querySelector('#addr').value;
    if(addr==''){
        valid=0; 
        error_message+='Enter address<br>';
    }
    const password = document.querySelector("#pass").value;
    const confirmPassword = document.querySelector("#c_pass").value;
    if(password==''||confirmPassword==''){
        valid=0;
        error_message+='Enter the password<br>';
    }
    if(confirmPassword != password){
        valid=0;
        error_message='Both the password should be same.';
    }
    const check = document.querySelector("#i_agree").checked ? document.querySelector("#i_agree").value : '';
    if(check!="1"){
        valid=0;
        error_message+='Agree to the terms and conditions<br>';
    }
    if(valid==0 && error_message!=''){
        document.querySelector(".error_message").innerHTML=error_message;
        document.querySelector(".error_message").style.display="block";
        document.querySelector(".error_message").style.color="rgb(211, 51, 51)";
    }
    if(valid==1){
        document.querySelector(".error_message").innerText='';
        console.log(`name: ${name}`);  
        console.log(`email: ${email}`);
        console.log(`Gender: ${gender}`);
        console.log(`Address : ${addr}`)
        console.log(`Pincode: ${pin}`);
        document.querySelector("#show_name").innerText = 'Name: '+ name;
        document.querySelector("#show_email").innerText = 'Email: '+ email;
        document.querySelector("#show_gender").innerText = 'Gender: '+ gender;
        document.querySelector("#show_phoneno").innerText = 'Phoneno: '+ phone;
    }
    event.preventDefault();
})

