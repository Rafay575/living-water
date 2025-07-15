
import TestimonialsMain from "@/components/layout/main/TestimonialsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Testimonials = () => {
  return (
    <PageWrapper
      isNotHeaderTop={true}
      isHeaderRight={true}
      isTextWhite={true}
      isNavbarAppointmentBtn={true}
    >
     <TestimonialsMain />
    </PageWrapper>
  );
};

export default Testimonials;
