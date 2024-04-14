'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs } from '@/type';
import Field from '@/components/field';
import Radio from '@/components/radio';

const emailRegexp = /^\S+@\S+\.\S+$/;

const initData: { [key: string]: { value: string; label: string }[] } = {
  department: [
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'accounting', label: 'Accounting' },
    { value: 'cs', label: 'Customer Service' },
  ],
  reason: [
    { value: 'money', label: 'I want money' },
    { value: 'love', label: 'I love this company' },
    { value: 'learning', label: 'I want to learn' },
    { value: 'none', label: "I don't know why" },
  ],
  salary: [
    { value: '50K', label: '$50K' },
    { value: '100K', label: '$100K' },
    { value: '150K', label: '$150K' },
    { value: '200K', label: '$200K' },
  ],
};

export default function Page() {
  const { department, reason, salary } = initData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const ok = confirm(
      `제대로 입력했는지 확인해라\n${Object.keys(data).map(
        (key) => `\n${key}: ${JSON.stringify(initData[key])}`
      )}`
    );

    if (!ok) {
      return;
    }

    alert('Thank you for applying.');
    reset();
  };

  return (
    <main className='flex min-h-screen flex-col justify-center items-center p-8 bg-background text-text'>
      <div className='w-full max-w-lg p-3 bg-blue-100 border border-text rounded-lg'>
        <h1 className='self-center text-xl font-medium mb-5 text-center'>
          Job Application Form
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-y-3'
        >
          <Field
            title='What department do you want to work for?'
            errorMessage={errors?.department?.message}
          >
            <Radio
              name='department'
              values={department}
              register={register}
              options={{ required: '제대로 골라' }}
            />
          </Field>
          <Field
            title='Why do you want to join this company?'
            errorMessage={errors?.reason?.message}
          >
            <Radio
              name='reason'
              values={reason}
              register={register}
              options={{ required: '제대로 골라' }}
            />
          </Field>
          <Field title='Salary' errorMessage={errors?.salary?.message}>
            <div className='relative'>
              <select
                className='text_field h-10 appearance-none rounded-none'
                {...register('salary')}
              >
                {salary.map((salary) => {
                  const id = `salary_${salary.value}`;
                  return (
                    <option value={salary.value} key={id}>
                      {salary.label}
                    </option>
                  );
                })}
              </select>
              <span className='absolute top-[50%] right-2 rotate-45 -translate-y-[50%] w-2 h-2 border-r border-b border-text' />
            </div>
          </Field>
          <Field
            title='Introduce yourself'
            errorMessage={errors?.introduction?.message}
          >
            <textarea
              {...register('introduction', {
                required: '제대로 입력해',
              })}
              className='text_field h-20 resize-none overflow-auto'
            ></textarea>
          </Field>
          <Field
            title='Tell us what your dreams are'
            errorMessage={errors?.dreams?.message}
          >
            <textarea
              {...register('dreams', {
                required: '제대로 입력해라',
                minLength: {
                  value: 10,
                  message: '10자 이상 써라',
                },
              })}
              className='text_field h-20 resize-none overflow-auto'
            ></textarea>
          </Field>
          <Field title='Email' errorMessage={errors?.email?.message}>
            <input
              type='text'
              className='text_field h-10'
              {...register('email', {
                required: '제대로 입력해라',
                pattern: {
                  value: emailRegexp,
                  message: '형식을 지켜서 입력해라',
                },
              })}
            />
          </Field>

          <button
            type='submit'
            className='w-full h-10 bg-red-200 text-background mt-6'
          >
            Give me this job
          </button>
        </form>
      </div>
    </main>
  );
}
