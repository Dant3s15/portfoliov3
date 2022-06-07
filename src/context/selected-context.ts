import React from 'react';

type ContextProps = {
  isSelected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  whichIsSelected: number;
  setWhichSelected: React.Dispatch<React.SetStateAction<number>>;
  event?: React.MouseEvent<HTMLDivElement, MouseEvent>;
  rotateCharactersHandler?: (e: any) => void;
  ctaButtonHandler: () => void;
  ctaButtonClicked?: { clicked: boolean };
  setCtaButtonClicked?: React.Dispatch<
    React.SetStateAction<{
      clicked: boolean;
    }>
  >;
};

const SelectedContext = React.createContext<Partial<ContextProps>>({});

export default SelectedContext;
