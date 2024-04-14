import { RadioProps } from '@/type';

export default function Radio({ name, values, register, options }: RadioProps) {
  return (
    <ul className='flex flex-col gap-y-0.5'>
      {values.map((value) => {
        const id = `${name}_${value.value}`;

        return (
          <li key={id} className='flex items-center gap-x-1'>
            <input
              type='radio'
              id={id}
              value={value.value}
              className='accent-primary'
              {...register(name, options)}
            />
            <label htmlFor={id}>{value.label}</label>
          </li>
        );
      })}
    </ul>
  );
}
