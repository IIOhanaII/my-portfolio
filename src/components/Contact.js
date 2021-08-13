import React from "react";
import "./Contact.css";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Row,
  Col,
  Label,
  Input,
} from "reactstrap";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  // Retrieve emailjs service keys to perform requests
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
    process.env;

  const notifySuccess = () =>
    toast.success("✉ Message bien reçu !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyFailure = () =>
    toast.error(
      "Oops, une erreur s'est produite... Veuillez bien ré-essayer !",
      {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  return (
    <div className="component">
      <div className="white-edges-component contact-component d-flex flex-column justify-content-center text-light">
        <h3
          className="mb-4 mb-sm-5 text-center"
          style={{ fontFamily: "Roboto" }}
        >
          Me contacter
        </h3>
        <Container>
          <Row className="mb-2 mb-sm-3">
            <Col sm="2" lg="4"></Col>
            <Col sm="8" lg="4" className="d-flex justify-content-evenly">
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/in/arthur-j-barbey/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="https://twitter.com/BarbeyArthur"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
              </a>
              <a
                className="btn btn-social-icon btn-github-square btn-primary"
                href="https://github.com/IIOhanaII"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
              </a>
            </Col>
          </Row>
          <Formik
            initialValues={{ email: "", subject: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Veuillez entrer une adresse email";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Veuillez entrer une adresse email valide";
              }
              if (!values.subject) {
                errors.subject = "Veuillez préciser le sujet de votre message";
              } else if (values.subject.length > 75) {
                errors.subject = "Le sujet ne peut pas excéder 75 caractères";
              }
              if (!values.message) {
                errors.message = "Veuillez rédiger un message";
              }
              return errors;
            }}
            onSubmit={(values, actions) => {
              // Retrieve form data to use them in emailjs request
              const templateParams = {
                email: values.email,
                subject: values.subject,
                message: values.message,
              };
              emailjs
                .send(
                  REACT_APP_SERVICE_ID,
                  REACT_APP_TEMPLATE_ID,
                  templateParams,
                  REACT_APP_USER_ID
                )
                .then(
                  (result) => {
                    notifySuccess();
                    actions.resetForm();
                    // Re enable message sending button
                    actions.setSubmitting(false);
                  },
                  (error) => {
                    notifyFailure();
                    actions.setSubmitting(false);
                  }
                );
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form id="contact-form" onSubmit={handleSubmit}>
                <FormGroup row className="mb-sm-3">
                  <Label
                    for="email"
                    sm={{ size: "1", offset: 1 }}
                    lg={{ size: "1", offset: 3 }}
                    className="text-start"
                  >
                    Email
                  </Label>
                  <Col sm="8" lg="4">
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <span style={{ color: "#fb8500", fontSize: "0.9rem" }}>
                        {errors.email}
                      </span>
                    ) : null}
                  </Col>
                </FormGroup>
                <FormGroup row className="mb-sm-3">
                  <Label
                    for="subject"
                    sm={{ size: "1", offset: 1 }}
                    lg={{ size: "1", offset: 3 }}
                    className="text-start"
                  >
                    Sujet
                  </Label>
                  <Col sm="8" lg="4">
                    <Input
                      id="subject"
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                    />
                    {errors.subject && touched.subject ? (
                      <span style={{ color: "#fb8500", fontSize: "0.9rem" }}>
                        {errors.subject}
                      </span>
                    ) : null}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="message"
                    sm={{ size: "1", offset: 1 }}
                    lg={{ size: "1", offset: 3 }}
                    className="text-start"
                  >
                    Message
                  </Label>
                  <Col sm="8" lg="4">
                    <Input
                      id="message"
                      type="textarea"
                      name="message"
                      // Print less textarea rows for devices with a screen height less or equal than 667px
                      rows={window.screen.height <= 667 ? 2 : 7}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    {errors.message && touched.message ? (
                      <span style={{ color: "#fb8500", fontSize: "0.9rem" }}>
                        {errors.message}
                      </span>
                    ) : null}
                  </Col>
                </FormGroup>
                <FormGroup row className="text-center mt-3 mt-sm-4">
                  <Col>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      style={{ backgroundColor: "#fb8500" }}
                    >
                      Envoyer
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            )}
          </Formik>
          {/* Notify if the message has been successfully sent or not */}
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Zoom}
          />
        </Container>
      </div>
    </div>
  );
};
