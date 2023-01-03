import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:yashraval2952200@gmail.com">
        <Button>Contact: yashraval2952200@gmail.com</Button>
        <Button>Contact: rohanprajapati403@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
