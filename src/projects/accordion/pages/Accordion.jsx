import { useState } from "react";
import faq from "../API/faq.json";
import "../css/accordion.css";
import { FAQ } from "../components/FAQ";

export const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="accordion-section">
      <h1>Frequently Asked Questions</h1>
      <ul className="accordion-list">
        {faq.map((item) => (
          <FAQ
            key={item.id}
            item={item}
            toggleAccordion={toggleAccordion}
            openId={openId}
          />
        ))}
      </ul>
    </section>
  );
};
