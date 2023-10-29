function Popup({ imagePopupOpened, setImagePopupOpened, popupArray }) {
  const popupLength = popupArray.length;
  console.log(imagePopupOpened.id);
  const onClickArrow = (way) => {
    if (way === "r") {
      if (imagePopupOpened.id + 1 >= popupLength) {
        setImagePopupOpened(popupArray[0]);
      } else {
        setImagePopupOpened(popupArray[imagePopupOpened.id + 1]);
      }
    } else {
      if (imagePopupOpened.id - 1 >= 0) {
        setImagePopupOpened(popupArray[imagePopupOpened.id - 1]);
      } else {
        setImagePopupOpened(popupArray[popupLength - 1]);
      }
    }
  };
  return (
    imagePopupOpened && (
      <div className="popup__inner">
        <div className="popup">
          <span className="left-arrow" onClick={() => onClickArrow("l")}>
            left
          </span>
          <div className="popup__img">
            <img
              src={imagePopupOpened.path}
              alt="product-picture"
              onClick={() => setImagePopupOpened(false)}
            />
          </div>
          <span className="right-arrow" onClick={() => onClickArrow("r")}>
            right
          </span>
        </div>
      </div>
    )
  );
}

export default Popup;
