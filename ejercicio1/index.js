let lavadoBasico = 2000;
let lavadoPremium = 4000;
let selecionlavado;

let selecion = prompt(
  "Selecione el tipo de lavado que deseas:\n1.Lavado basico\n2.Lavado premium(Incluye secado y plancado)"
);

switch (selecion) {
  case "1":
    selecionlavado = "lavadoBasico";
    break;
  case "2":
    selecionlavado = "lavadoPremium";
    break;

  default:
    alert("Error este lavado no se encuentra");
    selecionlavado = false;
    break;
}

if (selecionlavado) {
  let cantidadpiezas = prompt(
    "Selecione el # de piezas que deseas debe estar de 1 y 20"
  );

  let aux = cantidadpiezas >= 1 && cantidadpiezas <= 20;
  if (aux) {
    {
      let costoTotal;
      if (selecionlavado == "lavadoBasico") {
        costoTotal = lavadoBasico * cantidadpiezas;
      } else if (selecionlavado == "lavadoPremium") {
        costoTotal = lavadoPremium * cantidadpiezas;
      } else {
        alert("error");
      }

      alert("El costoTotal es $" + costoTotal);
    }
  } else {
    alert("error");
  }
}

