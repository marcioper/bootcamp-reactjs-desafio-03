import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 400px;
  background: #fff;
  border-radius: 3px;
  z-index: 99;
  top: 15px;
  left: 15px;
  bottom: 15px;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;

  ul {
    padding: 25px;
    list-style: none;
    li {
      width: 330px;
      button {
        border: 0;
        cursor: pointer;
      }
    }
  }

  .box {
    display: flex;
    align-items: center;
    width: 370px;
    flex-direction: row;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    float: left;
  }

  .inner {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    align-items: flex-start;
    min-width: 240px;

    strong {
      color: #444;
    }

    span {
      font-size: 14px;
      color: #666;
    }
  }

  hr {
    height: 1px;
    background-color: rgba(221, 226, 236, 0.877);
    border: none;
    margin: 20px 20px 20px 0px;
  }

  .fa-stack {
    font-size: 0.5em;
    width: 2.09em;
  }

  .fa-remove {
    position: relative;
    top: 1px;
    left: 4px;
  }

  .right {
    flex-direction: row;
    justify-content: space-between;

    .del {
      margin-left: 10px;
      color: #f00;
    }
    .arrow {
      margin-left: 20px;
    }
  }
`;
