function calculateLoan() {
    const loanAmount = document.getElementById("loanAmount").value;
    const interestRate = document.getElementById("interestRate").value;
    const totalMonths = document.getElementById("totalMonths").value;

    const monthlyRate = interestRate / 1200; // perMonth(1/12) * percent(1/100)
    const monthlyPayment = loanAmount * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), totalMonths))); //Monthly Payment = (Loan Amount * Monthly Interest Rate) / (1 - (1 + Monthly Interest Rate) ^ (-Total Number of Months))
    const totalPayment = monthlyPayment * totalMonths;

    document.getElementById("monthlyPayment").value = monthlyPayment.toFixed(2);
    document.getElementById("totalPayment").value = totalPayment.toFixed(2);
}
