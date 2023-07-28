import React from "react";
import { commonStyle } from "../Utilities/utilities";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Logo from "../DownloadedImage/logo-N.png";
import Paragraph from "../Common/Paragraph";
import Button from "../Common/Button";
import Image from "../Common/Image";
const Card = ({ items, index, selectedCardHandler, deleteCardHandler }) => {
  const buttonRender = () => {
    if (items?.applyType === "Quick apply") {
      return (
        <Button className=" bg-btn-color hover:bg-btn-color text-white font-normal py-2 px-4 rounded-md">
          Apply Now
        </Button>
      );
    } else if (items?.applyType === "External apply") {
      return (
        <Button className=" border border-btn-color text-btn-color hover:bg-btn-color hover:text-white font-medium py-2 px-4 rounded-md">
          External Apply
        </Button>
      );
    } else
      return (
        <>
          <Button className=" bg-btn-color hover:bg-btn-color text-white font-normal py-2 px-4 rounded-md">
            Apply Now
          </Button>
          <Button className=" border border-btn-color text-btn-color hover:bg-btn-color hover:text-white font-medium py-2 px-4 rounded-md">
            External Apply
          </Button>
        </>
      );
  };

  return (
    <div
      className="flex my-6 bg-white rounded-lg shadow-md py-4 px-6 border border-ccc sm:w-full lg:w-cardW"
      key={index}
    >
      <div className="flex flex-wrap">
        <Image
          className="inline w-10 h-10 rounded-md me-2"
          alt="Logo"
          src={Logo}
        />
        <div>
          <h3 className={`text-2xl font-semibold ${commonStyle.breakWords}`}>
            {items?.jobTitle}
          </h3>
          <Paragraph
            className={`text-base text-gray-700 font-medium ${commonStyle.breakWords}`}
          >
            {items?.companyName} - {items?.industry}
          </Paragraph>
          <Paragraph
            className={`text-base text-r-btn-color mb-4 ${commonStyle.breakWords}`}
          >
            {items?.location} (In-office)
          </Paragraph>

          <Paragraph className={`text-base mt-2 ${commonStyle.breakWords}`}>
            {items?.remoteType} (9.00 am - 5.00 pm IST)
          </Paragraph>
          <Paragraph className={`text-base mt-2 ${commonStyle.breakWords}`}>
            Experience ({items?.minimumExperience} - {items?.maximumExperience}{" "}
            years)
          </Paragraph>
          <Paragraph className={`text-base mt-2 ${commonStyle.breakWords}`}>
            INR(₹) {items?.minimumSalary} - {items?.maximumSalary} / Month
          </Paragraph>
          <Paragraph className={`text-base mt-2 ${commonStyle.breakWords}`}>
            {items?.totalEmployee} employees
          </Paragraph>
          <div className="flex flex-wrap gap-3 mt-6">{buttonRender()}</div>
        </div>
      </div>

      <div className="flex flex-1 justify-end">
        <PencilSquareIcon
          className="h-6 w-6 text-blue-200 hover:text-btn-color  cursor-pointer"
          title="Edit"
          onClick={() => selectedCardHandler(items)}
        />
        <TrashIcon
          className="h-6 w-6 ms-3 text-blue-200 hover:text-btn-color  cursor-pointer"
          title="Delete"
          onClick={() => deleteCardHandler(items?.id)}
        />
      </div>
    </div>
  );
};

export default Card;
