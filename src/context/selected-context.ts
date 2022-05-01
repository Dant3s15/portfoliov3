import React from 'react';
//TODO fix types

type ContextProps = {
  isSelected: boolean;
  setSelected: any;
  whichIsSelected: number | null;
  setWhichSelected: any;
  renderSection: any;
  setRenderSection: any;
  event?: any;
  rotateCharactersHandler?: any;
  ctaButtonHandler: any;
  ctaButtonClicked?: any;
  setCtaButtonClicked?: any;
};

const SelectedContext = React.createContext<Partial<ContextProps>>({});

export default SelectedContext;
