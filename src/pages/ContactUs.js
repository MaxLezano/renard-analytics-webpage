import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactCard from '../components/ContactCard/ContactCard';

function ContactUs() {
  return (
    <>
      <Header className={'bgPages'} />
      <ContactCard />
      <Footer />
    </>
  );
}

export default ContactUs;