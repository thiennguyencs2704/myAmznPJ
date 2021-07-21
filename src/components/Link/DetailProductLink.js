import React from "react";
import Link from "next/link";

const DetailProductLink = ({ children, id, title, styleATag }) => {
  return (
    <Link
      key={id}
      href="/productdetail/[...slug]"
      as={`/productdetail/${id}/${title
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
        .replace(/  /g, "-")
        .replace(/ /g, "-")}`}
    >
      <a className={styleATag}>{children}</a>
    </Link>
  );
};

export default DetailProductLink;
