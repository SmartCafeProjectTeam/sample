document.getElementById("userform").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        contact: document.getElementById("contact").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        country: document.getElementById("country").value
    };

    console.log("User data submitted:", formData);

    fetch("http://localhost:8080/api/savedata",
        {
            method: 'POST',
            headers:{
                'Content-type':'Application/json'
            },
            body:JSON.stringify(formData)
        }).then(Response =>{
            if(Response.ok){
                document.getElementById("success").innerText="data saved successfully..!";
                document.getElementById("userform").reset();
            }else{
                alert("does not save data")
                
            }
        }).catch(error =>{
            console.error("Error",error)
                alert("does not save data")

        })
    
});
