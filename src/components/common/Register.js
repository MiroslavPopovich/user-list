export const Register = ({ 
    onRegisterClick 
  }) => {
    return(
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
                      <input type="username" id="username" name="username" className="form-control p-4 input-group" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group-l  center-l">
                      <input type="email"  id="email" name="email" className="form-control p-4 input-group" placeholder="Email" required="required" />
                    </div>
                    <div className="form-group-l  center-l">
                      <input type="password" id="password" name="password" className="form-control p-4 input-group" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group-l  center-l">
                      <input type="password" id="repassword" name="repassword" className="form-control p-4 input-group" placeholder="Confirm password" required="required" />
                    </div>
                    <div className="form-group-l center-l" >
                      <button className="btn  btn-primary btn-block py-3 btn-l" type="submit">Register</button>
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