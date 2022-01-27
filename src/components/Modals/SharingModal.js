import React from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export const SharingModal = ({ handleFacebookMeta, handleTwitterMeta }) => {
  return (
    <div className="h-auto w-auto">
      <FacebookShareButton
        url={"https://myamznsite-9o7k5k4ey-thiennguyencs2704.vercel.app/"}
        quote={"Hey subcribe earthtoday!"}
        onClick={handleFacebookMeta}
      >
        <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton
        url={"https://myamznsite-8f8afavsg-thiennguyencs2704.vercel.app/"}
        title={"Hey subcribe earthtoday! Twitter"}
        onClick={handleTwitterMeta}
      >
        <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
      </TwitterShareButton>
    </div>
  );
};
