import React from "react";

import Background from "../img/kate-trysh-3cCe37VGDiQ-unsplash.jpg";

const backImg = {
  backgroundImage: `url("${Background}")`
};

const About = () => {
  return (
    <div>
      <header className="header text-white" style={backImg} data-overlay="5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-8 mx-auto py-7">
              <h1 className="display-3 fw-500">About Nomad Gym</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="section">
          <div className="container">
            <div className="row gap-y align-items-center">
              <div className="col-md-8 mx-auto">
                <p className="lead">
                  We’re a team of creative and experienced designers and
                  developers. We used to work as freelancers and we know what do
                  you need and more that, we know what do your customers want
                  from you.
                </p>
                <p>
                  Everyone realizes why a new common language would be
                  desirable: one could refuse to pay expensive translators. To
                  achieve this, it would be necessary to have uniform grammar,
                  pronunciation and more common words.
                </p>
                <p>
                  If several languages coalesce, the grammar of the resulting
                  language is more simple and regular than that of the
                  individual languages. The new common language will be more
                  simple and regular than the existing European languages. It
                  will be as simple as Occidental; in fact, it will be
                  Occidental.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
