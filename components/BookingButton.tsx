import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface IBookingButtonProps {
  className?: string;
  onClick?: () => void;
}

const BookingButton: React.FunctionComponent<IBookingButtonProps> = (props) => {
  const { className, onClick = () => {} } = props;
  return (
    <Link href="/booking">
      <a
        onClick={onClick}
        className={clsx(
          "flex justify-center items-center  px-8 py-4  border-white bg-black text-white drop-shadow-2xl",
          className
        )}
      >
        BOOKING
      </a>
    </Link>
  );
};

export default BookingButton;
