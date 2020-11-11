import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container p-3">
          <div className="row">
            <div className="col-lg-4 col-12">
              <img
                src="/Images/logo.png"
                alt="logo"
                className="img-fluid"
                width="200"
              />
              <p className="text-muted">&copy; 2019 | All Rights Reserved</p>
              <span className="text-muted">
                Feel free to drop us an email at{" "}
              </span>
              <a href="mailto:team@dsc.scuniversityname.org">
                Dscoffical@gmail.com
              </a>
              <ul className="list-unstyled d-flex justify-content-center align-items-center fa-lg mt-3">
                <li className="">
                  <a href="#">
                    <i class="fab fa-discord"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram pl-3"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-github pl-3"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-youtube pl-3"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 col-12">
              <div className="row ">
                <div className="col-6">
                  <h4
                    class="text-left"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Programs
                  </h4>
                  <ul class="list-unstyled text-left">
                    <li>
                      <a
                        href="https://www.womentechmakers.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Women Techmakers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://developers.google.com/experts/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Developer Experts
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://developers.google.com/programs/community/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Developer Groups
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h4
                    class="text-left"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Information
                  </h4>
                  <ul class="list-unstyled text-left">
                    <li>
                      <a
                        href="https://www.womentechmakers.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Overview
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://developers.google.com/experts/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Technologies
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://developers.google.com/programs/community/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Workshop
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://developers.google.com/programs/community/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Collabration
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
