import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import Container from "../components/Container";

const TermsAndContions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">Here is our Policy</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndContions;
