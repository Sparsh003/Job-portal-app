import React from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";
import Label from "../Common/Label";
import { commonStyle } from "../Utilities/utilities";

const Step2 = ({
  handleChange,
  formData,
  createOrUpdateCard,
  isEdit,
  error,
}) => {
  const dynamicProps = {
    type: "Number",
    className: commonStyle.inputSecondary,
    onChange: handleChange,
  };

console.log("error",error)

  return (
    <form className="w-full p-8 bg-white rounded-md">
      <div className="flex justify-between align flex-wrap ">
        <h3 className="text-xl font-medium">Create a job</h3>
        <h5 className="font-medium text-base">Step 2</h5>
      </div>
      <div className="mt-6">
        <Label
          htmlFor="experience"
          label="Experience"
          className="block text-gray-700 font-medium text-sm"
        />
        <div className="flex justify-between gap-x-6 mt-1">
          <Input
            {...dynamicProps}
            placeholder="Minimum"
            name="minimumExperience"
            value={formData.minimumExperience}
          />
          <Input
            {...dynamicProps}
            placeholder="Maximum"
            name="maximumExperience"
            value={formData.maximumExperience}
          />
        </div>
        {error?.experience && <p className="text-red-500 text-xs mt-1 ml-1 md:whitespace-nowrap">{error.experience}</p>}
      </div>
      <div className="mt-6">
        <Label
          htmlFor="experience"
          label="Salary"
          className="block text-gray-700 font-medium text-sm"
        />
        <div className="flex justify-between gap-x-6 mt-1">
          <Input
            {...dynamicProps}
            placeholder="Minimum"
            name="minimumSalary"
            value={formData.minimumSalary}
          />

          <Input
            {...dynamicProps}
            placeholder="Maximum"
            name="maximumSalary"
            value={formData.maximumSalary}
          />
        </div>
        {error?.salary && <p className="text-red-500 text-xs mt-1 ml-1 md:whitespace-nowrap">{error.salary}</p>}
      </div>
      <div className="mt-6">
        <Label
          htmlFor="total employee"
          label="Total employee"
          className="block text-gray-700 font-medium text-sm"
        />

        <Input
          className={commonStyle.inputSecondary}
          onChange={handleChange}
          placeholder="ex.100"
          name="totalEmployee"
          value={formData.totalEmployee}
        />
      </div>
      <div className="mt-6">
        <Label
          htmlFor="experience"
          label="Apply type"
          className="block text-gray-700 font-medium mb-1 text-sm"
        />
        <div className="flex mt-3 flex-wrap">
          <div className="flex items-center">
            <Input
              type="radio"
              className="pr-4 border rounded-lg"
              placeholder="Minimun"
              name="applyType"
              checked={formData.applyType === "Quick apply"}
              value="Quick apply"
              onChange={handleChange}
            />
            <Label
              htmlFor="radio"
              label="Quick apply"
              className="text-r-btn-color ml-1 me-2 text-sm"
            />
          </div>
          <div className="flex items-center">
            <Input
              type="radio"
              className="md:ml-4 border rounded-lg"
              placeholder="Maximum"
              name="applyType"
              checked={formData.applyType === "External apply"}
              value="External apply"
              onChange={handleChange}
            />
            <Label
              htmlFor="radio"
              label="External apply"
              className="text-r-btn-color ml-1 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-24 flex justify-between">
        <Button
          type="submit"
          className={commonStyle.btn}
          onClick={(e) => createOrUpdateCard(e)}
        >
          {isEdit ? "Update" : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default Step2;
