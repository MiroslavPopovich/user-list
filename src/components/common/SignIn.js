export const SignIn = () => {
    return(
        <div className="container-fluid bg-registration py-5">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="card border-0">
                    <div className="card-header bg-primary text-center p-4">
                      <h1 className="text-white m-0">Sign In</h1>
                    </div>
                    <div className="card-body rounded-bottom bg-white p-5">
                      <form>
                        <div className="form-group-l">
                          <input type="text" className="form-control p-4" placeholder="Your email" required="required" />
                        </div>
                        <div className="form-group-l">
                          <input type="password" className="form-control p-4" placeholder="Your password" required="required" />
                        </div>
                        <div className="form-group-l center-l" >
                          <button className="btn  btn-primary btn-block py-3 btn-l" type="submit">Sign In</button>
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