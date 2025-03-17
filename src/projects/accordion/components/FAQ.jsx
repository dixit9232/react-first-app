export const FAQ = ({ item, toggleAccordion, openId }) => {
  const { id, question, answer } = item;
  const isActive = id === openId;

  return (
    <li className={`accordion-item ${isActive ? "active" : ""}`}>
      <div className="accordion-flex">
        <h3>{question}</h3>
        <button
          onClick={() => toggleAccordion(id)}
          className={isActive ? "active-button" : ""}
        >
          {isActive ? "Hide" : "Show"}
        </button>
      </div>
      <p className="accordion-answer">{answer}</p>
    </li>
  );
};
