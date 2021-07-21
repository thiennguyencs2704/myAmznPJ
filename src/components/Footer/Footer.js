import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-xs text-white">
      <div className="grid justify-center py-5 md:grid-flow-col md:gap-5 lg:gap-20 md:py-8 bg-amazon_blue-light ">
        <div className="flex flex-col min-w-max">
          <p className="mb-1 text-sm font-medium md:mb-2">Get to Know Us</p>
          <div className="flex-col hidden space-y-2 md:flex">
            <p>Careers</p>
            <p>Blog</p>
            <p>About Amazon</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
          </div>
        </div>

        <div className="flex flex-col min-w-max">
          <p className="mb-2 text-sm font-medium">Make Money with Us</p>
          <div className="flex-col hidden space-y-2 md:flex">
            <p>Sell products on Amazon</p>
            <p>Sell on Amazon Business</p>
            <p>Sell apps on Amazon</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host an Amazon Hub</p>
            <p>› See More Make Money with Us</p>
          </div>
        </div>

        <div className="flex flex-col min-w-max">
          <p className="mb-2 text-sm font-medium">Amazon Payment Products</p>
          <div className="flex-col hidden space-y-2 md:flex">
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
          </div>
        </div>

        <div className="flex flex-col min-w-max">
          <p className="mb-2 text-sm font-medium">Let Us Help You</p>
          <div className="flex-col hidden space-y-2 md:flex">
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates & Policies</p>
            <p>Returns & Replacements</p>
            <p>Manage Your Content and Devices</p>
            <p>Amazon Assistant</p>
            <p>Help</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-5 md:flex-row md:justify-center md:space-x-4 bg-amazon_blue">
        <div className="flex pb-2 md:pb-0 md:pt-2">
          <Image src="/amazonlogo.png" width={60} height={20} />
        </div>

        <div className="flex space-x-4">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads</p>
        </div>

        <div>
          <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
