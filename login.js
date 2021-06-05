function checkUserPassword(){
	 
        console.log("val of username",$("#userName").val())
       
        
        if($("#userName").val()==="hana" && $("#password").val()==="25061988"){
            // document.getElementById('id03').style.display = "none"
           console.log("I am connected")
           window.open('IMS.html');

            
        }else{alert('username or psw wrong')}
    }