import React from 'react';
import { HoverCard } from '@radix-ui/themes';
import clsx from 'clsx';

export default function Input({
  id,
  textaerea,
  imageScr,
  label,
  placeholder,
  type,
  value,
  onChange,
  disabled,
  readOnly,
  hint,
  hintContent
}: {
  id: string;
  textaerea?: boolean;
  imageScr: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  hint?: (value: string) => JSX.Element;
  hintContent?: string;
}
) {
  return (
    <div className='w-full h-fit flex flex-col items-start justify-center gap-2'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center justify-start gap-2'>
          <img src={imageScr} alt={label + "icon"} className='h-4 w-4' />
          <label htmlFor={id} className='text-sm'>{label}</label>
        </div>
        {
          hint && (
            <HoverCard.Root>
              <HoverCard.Trigger>
                {hint(value)}
              </HoverCard.Trigger>
              <HoverCard.Content maxWidth="300px">
                <p className='text-xs'>{hintContent}</p>
              </HoverCard.Content>
            </HoverCard.Root>
          )
        }
      </div>
      {
        textaerea ? (
          <textarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            readOnly={readOnly}
            className='w-full h-32 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        ) : (
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
        )
      }
    </div>
  );
}

