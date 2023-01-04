import { useContext } from 'react';
import { ContactContext } from '../../contexts/ContactContext';
export const LogIn = ({
  onLogInClick
}) => {
  const { errors } = useContext(ContactContext);
    return(
        <div className="container-fluid bg-registration py-5">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="card border-0">
                    <div className="card-header bg-primary text-center p-4">
                      <h1 className="text-white m-0">LogIn</h1>
                      <span className={`errors ${errors.logInError ? "show" : "hide"}`}>{errors.logInError}</span>
                      
                    </div>
                    <div className="card-body rounded-bottom bg-white p-5">
                      <form onSubmit={onLogInClick}>
                        <div className="form-group-l center-l">
                          
                          <input type="text" id="username" name="username" className="form-control p-4 input-group" placeholder="Your username" required="required" />
                        </div>
                        <div className="form-group-l center-l">
                          <input type="password" id="password" name="password" className="form-control p-4 input-group" placeholder="Your password" required="required" />
                        </div>
                        <div className="form-group-l center-l" >
                          <button className="btn  btn-primary btn-block py-3 btn-l" type="submit">LogIn</button>
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