import { useContext, uststate, createContext, useState } from "react";

const FormikContext = createContext({
  token: "",
  setToken() {},
});

const FormikProvider = ({ children }) => {
  const [token, setToken] = useState("");
  return (
    <FormikContext.Provider value={{ token, setToken }}>
      {children}
    </FormikContext.Provider>
  );
};

export const useForm = () => useContext(FormikContext);
export default FormikProvider;
