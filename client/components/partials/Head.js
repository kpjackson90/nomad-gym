import React from "react";

import Background from "../../img/kate-trysh-3cCe37VGDiQ-unsplash.jpg";

const backImg = {
  backgroundImage: `url("${Background}")`
};

const Head = () => {
  return (
    <div>
      <header className="header text-white" style={backImg} data-overlay="5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-8 mx-auto py-7">
              <h1 className="display-3 fw-500">Workout on the go</h1>
              <p className="lead-2 mt-6">Find your ideal gym on the road</p>
              <form className="rounded p-5 mt-7">
                <div className="row">
                  <div className="col">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="ti-search mt-1"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select Country..."
                      />
                    </div>
                  </div>

                  <div className="col-auto">
                    <button className="btn btn-lg btn-primary" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Head;
