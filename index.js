const btns = document.querySelectorAll('button');

const clickBtn = (btn) => {
    btn.click();
};

const autoClick = (times, interval) => {
    let count = 0;
    const intervalId = setInterval(() => {
        const targetBtn = Array.from(btns).find(button => {const buttonText = button.textContent.toLowerCase();
return buttonText.includes('Ethscribe') || buttonText.includes('ethscribe');
});
if (targetBtn) {

clickBtn(targetBtn);
count++;
console.log('click time = ' + count);
if (count === times) {
clearInterval(intervalId);
}
}
}, interval);
};
autoClick(100000, 500);
