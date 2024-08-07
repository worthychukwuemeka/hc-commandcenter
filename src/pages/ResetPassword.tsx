import React from 'react'

function ResetPassword() {
  return (
    <div>
      <main className="auth-minimal-wrapper">
        <div className="auth-minimal-inner">
          <div className="minimal-card-wrapper">
            <div className="card mb-4 mt-5 mx-4 mx-sm-0 position-relative">
              <div
                className="wd-50 bg-white p-2 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50">
                <img src="assets/images/logo-abbr.png" alt="" className="img-fluid" />
              </div>
              <div className="card-body p-sm-5">
                <h2 className="fs-20 fw-bolder mb-4">Reset</h2>
                <h4 className="fs-13 fw-bold mb-2">Reset your password</h4>
                <p className="fs-12 fw-medium text-muted">
                  Create a new password
                </p>
                <form action="#" className="w-100 mt-4 pt-2">
                  <div className="mb-4">
                    <input className="form-control" placeholder="New password" required />
                  </div>
                  <div className="mb-4">
                  <input className="form-control" placeholder="Repeat password" required />
                  </div>
                  <div className="mt-5">
                    <button type="submit" className="btn btn-lg btn-primary w-100">
                      Reset Now
                    </button>
                  </div>
                </form>
                <div className="mt-5 text-muted">
                  <span>Don't have an account?</span>
                  <a href="auth-register-minimal.html" className="fw-bold">Create an Account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ResetPassword