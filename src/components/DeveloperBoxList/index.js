import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const DeveloperBoxList = ({ developers, handleRemoveUserGithub }) => (
  <Container>
    <ul>
      {developers.data.length === 0 && (
        <li>
          <center>Nenhum usuário adicionado.</center>
        </li>
      )}
      {developers.data.map(developer => (
        <li key={developer.id}>
          <div className="box">
            <img src={developer.avatar} alt={developer.name} />
            <div className="inner">
              <strong>{developer.name}</strong>
              <span>{developer.login}</span>
            </div>
            <div className="right">
              <span className="del fa-stack">
                <i className="fa fa-circle fa-stack-2x" />
                <button
                  type="button"
                  title="Remove"
                  onClick={handleRemoveUserGithub.bind(this, developer)}
                >
                  <i
                    className="fa fa-remove fa-stack-1x"
                    style={{ color: "#FFF" }}
                  />
                </button>
              </span>
              <i className="arrow fa fa-angle-right fa-lg" />
            </div>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  </Container>
);

DeveloperBoxList.propTypes = {
  developers: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
      })
    ),
    error: PropTypes.any
  }).isRequired,
  handleRemoveUserGithub: PropTypes.func.isRequired
};

export default DeveloperBoxList;
