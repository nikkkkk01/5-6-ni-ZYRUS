const loanButton = document.getElementById('loan-button');
const nameInput = document.getElementById('name');
const mobileInput = document.getElementById('mobile');
const loanAmountInput = document.getElementById('loan-amount');

loanButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const mobile = mobileInput.value;
    const loanAmount = loanAmountInput.value;

    // create loan details string
    const loanDetails = `Hello master Zyrus, please let me loan ${loanAmount}, this is my number ${mobile} and I am ${name}. Thank you so much my glorious king Zyrus.`;

    // create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = loanDetails;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // redirect to Facebook page
    window.location.href = 'https://www.facebook.com/zyrus.guerra.1';
    alert('SEND IT TO HIM');
});