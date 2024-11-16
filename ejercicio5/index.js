let bestsellers = 500;
let literatura = 100;
let academicos = 0;
let libroSelecionado;
let selecion_libros = prompt(
  "Bienvenidos\nIngrese el libro que deseas:\n1.Bestsellers\n2.Literatura\n3.Academicos"
);

switch (selecion_libros) {
  case "1":
    libroSelecionado = "bestsellers";
    break;
  case "2":
    libroSelecionado = "literatura";
    break;
  case "3":
    libroSelecionado = "academicos";
    break;

  default:
    alert("No existe ese libro");
    libroSelecionado = false;
    break;
}

if (libroSelecionado) {
  let prestamodias = prompt(
    "selecione el # de dias de prestamo debe estas entre 1 y 30"
  );
  let aux = prestamodias >= 1 && prestamodias <= 30;
  if (aux) {
    let prestamolibros = prompt("cuantos libros quieres que te prestemos");
    if (prestamolibros >= 1 && prestamolibros <= 5) {
      let costoTotal;

      if (libroSelecionado=="bestsellers") {
        costoTotal = bestsellers * prestamodias * prestamolibros;
        if(prestamodias>10){
          costoTotal = costoTotal - (costoTotal * 0.1)
        }
      } else if (libroSelecionado=="literatura") {
        costoTotal = literatura * prestamodias * prestamolibros;
        if(prestamodias>10){
          costoTotal = costoTotal - (costoTotal * 0.1)
        }
      } else{
        costoTotal = 0;
      } 

      alert("el costo total es $" + costoTotal);
    } else {
      alert("error esta cantidad no se puede ");
    }
  } else {
    alert("No es un dia valido");
  }
}
