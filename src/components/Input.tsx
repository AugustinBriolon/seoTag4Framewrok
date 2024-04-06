import React from 'react';

export default function Input({
  id,
  imageScr,
  label,
  placeholder,
  type,
  value,
  onChange,
  disabled,
  readOnly,
}: {
  id: string;
  imageScr: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
}
) {
  return (
    <div className='w-full h-fit flex flex-col items-start justify-center gap-2'>
      <div className='flex items-center justify-start gap-2'>
        <img src={imageScr} alt={label + "icon"} className='h-5 w-5' />
        <label htmlFor={id}>{label}</label>
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        className='w-full h-fit border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      />
    </div>
  );
}

