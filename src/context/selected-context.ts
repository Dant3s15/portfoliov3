import React from 'react';

type ContextProps = {
  isSelected: boolean;
  setSelected: any;
  whichIsSelected: number | null;
  setWhichSelected: any;
  renderSection: any;
  setRenderSection: any;
};

const SelectedContext = React.createContext<Partial<ContextProps>>({});

export default SelectedContext;
