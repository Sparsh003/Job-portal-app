import React from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";
import Label from "../Common/Label";
import { commonStyle } from "../Utilities/utilities";

const Step1 = ({ handleChange, formData, incrementHandler, isEdit }) => {
  const dynamicProps = {
    isRequired: true,
    className: commonStyle.inputPrimary,
    onChange: handleChange,
  };
  return (
    <form className="w-full p-8 bg-white rounded-md ">
      <div className="flex justify-between align flex-wrap ">
        <h3 className="text-xl font-medium">
          {isEdit ? "Edit Create Job" : "Create a job"}
        </h3>
        <h5 className="font-medium text-base">Step 1</h5>
      </div>
      <div className="mt-6">
        <Label
          htmlFor="jobTitle"
          label="Job title"
          isRequired={true}
          className={commonStyle.label}
        />
        <Input
          {...dynamicProps}
          placeholder="ex.UX UI Designer"
          name="jobTitle"
          value={formData.jobTitle}
        />
      </div>
      <div className="mt-6">
        <Label
          htmlFor="companyName"
          label="Company name"
          isRequired={true}
          className={commonStyle.label}
        />
        <Input
          {...dynamicProps}
          placeholder="ex. Google"
          name="companyName"
          value={formData.companyName}
        />
      </div>
      <div className="mt-6">
        <Label
          htmlFor="industry"
          label="Industry"
          isRequired={true}
          className={commonStyle.label}
        />
        <Input
          {...dynamicProps}
          placeholder="ex.Information Technology"
          name="industry"
          value={formData.industry}
        />
      </div>
      <div className="flex flex-wrap mt-6">
        <div className="mb-6 lg:w-1/2 md:w-full sm:w-full pr-2">
          <Label htmlFor="location" label="Location" className={commonStyle.label} />
          <Input
            placeholder="ex.Chennai"
            className={commonStyle.inputPrimary}
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className=" lg:w-1/2 md:w-full sm:w-full gap-x-6 pl-2">
          <Label htmlFor="remoteType" label="Remote Type" className={commonStyle.label} />
          <Input
            placeholder="ex. In-office"
            className={commonStyle.inputPrimary}
            name="remoteType"
            value={formData.remoteType}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-24 flex justify-end">
        <Button
          type="submit"
          className={commonStyle.btn}
          onClick={incrementHandler}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default Step1;
