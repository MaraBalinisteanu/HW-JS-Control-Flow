auto = prompt('Introduceti vehiculul');
capacitate = prompt('Introduceti capacitatea cilindrica a vehiculului');

switch (auto) {
  case 'motociclete':
  case 'motocicleta':
  case 'tricicluri':
  case 'triciclu':
  case 'cvadricicluri':
  case 'cvadriciclu': {
    if (capacitate <= 1600) {
      console.log(Math.round((8 * capacitate) / 200));
    } else {
      console.log(Math.round((9 * capacitate) / 200));
    }
    break;
  }
  case 'autoturism':
  case 'autoturisme': {
    if (capacitate <= 1600) {
      console.log(Math.round((8 * capacitate) / 200));
    } else if (capacitate > 1600 && capacitate <= 2000) {
      console.log(Math.round((22 * capacitate) / 200));
    } else if (capacitate > 2000 && capacitate <= 2600) {
      console.log(Math.round((85 * capacitate) / 200));
    } else if (capacitate > 2600 && capacitate <= 3000) {
      console.log(Math.round((171 * capacitate) / 200));
    } else if (capacitate > 3000) {
      console.log(Math.round((345 * capacitate) / 200));
    }
    break;
  }
  case 'autobuz':
  case 'autobuze':
  case 'autocar':
  case 'autocare':
  case 'microbuz':
  case 'microbuze': {
    console.log(Math.round((28 * capacitate) / 200));
    break;
  }
  case 'vehicul cu tractiune mecanica': 
  case 'vehicule cu tractiune mecanica': {
    console.log(Math.round((34 * capacitate) / 200));
    break;
  }
  case 'tractor':
  case 'tractoare': {
    console.log(Math.round((22 * capacitate) / 200));
    break;
  }
  default:
    console.log('Introduceti, va rog, un nume valid');
}
