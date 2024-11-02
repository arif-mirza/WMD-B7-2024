function Button({ title, onClickHandler }) {
  return (
    <>
      <button onClick={onClickHandler} className="btn btn-primary">
        {title}
      </button>
    </>
  );
}

export default Button;
