function calculateTotal() {
    const tileQuantity = document.getElementById('tileQuantity').value;
    const tileCost = document.getElementById('tileCost').value;
    const plasterQuantity = document.getElementById('plasterQuantity').value;
    const plasterCost = document.getElementById('plasterCost').value;
    const plumbingQuantity = document.getElementById('plumbingQuantity').value;
    const plumbingCost = document.getElementById('plumbingCost').value;

    const totalTile = tileQuantity * tileCost;
    const totalPlaster = plasterQuantity * plasterCost;
    const totalPlumbing = plumbingQuantity * plumbingCost;

    const totalCost = totalTile + totalPlaster + totalPlumbing;

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
    <p>Общее количество работ: ${amountSum}<p>
    <p>Общая стоимость работ: ${workSum}<p>
    `;
}