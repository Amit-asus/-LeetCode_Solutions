const form = document.getElementById("userForm") ;
const loader = document.getElementById("loader"); ;
const successMessage = document.getElementById("successMessage"); 

form.addEventListener("submit" , (e)=> {
    e.preventDefault() ;
    const formData = new FormData(form)
    const name  = formData.get('name') ;
    const email = formData.get('email') ;
    console.log(formData.entries) ;
     loader.style.display = "block";

     setTimeout(()=>{
        loader.style.display = "none" ;
        successMessage.textContent = "Form submitted successfully" ;
        form.reset() ;
     },2000)
})
