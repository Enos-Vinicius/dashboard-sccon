export class Helper {

  constructor() {

  }

  public static defaultValue(maskedData) {
    if(maskedData == null) return "";

    return maskedData.replace(/\D+/g, '');
  }

  public static downloadFile(fileUrl: string, fileName: string) {
    const elAnchor = document.createElement('a');
    elAnchor.setAttribute('href', fileUrl);
    elAnchor.setAttribute('download', fileName);
    elAnchor.setAttribute('target', '_blank');
    elAnchor.click();
    elAnchor.remove();
  }

  public static openUrl(url: string) {
    const elAnchor = document.createElement('a');
    elAnchor.setAttribute('href', url);
    elAnchor.setAttribute('target', '_blank');
    elAnchor.click();
    elAnchor.remove();
  }

  public static checkMobile() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }

  public static checkIpad() {
    if (navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
    ) {
      return true;
    } else {
      return false;
    }
  }

  public static slugify(str: String) {
    return str.toString().toLowerCase()
      .replace(/\s+/g, '-')     // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-')   // Replace multiple - with single -
      .replace(/^-+/, '')       // Trim - from start of text
      .replace(/-+$/, '');
  }


  public static phoneMask(userInput) {
    const numbers = userInput.match(/\d/g);
    let numberLength = 0;
    if (numbers) {
      numberLength = numbers.join('').length;
    }

    if (numberLength > 10) {
      return ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      return ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
  }

  public static phoneMaskSemDDD(userInput) {
    const numbers = userInput.match(/\d/g);
    let numberLength = 0;
    if (numbers) {
      numberLength = numbers.join('').length;
    }

    if (numberLength > 8) {
      return [/\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      return [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
  }

  public static DDDMask(userInput) {
    const numbers = userInput.match(/\d/g);
    let numberLength = 0;
    if (numbers) {
      numberLength = numbers.join('').length;
    }

    if (numberLength > 2) {
      return [/\d/, /\d/, /\d/];
    } else {
      return [/\d/, /\d/];
    }
  }

  public static CEPMask() {
    return [/\d/, /\d/, /\d/, /\d/, /\d/,  '-', /\d/, /\d/,/\d/];
  }

  public static CPFMask() {
    return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  }

  public static CNPJMask() {
    return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  }

  public static nascimentoMask() {
    return [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  }

  public static validarCpf(cpf) {
    let sum = 0;
    let remainder;

    cpf = cpf.replace('.', '')
      .replace('.', '')
      .replace('-', '')
      .trim();

    let allEqual = true;
    for (let i = 0; i < cpf.length - 1; i++) {
      if (cpf[i] !== cpf[i + 1]) {
        allEqual = false;
      }
    }

    if (allEqual) {

      return false;
    }

    for (let i = 1; i <= 9; i++) {
      // tslint:disable-next-line:radix
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {

      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      // tslint:disable-next-line:radix
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    } remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
      remainder = 0;
    }
    // tslint:disable-next-line:radix
    if (remainder !== parseInt(cpf.substring(10, 11))) {

      return false;
    }

    return true;
  }

  public static validarCnpj(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') {    return false; }

    if (cnpj.length != 14) {

      return false;
    }

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == '00000000000000' ||
      cnpj == '11111111111111' ||
      cnpj == '22222222222222' ||
      cnpj == '33333333333333' ||
      cnpj == '44444444444444' ||
      cnpj == '55555555555555' ||
      cnpj == '66666666666666' ||
      cnpj == '77777777777777' ||
      cnpj == '88888888888888' ||
      cnpj == '99999999999999') {
      return false;
    }

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {

      return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {

      return false;
    }

    return true;
  }

  public static transformTime(value: number): string {
    if (value > 0 && value / 60 < 1) {
      return value + ' min';
    }
    else if (value > 60 && value / 60 > 1) {
      var hours = Math.trunc(value / 60);
      var minutes = value % 60;

      var retorno;
      if (minutes == 0) {
        retorno = "0" + hours + ":" + minutes + '0' + ' h';
      }
      else {
        retorno = "0" + hours + ":" + minutes + ' h';
      }
      return retorno
    }
    else {
      return value / 60 + ' h';
    }
  }

}
