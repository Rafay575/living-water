import Adress from "@/components/sections/address/Adress";
import ContactPrimary from "@/components/sections/contacts/ContactPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const ContactMain = () => {
  return (
    <main>
      <HeroPrimary title={"Contact Us"} text="Contact" />
      <Adress />
      <ContactPrimary />
      <br/>
      <br/>
      <br/>
    </main>
  );
};

export default ContactMain;
