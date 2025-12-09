'use client';

import CustomModal from '@/components/common/modals';
import LoginForm from '@/forms/login.form';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal =({isOpen, onClose}: IProps ) => {
  return(  <CustomModal
    isOpen={isOpen}
    onClose={onClose}
    tittle="Logg in to your Account"
    >
    <LoginForm onclose={onClose} />
    </CustomModal>
);
}

export default LoginModal;