import { message } from "antd";

class Validator {
  _isEmailValid(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  }
  _isPhoneValid(phone) {
    return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone);
  }
  createErrObject() {
    return {
      email: "Invalid email address",
      phone: "Invalid phone address"
    };
  }
  validate(phone, email) {
    const phoneCheck = this._isPhoneValid(phone);
    const emailCheck = this._isEmailValid(email);
    if (!phoneCheck && !emailCheck) {
      return true;
    }
    return false;
  }
}

export default function useFormSubmit(fields, setErr, url) {
  const submit = async e => {
    e.preventDefault();
    const validator = new Validator();
    if (validator.validate(fields.phone, fields.email)) {
      const errors = validator.createErrObject();
      setErr(errors);
      message.warning("Correct errors");
      return false;
    }
    message.success("Sent");
  };

  return [submit];
}
