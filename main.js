import bubbleSort  from "./bubble.js";

console.log("jkljkj")
// using range take input for size of array
const input = document.querySelector('input');
let range = parseInt(input.value);
console.log(typeof range)

const inputSlider = document.querySelector('input');
document.querySelector('input')
                                .addEventListener('input',(e) =>
                                    {
                                         range =  e.target.value;
                                         
                                        const min = inputSlider.min;
                                        const max = inputSlider.max;
                                         inputSlider.style.backgroundSize = ( (range - min)*100/(max - min)) + "% 100%"   
                                    } )

function newarr(){

    //random numbers for random height
    let arr = [];
    for(let i = 0; i < range; i++){
            arr.push(Math.floor(Math.random()*range + 1 ))
        }

    //after clicking on new button previous bar should be removed
    let htmldiv = document.body.querySelector('.bars');
    htmldiv.innerHTML= "";
    
    for(let i = 0; i < range; i++){
        
        let height = arr[i];
        let element = document.createElement('div');

        element.classList.add('bardiv');
        element.classList.add(`bardiv${i}`);

        element.style.height = `${height*3}px`
        htmldiv.appendChild(element);
    }
   
}
newarr();

document
.querySelector('.newArray')
.addEventListener('click', newarr)

document
.querySelector('.bubble')
.addEventListener('click', bubbleSort(range))
