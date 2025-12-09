'use client';
import CustomModal from '@/components/common/modals';
import RegisterationForm from '@/forms/registration.form';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}


const RegistrationModal =({isOpen, onClose}: IProps ) => {
  return(  <CustomModal
    isOpen={isOpen}
    onClose={onClose}
    tittle="Create an Account"
    >
    <RegisterationForm onclose={onClose} />
    </CustomModal>
);
}   


export default RegistrationModal;

