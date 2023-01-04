import { useState } from "react";
export const Register = ({
  onRegisterClick
}) => {
  const usernamePattern = /^[A-Za-z0-9]{3,16}$/;
  const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  //passwordPattern regex need to be checked 

  const [values, setValues] = useState({
    username: { value: '', onBlur: false, error: false, validate: inputValidator, pattern: usernamePattern },
    email: { value: '', onBlur: false, error: false, validate: inputValidator, pattern: emailPattern },
    password: { value: '', onBlur: false, error: false, validate: inputValidator, pattern: passwordPattern },
    repassword: { value: '', onBlur: false, error: false, validate: inputValidator, pattern: '' },
  });


  function inputValidator(testStr, pattern) {
    const regex = new RegExp(pattern);
    return !regex.test(testStr);
  }

  function onBlurHandler(e) {

    let error = values[e.target.name].error;

    if (!values[e.target.name].onBlur) {
      const testStr = e.target.value;
      error = values[e.target.name].validate(testStr, values[e.target.name].pattern);
    }
    if (e.target.name === 'password') {
      setValues(state => ({
        ...state,
        repassword: {
          value: values.repassword.value,
          onBlur: values.repassword.onBlur,
          error: values.repassword.error,
          validate: values.repassword.validate,
          pattern: `^${e.target.value}$`
        }
      }));
    }

    setValues(state => ({
      ...state,
      [e.target.name]: {
        value: e.target.value,
        onBlur: true,
        error: error,
        validate: values[e.target.name].validate,
        pattern: values[e.target.name].pattern
      }
    }));

  };

  function onChangeHandler(e) {

    let error = values[e.target.name].error;

    if (values[e.target.name].onBlur) {
      const testStr = e.target.value;
      error = values[e.target.name].validate(testStr, values[e.target.name].pattern)
    }

    if (e.target.name === 'password') {
      setValues(state => ({
        ...state,
        repassword: {
          value: '',
          onBlur: values.repassword.onBlur,
          error: values.repassword.onBlur ? true : values.repassword.error,
          validate: values.repassword.validate,
          pattern: `^${e.target.value}$`,
        }
      }));
    }

    setValues(state => ({
      ...state,
      [e.target.name]: {
        value: e.target.value,
        onBlur: values[e.target.name].onBlur,
        error: error,
        validate: values[e.target.name].validate,
        pattern: values[e.target.name].pattern
      }
    }));
  };

  //console.log(values.password.value)
  //console.log(values.repassword.value)

  return (
    <div className="container-fluid bg-registration py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-primary text-center p-4">
                <h1 className="text-white m-0">Register</h1>
              </div>
              <div className="card-body rounded-bottom bg-white p-5">
                <form onSubmit={onRegisterClick}>
                  <div className="form-group-l  center-l">
                    <input type="username" id="username" name="username" value={values.username.value} className={`${values.username.error ? "form-control-error input-error" : "form-control"}  p-4 input-group`} placeholder="Username" required="required" onBlur={onBlurHandler} onChange={onChangeHandler} />
                  </div>
                  <div className="form-group-l  center-l">
                    <input type="email" id="email" name="email" value={values.email.value} className={`${values.email.error ? "form-control-error input-error" : "form-control"}  p-4 input-group`} placeholder="Email" required="required" onBlur={onBlurHandler} onChange={onChangeHandler} />
                  </div>
                  <div className="form-group-l  center-l">
                    <input type="password" id="password" name="password" value={values.password.value} className={`${values.password.error ? "form-control-error input-error" : "form-control"}  p-4 input-group`} placeholder="Password" required="required" onBlur={onBlurHandler} onChange={onChangeHandler} />
                  </div>
                  <div className="form-group-l  center-l">
                    <input type="password" id="repassword" name="repassword" value={values.repassword.value} disabled={(values.password.value === '' || values.password.error || !values.password.onBlur) ? true : false} className={`${values.repassword.error ? "form-control-error input-error" : "form-control"}  p-4 input-group`} placeholder="Confirm password" required="required" onBlur={onBlurHandler} onChange={onChangeHandler} />
                  </div>
                  <div className="form-group-l center-l" >
                    <button className="btn  btn-primary btn-block py-3 btn-l" type="submit" disabled={(values.username.error || values.email.error || values.password.error || values.repassword.error || values.username.value === '' || values.email.value === '' || values.password.value === '' || values.repassword.value === '') ? true : false}>Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}