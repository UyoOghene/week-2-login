const form =document.querySelector('form');
const lbtn = document.querySelector('#lb');

console.log(lbtn);

// lbtn.addEventListener("click",e=>{
//     console.log(form.uyo.value);
//     let username = form.uyo.value;

//     if(username === 'admin' && form.password.value === 'pass'){
//         // alert('yes')
//         window.location.href = "./index2.html";
       
//     } else {
//         alert('nope');
        
//     }
     
// })

const logout = document.querySelector('#logoutb');

console.log(logout);

logout.addEventListener("click", e=> {
    console.log('hi');
    window.location.href = "./index.html";

})
