import React from "react";

function ProductInfoHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-extra-small">
        <div
          className="page-header-image-small"
          style={{
            backgroundImage: "url(" + require("assets/img/Home-banner.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
      </div>
    </>
  );
}

export default ProductInfoHeader;
