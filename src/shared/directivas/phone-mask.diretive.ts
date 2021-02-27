import { Directive, HostListener, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[phoneValidatorMask]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorMaskDirective,
      multi: true
    }
  ]
})

export class PhoneValidatorMaskDirective implements Validator {
  onTouched: any;
  onChange: any;
  value: '';

  @Input('phoneValidatorMask') phoneMask: string;

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    if (this.phoneValidator(control.value)) {
      return null;
    }
    return { phone: true };
  }

  @HostListener('keydown', ['$event'])
  onKeydown($event: any) {
    this.ignoreSome($event);
  }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    this.onKeyDown($event);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown($event: any) {
    const value = $event.target.value.replace(/\D/g, '');
    if ($event.keyCode === 8) {
      if (value.length < 1) {
        return null;
      } else if (value.length < 10) {
        $event.target.value = this.maskPhone(value, true);
        return value;
      } else if (value.length === 10) {
        $event.target.value = this.maskPhone(value);
        let retorno = false;
        retorno = this.phoneValidator(value);
        if (retorno === false) {
          return $event.target.value;
        }
      } else if (value.length > 10 && value.length <= 11) {
        $event.target.value = this.maskPhoneNine(value);
        return value;
      } else {
        return $event.target.value;
      }
    }

    if (value.length < 10) {
      $event.target.value = this.maskPhone(value);
      return value;
    } else if (value.length === 10) {
      let retorno = false;
      retorno = this.phoneValidator(value);
      $event.target.value = this.maskPhone(value);
      if (retorno === false) {
        return $event.target.value;
      }
    } else if (value.length > 10 && value.length <= 11) {
      $event.target.value = this.maskPhoneNine(value);
      return value;
    } else if (value.length > 11 && value.length <= 15) {
      $event.target.value = this.maskPhoneNine(value.substr(0, 11));
      return $event.target.value;
    } else {
      return $event.target.value;
    }
  }


  validPhone(value) {
    const validDigits = value.substr(0, 16);
    return validDigits;
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    const phoneValue: string = $event.target.value;
    const phoneMask = '(99) 9999-9999';
    const phoneNineMask = '(99) 99999-9999';

    if (phoneValue.length < 1) {
      return null;
    } else if ((phoneValue.length > 13 && phoneValue.length <= 15) || phoneValue.length === 16) {
      if (this.phoneValidator(phoneValue) === false) {
        return '';
      }
      return phoneValue;
    } else if ($event.target.value.length === phoneMask.length) {
      if (this.phoneValidator(phoneValue) === false) {
        return '';
      }
      return phoneValue;
    } else if (phoneValue.length < 13) {
      return $event.target.value;
    } else {
      return $event.target.value;
    }
  }

  setMask(value) {
    if (value.length < 10) {
      value = this.maskPhone(value);
      return value;
    } else if (value.length === 10) {
      let retorno = false;
      retorno = this.phoneValidator(value);
      value = this.maskPhone(value);
      if (retorno === false) {
        return value;
      }
    } else if (value.length > 10 && value.length <= 11) {
      value = this.maskPhoneNine(value);
      return value;
    } else {
      return value;
    }

    return value;
  }

  phoneValidator(phone: any): boolean {
    let phoneValid = false;
    phone = !phone || phone.replace(/\D/g, '');
    const phonesInvsRegex2 = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

    if (phone === true) {
      phoneValid = true;
    } else {
      if (phonesInvsRegex2.test(phone) === false) {
        phoneValid = false;
      } else {
        if (phone.length === 8) {
          phoneValid = false;
        } else {
          phoneValid = true;
        }

      }
    }
    return phoneValid;
  }

  maskPhone(value: string, isDeleting?): string {
    if (value === '') {
      return '';
    }
    value = value.replace(/\D/g, '');
    const sizePhone = value.length;
    const phoneMask = '(99) 9999-9999';
    const pad = phoneMask.replace(/\D/g, '').replace(/9/g, '_');
    const valueMask = value + pad.substring(0, pad.length - value.length);
    let valueMaskPos = 0;

    value = '';
    for (let i = 0; i < phoneMask.length; i++) {
      if (isNaN(parseInt(phoneMask.charAt(i), 10))) {
        value += phoneMask.charAt(i);
      } else {
        value += valueMask[valueMaskPos++];
      }
    }

    if (value.indexOf('_') > -1) {
      value = value.substr(0, value.indexOf('_'));
    }

    if (isDeleting) {
      if (sizePhone === 6) {
        value = value.substr(0, value.indexOf('-'));
      } else if (sizePhone === 2) {
        value = value.substr(0, value.indexOf(')'));
      }
    }

    return value;
  }

  maskPhoneNine(value: string): string {
    value = value.replace(/\D/g, '');

    const phoneMask = '(99) 99999-9999';
    const pad = phoneMask.replace(/\D/g, '').replace(/9/g, '_');
    const valueMask = value + pad.substring(0, pad.length - value.length);
    let valueMaskPos = 0;

    value = '';
    for (let i = 0; i < phoneMask.length; i++) {
      if (isNaN(parseInt(phoneMask.charAt(i), 10))) {
        value += phoneMask.charAt(i);
      } else {
        value += valueMask[valueMaskPos++];
      }
    }

    if (value.indexOf('_') > -1) {
      value = value.substr(0, value.indexOf('_'));
    }

    return value;
  }

  @HostListener('keypress', ['$event'])
  onKeypress($event: any) {
    this.ignoreSome($event);
    return $event.target.value.replace(/\D/g, '');
  }

  ignoreSome(event) {
    if (event.key !== undefined) {
      const k = event.key;
      if (
        !event.ctrlKey &&
        !event.metaKey &&
        k !== '0' &&
        k !== '1' &&
        k !== '2' &&
        k !== '3' &&
        k !== '4' &&
        k !== '5' &&
        k !== '6' &&
        k !== '7' &&
        k !== '8' &&
        k !== '9' &&
        k !== 'Backspace' &&
        k !== 'Tab' &&
        k !== 'Delete' &&
        k !== 'ArrowLeft' &&
        k !== 'ArrowRight'
      ) {
        event.preventDefault();
      }
    } else if (event.keyCode !== undefined) {
      const k = event.keyCode;
      if (
        k === 32 || // space
        k < 48 ||
        k > 57
      ) {
        // not decimal
        event.preventDefault();
      }
    }
  }
}