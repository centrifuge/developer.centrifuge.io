import React, { useState, useLayoutEffect } from "react";
import Lightbox from "react-image-lightbox";
import { Image } from "grommet";

import "react-image-lightbox/style.css";

export const LightBox = (props) => {
  const [isOpen, setOpen] = useState(false);
  const imageProps = {
    ...props,
    style: {
      ...props.style,
      cursor: "zoom-in"
    }
  };

  useLayoutEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : null;
  }, [isOpen]);

  return (
    <span>
      <Image {...imageProps} onClick={() => setOpen(true)} />
      {isOpen && (
        <Lightbox
          mainSrc={props.src}
          imageTitle={props.title || props.alt || ""}
          onCloseRequest={() => setOpen(false)}
        />
      )}
    </span>
  );
};
