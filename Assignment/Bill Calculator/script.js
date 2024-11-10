document.getElementById("calculate-button").addEventListener("click", () => {
    const cost = parseFloat(document.getElementById("item-cost").value);
    const taxRate = parseFloat(document.getElementById("tax-rate").value);
    const tipRate = parseFloat(document.getElementById("tip-percentage").value);
    const discount = parseFloat(document.getElementById("discount").value) || 0;

    if (isNaN(cost) || isNaN(taxRate) || isNaN(tipRate)) {
        alert("Please enter valid numbers for cost, tax, and tip.");
        return;
    }

    const taxAmount = (taxRate / 100) * cost;
    const tipAmount = (tipRate / 100) * cost;
    const discountAmount = discount > cost ? cost : discount;
    const finalAmount = cost + taxAmount + tipAmount - discountAmount;

    document.getElementById("tax-amount").textContent = `Tax: $${taxAmount.toFixed(2)}`;
    document.getElementById("tip-amount").textContent = `Tip: $${tipAmount.toFixed(2)}`;
    document.getElementById("discount-amount").textContent = `Discount: $${discountAmount.toFixed(2)}`;
    document.getElementById("total-amount").textContent = `Total: $${finalAmount.toFixed(2)}`;
});
