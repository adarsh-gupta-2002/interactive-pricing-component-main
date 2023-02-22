

const period = document.querySelector('.period')
const toggle = document.getElementById('toggle')
const body = document.getElementsByTagName('body')
const range = document.querySelector('.slider')
const doller = document.querySelector('.doller')
const preview = document.querySelector('.pageview')
var yearly = false
 
let pageview = ''
var money = ''

var selector = document.getElementById('selector')
var progressBar = document.getElementById('progressBar')


document.body.addEventListener('change' , () =>{
    
    function discount(money){
        let perYear = money * 12
        let discountAmount  =  (25 * perYear) / 100
        let afterDiscount =  (perYear) - (discountAmount)
        return afterDiscount
    
    }

    if(toggle.checked){
        period.textContent =  'year'
        yearly = true
    }
    else{
        period.textContent = 'month'
        yearly = false
    }


    if(range.value == 1){
        pageview = '10k'
        money = 8
        selector.style.left =  2 + '%'
        progressBar.style.width = 0 + '%'
    }
    else if(range.value == 2){
        pageview = '50k'
        money = 12
        selector.style.left =  25 + '%'
        progressBar.style.width = 25 + '%'
    }
    else if(range.value == 3){
        pageview = '100k'
        money = 16
        selector.style.left =  50 + '%'
        progressBar.style.width = 50 + '%'
    }
    else if(range.value == 4){
        pageview = '500k'
        money = 24
        selector.style.left =  75 + '%'
        progressBar.style.width = 75 + '%'
    }
    else{
        pageview = '1M'
        money = 36
        selector.style.left =  98 + '%'
        progressBar.style.width = 100 + '%'
    }

    if(yearly){
        money = discount(money)
    }
    

    doller.textContent =    money
    preview.textContent = pageview
 
})

