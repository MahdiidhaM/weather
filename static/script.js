// console.log('in the name of God')
// var changes = document.querySelectorAll('.card-img-top')

// console.log(changes)
// changes.forEach(change=>{
    
//     if (change.src.includes('partly-cloudy-day')) {
//         change.previousElementSibling.style.backgroundImage = "url('https://images.unsplash.com/photo-1450205205793-95358d4d18c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80')"
//         change.parentElement.classList.add('text-white')
//     }
    
//     else if (change.src.includes('clear-day')){
//         change.previousElementSibling.style.backgroundImage = "url(https://images.unsplash.com/photo-1527722123791-ac58199069df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)"
//         change.parentElement.classList.add('imagestyle' ,'text-black')
//     }
    
//     else if (change.src.includes('cloudy')){
//         change.previousElementSibling.style.backgroundImage = "url()"
//         change.parentElement.classList.add('text-white')
//     }
//     else if (change.src.includes('rain')){
//         change.previousElementSibling.style.backgroundImage = "url('https://images.unsplash.com/photo-1494122440615-9e21a6890164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
//         change.parentElement.classList.add('text-white')
//     }
    
//     else if (change.src.includes('wind')){
//         change.previousElementSibling.style.backgroundImage = "url('https://images.unsplash.com/photo-1612367785031-ad89d0cb93c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')"
//         change.parentElement.classList.add('text-black')
//     }
    
//     else if (change.src.includes('snow')){
//         change.previousElementSibling.style.backgroundImage = "url('https://images.pexels.com/photos/954713/pexels-photo-954713.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')"
//         change.parentElement.classList.add('text-black')
//     }
// })
// https://images.unsplash.com/photo-1533624952480-ad0f18858908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80
// https://images.unsplash.com/photo-1450205205793-95358d4d18c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80
// https://images.unsplash.com/photo-1486671736870-2f695ecdf813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
// https://images.unsplash.com/photo-1469365556835-3da3db4c253b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
// https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80
// https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
// https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
// https://images.unsplash.com/photo-1529431066294-ece7c10b794c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80
// https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80
// https://images.unsplash.com/photo-1518084132696-ae8c27911102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80
// https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80
// https://images.pexels.com/photos/1775862/pexels-photo-1775862.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260

var show = document.querySelector('.show')
var login = document.querySelector('.login')
var hidden = document.querySelector('.hidden')
var dark = document.querySelector('.dark')
var sign = document.querySelector('.sign')
var signup = document.querySelector('.signup')


console.log(show)
show.addEventListener('click', e => {
    console.log('ok')
    login.classList.toggle('act')
    hidden.classList.toggle('act')
    dark.classList.toggle('act')
    // console.log(e)
})


sign.addEventListener('click',e =>{
    login.classList.remove('act')
    signup.classList.toggle('act')
    
})

hidden.addEventListener('click', e =>{
    signup.classList.remove('act')
    login.classList.remove('act')
    hidden.classList.remove('act')
    dark.classList.remove('act')

})