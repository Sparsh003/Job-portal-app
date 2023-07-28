import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Step1 from "../Forms/Step1Content";
import Step2 from "../Forms/Step2Content";

const DialogBox = ({
  handleChange,
  formData,
  isOpen,
  closeModal,
  currentStep,
  error,
  isEdit,
  incrementHandler,
  createOrUpdateCard,
}) => {
  const dynamicProps = {
    formData: formData,
    handleChange: handleChange,
    error: error,
    isEdit: isEdit,
    incrementHandler: incrementHandler,
    createOrUpdateCard: createOrUpdateCard
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1 {...dynamicProps} />;
      case 1:
        return <Step2 {...dynamicProps} />;
      default:
        return null;
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle  transition-all">
                <div className="flex box-content justify-center items-center ">
                  {renderStepContent(currentStep)}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogBox;
