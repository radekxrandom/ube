import { message } from "antd";

export function handleInputChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}

const validate = (name, email, phone) => {
  const errors = {};
  let invalid = false;
  if (name.length < 3) {
    errors.name = "Username must be at least 3 characters long";
    invalid = true;
  }
  if (!email.length && !phone.length) {
    errors.email = "Either email or phone number is required";
    errors.phone = "Either email or phone number is required";
  }
  if (email) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
      invalid = true;
    }
  }
  if (phone.length) {
    if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone)) {
      errors.phone = "Invalid phone number";
    }
  }
  if (invalid) {
    return errors;
  } else {
    return false;
  }
};

const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export async function handleContact(e) {
  e.preventDefault();
  const { name, email, phone, body } = this.state;
  const errors = validate(name, email, phone);
  if (errors) {
    this.setState({ errors });
    message.warning("Correct errors");
    return false;
  }
  //clean up should there be errors from prev submit
  if (!isEmpty(this.state.errors)) {
    this.setState({
      errors: {}
    });
  }
  message.success("Sent");

  /*
  let mespies = {
    name, email, phone, message
  };
  let post = await axios.post("http://localhost:9000/api/sendmail", mespies);
  console.log(post.status);
  console.log(post.data);
  let rs = post.data;
  this.setState({
    resp: rs.err
  }); */
  this.setState({
    name: "",
    bpdy: "",
    email: "",
    phone: ""
  });
}

export async function handleQuotation(e) {
  e.preventDefault();
  const {
    name,
    age,
    occupation,
    health,
    fags,
    body,
    email,
    phone
  } = this.state;
  const errors = validate(name, email, phone);
  if (errors) {
    this.setState({ errors });
    message.warning("Correct errors");
    return false;
  }
  //clean up should there be errors from prev submit
  if (!isEmpty(this.state.errors)) {
    this.setState({
      errors: {}
    });
  }
  message.success("Sent");

  /*
  let mespies = {
    name,
    age,
    occupation,
    health,
    fags,
    message,
    email,
    phone
  };
  let post = await axios.post("http://localhost:9000/api/sendmail", mespies);
  console.log(post.status);
  console.log(post.data);
  let rs = post.data;
  this.setState({
    resp: rs.err
  });
  */
  this.setState({
    name: "",
    age: "",
    occupation: "",
    health: "",
    fags: "",
    body: "",
    email: "",
    phone: ""
  });
}
