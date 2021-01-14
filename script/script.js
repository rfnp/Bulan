console.log("SOmeone just register!")

function validatereg(event){
    // alert("Halo")
    var email=document.getElementById("email").value
    var password=document.getElementById("pass").value
    var address=document.getElementById("addr").value
    var date=document.getElementById("date").value
    var month=document.getElementById("month").value
    var year=document.getElementById("year").value
    var agree=document.getElementById("agree").checked

    var curr=new Date()
    var currdate=curr.getDate()
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    var currmonth=months[curr.getMonth()]
    var curryear=curr.getFullYear()
    

    console.log("Email: " + email)
    console.log("Password: " + password)
    console.log("Address: " + address)
    console.log("Agree?: " + agree)
    console.log("date: "+ date)
    console.log("Month: "+ month)
    console.log("Year: "+ year)

    console.log("currdate: "+ currdate)
    console.log("currMonth: "+ currmonth)
    console.log("currYear: "+ curryear)

    var checkemail=false
    for(let i=0; i<email.length; i++){
        if (email.charAt(i)=="@") {
            checkemail=true
        }
    }

    console.log("is email valid?" + checkemail)

    var checkpass=false
    for(let i=0; i<password.length; i++){
        if(isNaN(password.charAt(i))==false){
            checkpass=true
        } 
    }

    var checkage=false
    var tempyear=curryear - year

    if(month>currmonth && date>currdate){
            checkage=false
        }
    if(month===currmonth && date>currdate){
            checkage=false
        }
    else{
        checkage=true
    }

    console.log(tempyear)
    console.log(checkage)

    if(email==="" || checkemail==false){
        event.preventDefault()
        alert("Please input a valid email address")
    }

    else if(password==="" || password.length<8 || checkpass==false){
        event.preventDefault()
        alert("Please input a valid password*\n*Password must be at least 8 characters long and contains number")
    }

    else if(address==="" || address==" "){
        event.preventDefault()
        alert("Please input a valid address")
    }

    else if(checkage==false){
        event.preventDefault()
        alert("You must be at least 18 years old to register")
    }

    else if(agree==false){
        event.preventDefault()
        alert("You must agree to our terms and conditions to register")
    }

    else{
        alert("Account Created Successfully!")
    }

}
