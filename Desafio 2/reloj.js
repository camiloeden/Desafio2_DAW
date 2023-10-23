const fechaActual = new Date();
const mes = fechaActual.toLocaleString('default', { month: 'long' });
const año = fechaActual.getFullYear();

document.write("Presupuesto de " + mes + " " +año);