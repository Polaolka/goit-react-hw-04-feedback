import styled from 'styled-components';

export const LiBtn = styled.li`
  display: flex;
  .btn-good {
    background-color: cornflowerblue;
    color: white;
    font-size: 20px;
    padding: 5px 10px 5px;
    border: none;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: background-color 300ms ease-out, box-shadow 300ms ease-out;
    :hover {
      background-color: #4a7bd8;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  }
  .btn-neutral {
    background-color: #ffd700;
    color: white;
    font-size: 20px;
    padding: 5px 10px 5px;
    border: none;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: background-color 300ms ease-out, box-shadow 300ms ease-out;
    :hover {
      background-color: #daa520;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  }
  .btn-bad {
    background-color: #e52d52;
    color: white;
    font-size: 20px;
    padding: 5px 10px 5px;
    border: none;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: background-color 300ms ease-out, box-shadow 300ms ease-out;
    :hover {
      background-color: #d41e43;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  }
`;
