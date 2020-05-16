import React from 'react';

export const LocaleContext = React.createContext();

export const LocaleContextProvider = (props) => {
  const [locale, setLocale] = React.useState("en");
  return(
    <LocaleContextProvider value={[locale, setLocale]}>
      {props.children}
    </LocaleContextProvider>
  );
};
