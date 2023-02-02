import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './form.module.scss'

const ContactForm = () => {
    const [submittedForm, setSubmittedForm] = useState(false);
    return (
        <>
            <Formik

                initialValues={{
                    name: '',
                    company: '',
                    email: '',
                    message: ''
                }}

                validate={(values) => {
                    let errors = {};
                    // Validate name
                    if (!values.name) {
                        errors.name = 'Please enter a name'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                        errors.name = 'The name can only contain letters and spaces'
                    }
                    // Validate company
                    if (!values.company) {
                        errors.company = 'Please enter a company'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.company)) {
                        errors.company = 'The name can only contain letters and spaces'
                    }
                    // Validate email
                    if (!values.email) {
                        errors.email = 'Please enter an email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                        errors.email = 'The email can only contain letters, numbers, periods, hyphens and underscores.'
                    }
                    return errors;
                }}

                onSubmit={async (values, { resetForm }) => {
                    console.log(values)
                    resetForm();
                    await fetch("https://formsubmit.co/ajax/dannielfrs@gmail.com", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            name: values.name,
                            company: values.company,
                            email: values.email,
                            message: values.message
                        })
                    })
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.log(error))

                    console.log('Formulario enviado');
                    setSubmittedForm(true);
                    setTimeout(() => setSubmittedForm(false), 5000);
                }}
            >
                {({ errors }) => (
                    <Form className={styles.form}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                            />
                            <ErrorMessage name="name" component={() => (<div className={styles.error}>{errors.name}</div>)} />
                        </div>
                        <div>
                            <label htmlFor="company">Company</label>
                            <Field
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Company"
                            />
                            <ErrorMessage name="company" component={() => (<div className={styles.error}>{errors.company}</div>)} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email@email.com"
                            />
                            <ErrorMessage name="email" component={() => (<div className={styles.error}>{errors.email}</div>)} />
                        </div>
                        <div>
                            <Field name="message" as="textarea" placeholder="Message" />
                        </div>
                        <button type="submit">Send</button>
                        {submittedForm && <p className={styles.success}>Form sent successfully</p>}
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default ContactForm;