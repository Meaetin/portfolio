import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    // return (
    //     <form action="https://formspree.io/f/xpzgprqr" method="POST">
    //     <label>
    //       Your email:
    //       <input type="email" name="email" />
    //     </label>
    //     <label>
    //       Your message:
    //       <textarea name="message"></textarea>
    //     </label>
    //     <button type="submit">Send</button>
    //   </form>
    // );
    const [state, handleSubmit] = useForm("xpzgprqr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
 
export default ContactForm;