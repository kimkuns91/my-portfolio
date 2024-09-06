import { ContactFormType } from '@/interface';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const initialContactFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export const contactFormState = atom<ContactFormType | null>({
  key: 'contactFormState',
  default: {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  },
  effects_UNSTABLE: [persistAtom],
});
