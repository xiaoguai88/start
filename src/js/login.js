// $('.dl').click(function(){
//     $('a') = $('.phone').value;
//     $('b') = $('.pw').value;
//     if(!$('a') || !$('b')){
//         $('.errinfo').style.disply = 'block'
//     }
// })
let dl = document.querySelector('.login-dl')
console.log(dl)

dl.click=function(){
    let uname = document.querySelector('.phone')
    let upass = document.querySelector('.pw')
    let errinfo = document.querySelector('.errinfo')
    console.log(uname)
    let un = uname.value;
    let up = upass.value;
    if(!un||!up){
        errinfo.style.display = 'block'
            }
}
