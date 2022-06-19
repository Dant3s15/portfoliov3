import { createContext, useState } from 'react';

interface HeroVisibleContextType {
  heroIsVisible: boolean;
  setHeroIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroVisibleContext = createContext<HeroVisibleContextType>({
  heroIsVisible: false,
  setHeroIsVisible: () => {},
});

export function HeroVisibleProvider(props: { children: any }) {
  const [heroIsVisible, setHeroIsVisible] = useState(true);
  return (
    <HeroVisibleContext.Provider value={{ heroIsVisible, setHeroIsVisible }}>
      {props.children}
    </HeroVisibleContext.Provider>
  );
}

export default HeroVisibleContext;
