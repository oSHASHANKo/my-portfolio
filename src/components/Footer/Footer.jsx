import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Shashank Shetty. All rights reserved.</p>
      <div>
        <a href="https://github.com/oSHASHANKo" aria-label="GitHub Profile">
          GitHub
        </a>{" "}
        |
        <a
          href="https://www.linkedin.com/in/oshashanko/"
          aria-label="LinkedIn Profile"
        >
          {" "}
          LinkedIn
        </a>{" "}
        |
        <a href="https://x.com/oSHASHANKo" aria-label="Twitter Profile">
          {" "}
          Twitter
        </a>
      </div>
    </footer>
  );
};
