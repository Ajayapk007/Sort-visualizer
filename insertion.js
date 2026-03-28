function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2;
    el2.style.height = transform1;
}

async function insertionSort(range) {
    for (let i = 1; i < range; i++) {
        let j = i;

        while (j > 0) {
            let bar1 = document.querySelector(`.bardiv${j - 1}`);
            let bar2 = document.querySelector(`.bardiv${j}`);

            bar1.style.background = "red";
            bar2.style.background = "red";

            let com1 = window.getComputedStyle(bar1).height;
            let com2 = window.getComputedStyle(bar2).height;

            if (com1.trueInt() > com2.trueInt()) {
                swap(bar1, bar2);
                j--;
            } else {
                bar1.style.background = "#f3e310";
                bar2.style.background = "#f3e310";
                break;
            }

            await new Promise(resolve => setTimeout(resolve, 2));

            bar1.style.background = "#f3e310";
            bar2.style.background = "#f3e310";
        }
 
        document.querySelector(`.bardiv${i}`).style.background = "#04ab52";
    }
 
    document.querySelector(`.bardiv0`).style.background = "#04ab52";
}

String.prototype.trueInt = function () {
    let numericString = this.replace(/\D/g, '');
    return parseInt(numericString, 10);
};

export default insertionSort;