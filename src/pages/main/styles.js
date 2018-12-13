import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 20px;
    font-size: 18px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 350px;
    flex: 1;
    height: 55px;
    padding: 0px 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    margin-bottom: 20px;
  }

  .divButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .save {
    width: 170px;
    height: 45px;
    padding: 0 20px;
    margin-left: 10px;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    background: #23952e;

    &:hover {
      background: #69952e;
    }
  }

  .cancel {
    width: 170px;
    height: 45px;
    padding: 0 20px;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    background: #999999;

    &:hover {
      background: #424242;
    }
  }
`;
