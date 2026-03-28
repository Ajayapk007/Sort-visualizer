function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2;
    el2.style.height = transform1;
}

async function selectionSort(range) {
    for (let i = 0; i < range - 1; i++) {
        let min_idx = i;
         
        let currentBoundaryBar = document.querySelector(`.bardiv${i}`);
        currentBoundaryBar.style.background = "blue";  

        for (let j = i + 1; j < range; j++) {
            let bar1 = document.querySelector(`.bardiv${min_idx}`);
            let bar2 = document.querySelector(`.bardiv${j}`);

            bar2.style.background = "red";  

            let com1 = window.getComputedStyle(bar1).height;
            let com2 = window.getComputedStyle(bar2).height;
 
            if (com2.trueInt() < com1.trueInt()) {
                if (min_idx !== i) { 
                    document.querySelector(`.bardiv${min_idx}`).style.background = "#f3e310";
                }
                min_idx = j;
                bar2.style.background = "orange";  
            }

            await new Promise(resolve => setTimeout(resolve, 10));
 
            if (j !== min_idx) {
                bar2.style.background = "#f3e310";
            }
        }
 
        if (min_idx !== i) {
            let barMin = document.querySelector(`.bardiv${min_idx}`);
            swap(currentBoundaryBar, barMin); 
            await new Promise(resolve => setTimeout(resolve, 50));
            barMin.style.background = "#f3e310";
        }
 
        currentBoundaryBar.style.background = "#04ab52";
    }
 
    document.querySelector(`.bardiv${range - 1}`).style.background = "#04ab52";
}

String.prototype.trueInt = function () {
    let numericString = this.replace(/\D/g, '');
    return parseInt(numericString, 10);
};

export default selectionSort;