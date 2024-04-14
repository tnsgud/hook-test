import { FieldProps } from '@/type';

export default function Field({ title, errorMessage, children }: FieldProps) {
  return (
    <div>
      <h5 className='font-medium mb-1'>{title}</h5>
      {children}
      {errorMessage && (
        <span className='text-sm text-red-500'>{errorMessage}</span>
      )}
    </div>
  );
}
