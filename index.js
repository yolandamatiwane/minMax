let inp = document.querySelector('input')
let btn1 = document.querySelector('#min')
let btn2 = document.querySelector('#max')
let ans1 = document.querySelector('#ans1')
let ans2 = document.querySelector('#ans2')

btn1.addEventListener('click',()=>{
    let num = inp.value.split(',').map(Number);
    ans1.innerText = Math.min(...num)
})

btn2.addEventListener('click',()=>{
    let num = inp.value.split(',').map(Number);
    ans2.innerText = Math.max(...num)
})

// console.log(min)
// console.log(max)