import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ReactMapGL, { Marker } from "react-map-gl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "react-awesome-modal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, ModalContent } from "./styles";
import { Creators as DevelopersActions } from "../../store/ducks/developers";

import Loading from "../../components/Loading";
import DeveloperBoxList from "../../components/DeveloperBoxList";

class Main extends Component {
  static propTypes = {
    addDeveloperRequest: PropTypes.func.isRequired,
    removeDeveloperRequest: PropTypes.func.isRequired,
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
    }).isRequired
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -16.680258528889357,
      longitude: -49.25652232147731,
      zoom: 12
    },
    visible: false,
    developerInput: "",
    latitude: "",
    longitude: ""
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  notifyError = () => {
    const { developers } = this.props;
    toast.error(developers.error, {
      position: toast.POSITION.TOP_RIGHT
    });
    developers.error = null;
  };

  handleMapClick = e => {
    const [longitude, latitude] = e.lngLat;
    document.getElementById("idDeveloperInput").focus();
    this.setState({
      visible: true,
      latitude,
      longitude
    });
  };

  closeModal = () => {
    this.setState({
      visible: false
    });
  };

  handleAddUserGithub = e => {
    e.preventDefault();
    const { developerInput, latitude, longitude } = this.state;
    const { addDeveloperRequest } = this.props;
    const developerDataInput = {
      developerInput,
      latitude,
      longitude
    };
    addDeveloperRequest(developerDataInput);
    this.setState({
      developerInput: "",
      latitude: "",
      longitude: "",
      visible: false
    });
  };

  handleRemoveUserGithub = developer => {
    const { removeDeveloperRequest } = this.props;
    removeDeveloperRequest(developer);
  };

  handleChangeViewport = event => {
    this.setState({ viewport: event });
  };

  render() {
    const { developerInput, visible, viewport } = this.state;
    const { developers } = this.props;
    return (
      <Fragment>
        {developers.loading && <Loading />}
        <Modal
          visible={visible}
          width="400"
          height="200"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <ModalContent>
            <h1>Adicionar novo usuário</h1>
            <Form onSubmit={this.handleAddUserGithub}>
              <input
                type="text"
                placeholder="Usuário no Github"
                value={developerInput}
                id="idDeveloperInput"
                autoComplete="off"
                onChange={e =>
                  this.setState({ developerInput: e.target.value })
                }
              />
              <div className="divButtons">
                <button
                  type="button"
                  onClick={() => this.closeModal()}
                  className="cancel"
                >
                  Cancelar
                </button>
                <button type="submit" className="save">
                  Salvar
                </button>
              </div>
            </Form>
          </ModalContent>
        </Modal>
        <DeveloperBoxList
          developers={developers}
          handleRemoveUserGithub={this.handleRemoveUserGithub}
        />
        <ReactMapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoibWFyY2lvcGVyIiwiYSI6ImNqcGs0cWNzcjAwZWcza282MTkzdWsxcmQifQ.AHDiWx-kdcLBy96MF_n4xw"
          onViewportChange={this.handleChangeViewport}
        >
          {developers.data.map(developer => (
            <div key={developer.id}>
              <Marker
                latitude={developer.latitude}
                longitude={developer.longitude}
                onClick={this.handleMapClick}
                captureClick
              >
                <img
                  style={{
                    borderRadius: 100,
                    width: 48,
                    height: 48,
                    border: "4px solid #7159c1"
                  }}
                  src={developer.avatar}
                  alt={developer.name}
                />
              </Marker>
            </div>
          ))}
        </ReactMapGL>
        <ToastContainer />
        {!!developers.error && this.notifyError()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  developers: state.developers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DevelopersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
