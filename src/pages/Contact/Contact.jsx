import ReactFlipCard from "reactjs-flip-card";
import contactsData from "./contacts";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import "./Contact.scss";

export const Contact = () => {
  const styles = {
    card: {
      overflow: "hidden",
      cursor: "pointer",
      width: "20vw",
      height: "40vh",
      border: "2px solid orange",
      borderRadius: "2rem",
    },
  };
  const isDarkMode = useContext(ThemeContext);

  return (
    <div className={`Contact ${isDarkMode ? "Contact" : "light"}`}>
      <h1>Contacts</h1>
      <div className="flippy-card ">
        {contactsData.map((contact, index) => (
          <ReactFlipCard
            key={index}
            direction={"vertical"}
            flipTrigger={"onClick"}
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={<img src={contact.icon} alt="icon" />}
            backComponent={
              <div>
                <p>{contact.title}</p>
                <a href={contact.url} target="_blank" rel="noopener noreferrer">
                  {contact.url}
                </a>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};
