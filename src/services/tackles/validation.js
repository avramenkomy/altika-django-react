/** Механизм валидации вводимы данных */


export default function validate(value_type, value) {
  /** Валидатор
   * 
   * value_type (String) - название процедуры проверки
   * value - значение для проверки
   * 
   * return:
   *      state (Bolean) - состояние проверки
   *      message - текст ошибки
   */
  const validator = new Validation(value_type, value);
  validator.check();

  return {
    state: validator.state,
    message: validator.error_message,
  }
}

class Validation {
  /** Обьект с механизмами валидации */
  constructor(value_type, value){
    this.value_type = value_type;
    this.value = value;
    this.state = true;
    this.error_message = '';
  }

  check() {
    switch (this.value_type) {
      case 'number':
        this._number();
        break;
        
      case 'string':
        this._string();
        break;

      case 'phone':
        this._phone();
        break;
      
      case 'email':
        this._email();
        break;

      default:
        this.state = false;
        this.error_message = 'Неизвестный тип валидации'
        break;
    }        
  }

  _number() {
    if (isNaN(this.value)) { // /^(0|[1-9]\d)$/   /^(0|[1-9]\d*)(\.[0-9]{1,2})?$/
      this.state = false;
      this.error_message = 'Значение должно быть числовым';
    }
  }

  _string() {
    if (this.value.length > 100) {
      this.state = false;
      this.error_message = 'Максимально кол-во символов 100';
    } else if (this.value.length === 0 || this.value.length === '') {
      this.state = false;
      this.error_message = 'Поле "Имя" не должно быть пустым'
    }
  }

  _phone() {
    if (this.value.length < 11) {
      this.state = false;
      this.error_message = 'Некорректный номер телефона'
    }
  }

  _email() {
    if ((this.value.indexOf('@') === 0) || !(this.value.includes('@')) || (this.value.match(/@/g || []).length > 1) || !(this.value.includes('.')) || (this.value.lastIndexOf('.') - this.value.indexOf('@') < 2) || (this.value.length - 2) - this.value.lastIndexOf('.') < 1) {
      this.state = false;
      this.error_message = 'Некорректный адрес электронной почты'
    }
  }
}