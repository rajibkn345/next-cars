import React from 'react';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  isDisable,
  btnType,
  containerStyles,
  handleClick,
  title,
  textStyle,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisable}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles} `}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow-left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
