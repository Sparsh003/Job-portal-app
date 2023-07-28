export const endpoint = "/createJob";

export const commonStyle = {
  inputPrimary:
    "w-full px-3 py-2 mt-1 border rounded-md  focus:ring-1 focus:ring-blue-200 focus:outline-none placeholder:text-placeholder text-sm",
  inputSecondary:
    "w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none placeholder:text-placeholder text-sm",
  btn: "px-4 py-2 text-white bg-btn-color hover:bg-btn-color rounded",
  label: "block text-gray-700 font-medium text-sm",
  breakWords: "break-words break-all",
};

export const message = {
  submission: `Thank you for your submission!`,
  deleteRecord: `Record Delete Successfully`,
  maxError: `*Max cannot be lower than min*`,
};

export const intialErrorState = {
  experience: "",
  salary: "",
};

export const intialState = {
  jobTitle: "",
  companyName: "",
  industry: "",
  location: "",
  remoteType: "",
  minimumExperience: "",
  maximumExperience: "",
  minimumSalary: "",
  maximumSalary: "",
  totalEmployee: "",
  applyType: "",
};
