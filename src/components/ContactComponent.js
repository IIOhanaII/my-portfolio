import React from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
} from "reactstrap";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactComponent = () => {
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
    <div className="white-edges d-flex flex-column justify-content-center text-light contact">
      <h1 className="mb-5 text-center">Me contacter</h1>
      <Container>
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
                  console.log(result.text);
                  notifySuccess();
                  actions.resetForm();
                  actions.setSubmitting(false);
                },
                (error) => {
                  console.log(error.text);
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
              <FormGroup row className="mb-3">
                <Label for="email" sm={2} className="text-start">
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <Label for="subject" sm={2} className="text-start">
                  Sujet
                </Label>
                <Col sm={10}>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                  />
                  {errors.subject && touched.subject && errors.subject}
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <Label for="message" sm={2} className="text-start">
                  Message
                </Label>
                <Col sm={10}>
                  <Input
                    id="message"
                    type="textarea"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  {errors.message && touched.message && errors.message}
                </Col>
              </FormGroup>
              <FormGroup row className="text-center">
                <Col>
                  <Button type="submit" disabled={isSubmitting} color="success">
                    Envoyer
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          )}
        </Formik>
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
  );
};
