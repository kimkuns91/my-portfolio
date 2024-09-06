import ContactPage from '@/components/Contact/ContactPage';

export default function Contact() {
  return <ContactPage />;
}

// 'use client';

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { useEffect, useState } from 'react';

// import { Button } from '@/components/ui/button';
// import { ContactFormType } from '@/interface';
// import { Input } from '@/components/ui/input';
// import MotionScrollSection from '@/components/MotionSection';
// import Section from '@/components/Section';
// import Spinner from '@/components/Spinner';
// import { Textarea } from '@/components/ui/textarea';
// import axios from 'axios';
// import { contactFormState } from '@/atom';
// import { info } from '@/lib/constant/contact';
// import { motion } from 'framer-motion';
// import toast from 'react-hot-toast';
// import { useForm } from 'react-hook-form';
// import { useRecoilState } from 'recoil';

// const Contact = () => {
//   const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
//   const [contactForm, setContactForm] = useRecoilState(contactFormState);

//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true); // 클라이언트에서 렌더링 중임을 설정
//   }, []);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors, isSubmitting },
//   } = useForm<ContactFormType>();

//   const onSubmit = async () => {
//     setDisableSubmit(true);
//     try {
//       const res = await axios.post('/api/contact', contactForm);
//       if (res.status === 200) {
//         toast.success('Email sent successfully!');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('An unknown error occurred');
//     } finally {
//       setDisableSubmit(false);
//     }
//   };

//   useEffect(() => {
//     if (contactForm) {
//       setValue('first_name', contactForm?.first_name);
//       setValue('last_name', contactForm?.last_name);
//       setValue('email', contactForm?.email);
//       setValue('phone', contactForm?.phone);
//       setValue('service', contactForm?.service);
//       setValue('message', contactForm?.message);
//     }
//   }, [contactForm, setValue]);

//   if (!isClient) {
//     // 서버에서 렌더링할 때는 아무것도 렌더링하지 않음
//     return null;
//   }

//   return (
//     <MotionScrollSection>
//       <div className="flex flex-col xl:flex-row gap-[30px]">
//         {/* form */}
//         <div className="xl:h-[54%] order-2 xl:order-none">
//           <form
//             className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <h3 className="text-4xl text-accent">Let{"'"}s work together</h3>
//             <p className="text-white/60">
//               Ready to turn your vision into reality? Let{"'"}s create something
//               amazing together!
//             </p>
//             {/* input */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input
//                 type="text"
//                 placeholder="Firstname"
//                 value={contactForm?.first_name}
//                 onChange={(e) =>
//                   setContactForm((prevState) => ({
//                     ...prevState,
//                     first_name: e.target.value,
//                   }))
//                 }
//               />
//               {errors.first_name && errors.first_name.type === 'required' && (
//                 <span className="text-red-600 text-sm">필수 항목입니다.</span>
//               )}

//               <Input
//                 type="text"
//                 placeholder="Lastname"
//                 value={contactForm?.last_name}
//                 onChange={(e) =>
//                   setContactForm((prevState) => ({
//                     ...prevState,
//                     last_name: e.target.value,
//                   }))
//                 }
//               />
//               {errors.first_name && errors.first_name.type === 'required' && (
//                 <span className="text-red-600 text-sm">필수 항목입니다.</span>
//               )}
//               <Input
//                 type="email"
//                 placeholder="Email address"
//                 value={contactForm?.email}
//                 onChange={(e) =>
//                   setContactForm((prevState) => ({
//                     ...prevState,
//                     email: e.target.value,
//                   }))
//                 }
//               />
//               {errors.email && errors.email.type === 'required' && (
//                 <span className="text-red-600 text-sm">필수 항목입니다.</span>
//               )}
//               {errors.email && errors.email.type === 'pattern' && (
//                 <span className="text-red-600 text-sm">
//                   올바른 이메일 주소를 입력하세요.
//                 </span>
//               )}
//               <Input
//                 type="text"
//                 placeholder="Phone number"
//                 value={contactForm?.phone}
//                 onChange={(e) =>
//                   setContactForm((prevState) => ({
//                     ...prevState,
//                     phone: e.target.value,
//                   }))
//                 }
//               />
//               {errors.phone && errors.phone.type === 'required' && (
//                 <span className="text-red-600 text-sm">필수 항목입니다.</span>
//               )}
//               {errors.phone && errors.phone.type === 'pattern' && (
//                 <span className="text-red-600 text-sm">
//                   올바른 전화번호를 입력하세요.
//                 </span>
//               )}
//             </div>
//             {/* select */}
//             <Select
//               value={contactForm?.service || ''}
//               onValueChange={(value) =>
//                 setContactForm((prevState) => ({
//                   ...prevState,
//                   service: value,
//                 }))
//               }
//             >
//               <SelectTrigger className="w-full">
//                 <SelectValue placeholder="Select a service" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectLabel>Select a service</SelectLabel>
//                   <SelectItem value="Web Development">
//                     Web Development
//                   </SelectItem>
//                   <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
//                   <SelectItem value="Logo Design">Logo Design</SelectItem>
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//             {/* textarea */}
//             <Textarea
//               className="h-[200px]"
//               placeholder="Type your message here."
//               value={contactForm?.message}
//               onChange={(e) =>
//                 setContactForm((prevState) => ({
//                   ...prevState,
//                   message: e.target.value,
//                 }))
//               }
//             />
//             {errors.message && errors.message.type === 'required' && (
//               <span className="text-red-600 text-sm">필수 항목입니다.</span>
//             )}
//             {/* button */}
//             <Button
//               size="md"
//               className="max-w-40"
//               type="submit"
//               disabled={isSubmitting || disableSubmit}
//             >
//               {!disableSubmit ? 'Send message' : <Spinner />}
//             </Button>
//           </form>
//         </div>
//         {/* info */}
//         <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//           <ul className="flex flex-col gap-10">
//             {info.map((item, index) => (
//               <li key={index} className="flex items-center gap-6">
//                 <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
//                   <div className="text-[28px]">{item.icon}</div>
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-white/60">{item.title}</p>
//                   <h3 className="text-xl">{item.description}</h3>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </MotionScrollSection>
//   );
// };

// export default Contact;
