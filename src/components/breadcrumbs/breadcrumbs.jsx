import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.scss";

export default function Breadcrumbs({links}) {
  return (
    <ul className="breadcrumbs">
      {links.map(({id, url, text}) => (
        <li key={id} className="breadcrumbs__item">
          {(url)
            ? <Link to={url} className="breadcrumbs__link">{text}</Link>
            : <span>{text}</span>}</li>
      ))}
    </ul>
  );
}

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string,
    text: PropTypes.string.isRequired,
  })),
};
