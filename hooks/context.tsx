import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useReadApprove } from "../blockchain/Tokens/ERC20/ERC20.read";

type appContextType = {
  isLoading: boolean;
  isMinting: boolean;
  isApproved: boolean;
  setMinting: (state: boolean) => void;
  setApprove: (state: boolean) => void;
  setLoading: (state: boolean) => void;
};

const appContextDefaultValue: appContextType = {
  isLoading: false,
  isMinting: false,
  isApproved: false,
  setMinting: () => {},
  setApprove: () => {},
  setLoading: () => {},
};

const AppContext = createContext<appContextType>(appContextDefaultValue);

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const { approveRead } = useReadApprove();
  const [isMinting, setMintingState] = useState(false);
  const [isApproved, setApproveState] = useState(false);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    setApproveState(approveRead);
  }, [approveRead]);

  function setMinting(state: boolean) {
    setMintingState(state);
  }

  function setApprove(state: boolean) {
    setApproveState(state);
  }

  function setLoading(state: boolean) {
    setLoadingState(state);
  }

  const value = {
    isLoading,
    isMinting,
    isApproved,
    setMinting,
    setApprove,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
