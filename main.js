let as=1;


document.querySelector('.assd').addEventListener('click', () => {
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.innerHTML = 'hello this is p ' ;
    let removebutton = document.createElement('button')
    removebutton.innerHTML = 'Remove'
    div.appendChild(p)
    div.appendChild(removebutton)
    document.querySelector('.body').appendChild(div)
    removebutton.addEventListener('click', () => {
        removebutton.parentElement.remove()
        localStorage.content = document.querySelector('.body').innerHTML


    })
    localStorage.content = document.querySelector('.body').innerHTML

})
if (localStorage.content) {
    let a = localStorage.content
    document.querySelector('.body').innerHTML = a
    let removebtns = document.querySelectorAll('div button')
    removebtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            button.parentElement.remove()
        })

    })



}
document.querySelector('.three .godown').addEventListener('click', () => {
    // window.scroll
    window.scrollTo(0, document.body.scrollHeight);



})
document.querySelector('.removeall').addEventListener('click', () => {
    document.querySelector('.body').innerHTML = ''
    localStorage.content = ''

})
document.querySelector('.top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        // behavior: 'smooth'
    });

}

)


// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// }