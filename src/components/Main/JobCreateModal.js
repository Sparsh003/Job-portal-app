import { useEffect, useState } from "react";
import Card from "../Card/CardList";
import DialogBox from "./Dialog";
import Button from "../Common/Button";
import Modal from "../Common/Modal";
import CircularLoader from "../Common/Loader";
import {
  intialState,
  endpoint,
  message,
  intialErrorState,
} from "../Utilities/utilities";
import { fetchData, postData, deleteData, updateData } from "../APIService/api";

const JobCreateModal = () => {
  const [formData, setFormData] = useState(intialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [cardData, setCardData] = useState(null);
  const [response, setResponse] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(intialErrorState);
  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCardData = () => {
    fetchData(endpoint)
      .then((responseData) => {
        setCardData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCardData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const toogleHandler = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };
  const selectedCardHandler = (obj) => {
    setFormData(obj);
    toogleHandler();
  };
  const closeModal = () => {
    setIsOpen(false);
    setFormData(intialState);
    setIsEdit(false);
    setError(intialErrorState);
    setCurrentStep(0);
  };

  const deleteCardHandler = (id) => {
    deleteData(endpoint, id)
      .then(() => {
        getCardData();
        setResponse(message.deleteRecord);
        setIsModalOpen(!isModalOpen);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const incrementHandler = () => {
    if (
      currentStep === 0 &&
      formData.jobTitle &&
      formData.companyName &&
      formData.industry
    ) {
      setCurrentStep(currentStep + 1);
    }
  };

  const validateHandler = () => {
    if (
      parseInt(formData.minimumExperience) >
      parseInt(formData.maximumExperience)
    ) {
      setError({ error, experience: message.maxError });
    } else if (
      parseInt(formData.minimumSalary) > parseInt(formData.maximumSalary)
    ) {
      setError({ error, salary: message.maxError, experience: "" });
    } else {
      return true;
    }
  };

  const createOrUpdateCard = (event) => {
    event.preventDefault();
    if (isEdit && validateHandler()) {
      updateData(endpoint, formData)
        .then(() => {
          toogleHandler();
          setFormData(intialState);
          setCurrentStep(0);
          getCardData();
          setResponse(message.submission);
          setError(intialErrorState);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (formData.jobTitle && formData.companyName && formData.industry) {
      if (validateHandler()) {
        postData(endpoint, formData)
          .then(() => {
            getCardData();
            setIsOpen(!isOpen);
            setResponse(message.submission);
            setFormData(intialState);
            setCurrentStep(0);
            setIsModalOpen(!isModalOpen);
            setError(intialErrorState);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  const dynamicProps = {
    formData: formData,
    isOpen: isOpen,
    isEdit: isEdit,
    currentStep: currentStep,
    error: error,
    incrementHandler: incrementHandler,
    closeModal: closeModal,
    handleChange: handleChange,
    createOrUpdateCard: createOrUpdateCard,
  };

  const modalDynamicProps = {
    response: response,
    isModalOpen: isModalOpen,
    setIsModalOpen: setIsModalOpen,
  };

  const cardDynamicProps = {
    deleteCardHandler: deleteCardHandler,
    selectedCardHandler: selectedCardHandler,
  };

  return (
    <>
      <div className=" p-6">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded bg-sky-500 text-white py-2 px-4 font-medium"
        >
          Create Job
        </Button>
      </div>
      {cardData ? (
        <div className="flex justify-between  flex-wrap items-center p-6 ">
          {cardData?.map((items, index) => (
            <Card {...cardDynamicProps} items={items} key={index} />
          ))}
        </div>
      ) : (
        <div>
          <CircularLoader />
        </div>
      )}
      <DialogBox {...dynamicProps} />
      <Modal {...modalDynamicProps} />
    </>
  );
};

export default JobCreateModal;
