import * as React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "#ff4500",
      marginBottom: "10px",
    }}
  >
    <div
      style={{
        margin: "0px auto",
        maxWidth: "960px",
        padding: "10px 1.0875rem 10px",
      }}
    >
      <StaticImage
        src="../images/nnn-icon.png"
        formats={["auto", "webp", "avif"]}
        alt="NNN Icon"
        width={70}
        style={{
          verticalAlign: "middle",
        }}
      />
      <h1
        style={{
          display: "inline-block",
          marginLeft: "10px",
          marginBottom: "0px",
          textAlign: "center",
        }}
      >
        {siteTitle}
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
