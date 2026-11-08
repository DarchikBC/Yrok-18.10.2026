const formPassword = document.querySelector('.form-password')
const formEye = document.querySelector('.form-eye')
let counter=1
let myName = "admin"
let myPass = "qwerty"

formEye.addEventListener("sumbit",function(e){
    e.preventDefault()
    if (forName.value == myName && formPassword.value == myPass){
        alert('Succes')
        form.setAttribute('action','./HomePage.html')
        form.sumbit()
    }
    else {
        alert('error')
    }
}
)


formEye.addEventListener("click",function(){
    counter++
    if (counter%2==0){
        formPassword.setAttribute('type','text')
        formEye.setAttribute("src","./open.png")

    }
        else {
        formPassword.setAttribute('type','password')
        formEye.setAttribute("src","./hidden.png")
    }
})