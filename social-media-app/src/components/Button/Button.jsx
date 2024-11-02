// import { Button, styled } from "@mui/material";
// using styled component
// const newButton = styled(Button)`
//   background-color: #008CBA;
//   color: white;
//   border: none;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;`

function Button({ title, onClickHandler }) {
  return (
    <>
      <button onClick={onClickHandler}>
        {title}
      </button>
    {/* <newButton variant="contained" onClick={onClickHandler} >{title}</newButton> */}
    </>
  );
}

export default Button;
