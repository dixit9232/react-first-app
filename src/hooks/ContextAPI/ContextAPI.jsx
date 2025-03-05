import { createContext, use,  useState } from "react";

export const ContextAPI = createContext();

export const ContextAPIProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ContextAPI.Provider value={{ count, setCount }}>
      {children}
    </ContextAPI.Provider>
  );
};

// Custom Hook
export const useContextAPI = () =>{
    // return useContext(ContextAPI);
    return use(ContextAPI);
}