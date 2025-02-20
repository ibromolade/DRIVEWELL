import React from "react";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import ConfirmationContent from "./components/features/ConfirmationContent";

function page() {
  return (
    <>
      <Container>
        <Footer text="Revolutionizing Car Ownership and Maintenance in Nigeria" />
        <ConfirmationContent />
      </Container>
    </>
  );
}

export default page;
