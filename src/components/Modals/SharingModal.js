import React from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export const SharingModal = () => {
  return (
    <div className="h-auto w-auto">
      <FacebookShareButton
        url={"https://myamznsite.vercel.app/"}
        quote={"Hey subcribe earthtoday!"}
      >
        <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton
        url={"https://myamznsite.vercel.app/"}
        // title={"Hey subcribe earthtoday! Twitter"}
      >
        <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
      </TwitterShareButton>
    </div>
  );
};
