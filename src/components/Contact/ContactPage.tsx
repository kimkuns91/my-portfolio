'use client';

import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { contactFormState, initialContactFormState } from '@/atom';

import { Button } from '../ui/button';
import { ContactFormType } from '@/interface';
import { IconMailFilled } from '@tabler/icons-react';
import Image from 'next/image';
import { Input } from '../ui/input';
import MotionScrollSection from '../MotionSection';
import Spinner from '../Spinner';
import { Textarea } from '../ui/textarea';
import axios from 'axios';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useId } from 'react';
import { useRecoilState } from 'recoil';

const ContactPage: React.FC = () => {
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const [contactForm, setContactForm] = useRecoilState(contactFormState);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // 클라이언트에서 렌더링 중임을 설정
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormType>({
    defaultValues: contactForm || initialContactFormState, // 기본값을 Recoil 상태에서 가져옴
  });

  // Recoil 상태와 useForm 데이터를 동기화
  useEffect(() => {
    if (contactForm) {
      setValue('name', contactForm?.name);
      setValue('email', contactForm?.email);
      setValue('phone', contactForm?.phone);
      setValue('service', contactForm?.service);
      setValue('message', contactForm?.message);
    }
  }, [contactForm, setValue]);

  const onSubmit = async (data: ContactFormType) => {
    if (data.name === '' || data.email === '' || data.message === '') {
      toast.error('Please fill out the form');
      return;
    }

    setDisableSubmit(true);

    try {
      const res = await axios.post('/api/contact', data);
      if (res.status === 200) {
        toast.success('Email sent successfully!');
        // 폼이 성공적으로 제출된 후 Recoil 상태 초기화
        setContactForm(initialContactFormState);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unknown error occurred');
    } finally {
      setDisableSubmit(false);
    }
  };

  if (!isClient) {
    // 서버에서 렌더링할 때는 아무것도 렌더링하지 않음
    return null;
  }

  return (
    <MotionScrollSection>
      <div className="mx-auto grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Contact Info Section */}
        <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
          <h2 className="mt-9 bg-gradient-to-b from-accent to-success bg-clip-text text-left text-xl font-bold text-transparent md:text-3xl lg:text-5xl">
            Let{"'"}s work together
          </h2>
          <p className="mt-8 max-w-lg text-center text-base text-neutral-dark md:text-left">
            Ready to turn your vision into reality? Let{"'"}s create something
            amazing together!
          </p>
          <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
            <p className="text-sm text-neutral-light">kimkuns98@gmail.com</p>
            <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />
            <p className="text-sm text-neutral-light">(+82) 010 8595 9869</p>
            <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400" />
            <p className="text-sm text-neutral-light">Seoul, Korea</p>
          </div>
          <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
            <Pin className="right-[-52px] top-[-15px]" />
            <Image
              src="/assets/world.svg"
              width={500}
              height={500}
              alt="world map"
              className="[transform:rotateX(45deg)_translateZ(0px)] dark:invert dark:filter"
            />
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b p-4 from-[#27272c] to-[#27272c]/80 sm:p-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid size={20} />
          {/* Name Field */}
          <div className="relative z-20 w-full">
            <label
              className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
              htmlFor="name"
            >
              Full Name <span className="text-error">*</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full"
              {...register('name', { required: true })}
              value={contactForm?.name}
              onChange={(e) =>
                setContactForm((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
            {errors.name && (
              <span className="text-red-600 text-sm">필수 항목입니다.</span>
            )}
          </div>

          {/* Email Field */}
          <div className="relative z-20 w-full">
            <label
              className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
              htmlFor="email"
            >
              Email <span className="text-error">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              className="w-full"
              {...register('email', {
                required: '이메일은 필수 항목입니다.',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: '올바른 이메일 주소를 입력하세요.!!',
                },
              })}
              value={contactForm?.email}
              onChange={(e) =>
                setContactForm((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            {errors.email && errors.email.type === 'required' && (
              <div className="text-red-600 text-sm">필수 항목입니다.</div>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <div className="text-red-600 text-sm">
                올바른 이메일 주소를 입력하세요.
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div className="relative z-20 w-full">
            <label
              className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
              htmlFor="phone"
            >
              Phone
            </label>
            <Input
              id="phone"
              type="text"
              placeholder="Phone number"
              {...register('phone')}
              value={contactForm?.phone}
              className="w-full"
              onChange={(e) =>
                setContactForm((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
            />
          </div>

          {/* Service Field */}
          <div className="relative z-20 w-full">
            <label
              className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
              htmlFor="service"
            >
              Service
            </label>
            <Select
              value={contactForm?.service || ''}
              onValueChange={(value) =>
                setContactForm((prevState) => ({
                  ...prevState,
                  service: value,
                }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="Web Development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  <SelectItem value="Logo Design">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Message Field */}
          <div className="relative z-20 mb-4 w-full">
            <label
              className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
              htmlFor="message"
            >
              Message <span className="text-error">*</span>
            </label>
            <Textarea
              id="message"
              className="h-[200px]"
              placeholder="Type your message here."
              {...register('message', { required: true })}
              value={contactForm?.message}
              onChange={(e) =>
                setContactForm((prevState) => ({
                  ...prevState,
                  message: e.target.value,
                }))
              }
            />
            {errors.message && (
              <span className="text-red-600 text-sm">필수 항목입니다.</span>
            )}
          </div>

          {/* Submit Button */}
          <Button
            size="md"
            className="w-full"
            type="submit"
            disabled={isSubmitting || disableSubmit}
          >
            {!disableSubmit ? 'Send message' : <Spinner />}
          </Button>
        </form>
      </div>
    </MotionScrollSection>
  );
};

const Pin = ({ className }: { className?: string }) => {
  return (
    <motion.div
      style={{
        transform: 'translateZ(1px)',
      }}
      className={cn(
        'pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500',
        className
      )}
    >
      <div className="h-full w-full">
        <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg px-2 py-1 text-xs font-normal bg-accent text-primary">
          I{"'"}m here
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0 transition-opacity duration-500"></span>
        </div>

        <div
          style={{
            perspective: '800px',
            transform: 'rotateX(70deg) translateZ(0px)',
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-sky-500/[0.2]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-accent blur-[2px]" />
          <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-accent" />
          <motion.div className="absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-accent blur-[3px]" />
          <motion.div className="absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-accent/50" />
        </>
      </div>
    </motion.div>
  );
};

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] dark:from-neutral-800 dark:to-neutral-950',
        className
      )}
    >
      <div
        className={cn(
          'relative z-20 h-full w-full rounded-[5px] bg-gray-50 dark:bg-neutral-800',
          className
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:h-[8px] dark:blur-sm"></div>
    </div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay dark:fill-white/100 dark:stroke-white/100"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, idx: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default ContactPage;
