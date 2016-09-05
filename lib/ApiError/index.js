import autobind from 'class-autobind';

export default class ApiError {
  constructor(errorCode, errorMessage, errorParams, innerError, errorMessageTranslator) {
    autobind(this);

    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    this.errorParams = errorParams;
    this.innerError = innerError;
    this.errorMessageTranslator = errorMessageTranslator;
  }

  translate(message, messageParams, translator) {
    if (translator) {
      const translated = this
        .translator
        .translate(message, messageParams);

      return translated;
    }

    console.warn(`Missing translation for "${message}".`);// todo report to sentry
    return message;
  }

  toString() {
    return this.translate(this.errorMessage, this.errorParams, this.errorMessageTranslator);
  }
}
