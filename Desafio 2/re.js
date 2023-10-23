document.addEventListener("DOMContentLoaded", function() {
    const seleccion = document.getElementById("seleccion");
    const description = document.getElementById("description");
    const income = document.getElementById("income");
    const Calcular = document.getElementById("Calcular");
    const registrosIngresos = document.getElementById("Contenerdoringresos");
    const registrosEgresos = document.getElementById("Contenerdoregresos");
    let totalSumIngresos = 0;
    let totalSumEgresos = 0;

    Calcular.addEventListener("click", function() {
        const tipo = seleccion.value;
        const descripcion = description.value;
        const monto = parseFloat(income.value);

        if (descripcion.trim() === "" || isNaN(monto)) {
            alert("Por favor, ingrese una descripción y un monto válido.");
            return;
        }

        // Crear un nuevo elemento de transacción
        const transaction = document.createElement("div");
        transaction.textContent = `${descripcion}: $${monto.toFixed(2)}`;

        if (tipo === "Ingreso") {
            totalSumIngresos += monto;
            registrosIngresos.appendChild(transaction);
        } else if (tipo === "Egreso") {
            totalSumEgresos += monto;
            registrosEgresos.appendChild(transaction);
        }

        // Actualizar el "Valorpresupuesto" que muestra la suma
        document.getElementById("Valorpresupuesto").textContent = `Total: $${(totalSumIngresos - totalSumEgresos).toFixed(2)}`;

        // Limpiar los campos de entrada
        description.value = "";
        income.value = "";
    });

    // Mostrar registros de ingresos
    document.getElementById("verIngresos").addEventListener("click", function() {
        registrosIngresos.style.display = "block";
        registrosEgresos.style.display = "none";
    });

    // Mostrar registros de egresos
    document.getElementById("verEgresos").addEventListener("click", function() {
        registrosIngresos.style.display = "none";
        registrosEgresos.style.display = "block";
    });
});
