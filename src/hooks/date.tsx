import React, { createContext, useCallback, useContext, useState } from 'react';

export interface DateWrapper {
  date: Date;
  month: number;
  year: number;
}

interface DateContextWrapper {
  content: DateWrapper;
  setDisplayDate(date: Date): void;
  setDisplayMonth(month: number, year: number): void;
}

const DateContext = createContext<DateContextWrapper>({} as DateContextWrapper);

const DateProvider: React.FC = ({ children }) => {
  const [dateSettings, setDateSettings] = useState<DateWrapper>(() => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return { date, month, year };
  });

  const setDisplayDate = useCallback(
    date => {
      setDateSettings({
        date,
        month: dateSettings.month,
        year: dateSettings.year,
      });
    },
    [dateSettings],
  );

  const setDisplayMonth = useCallback(
    (month: number, year: number) => {
      setDateSettings({ date: dateSettings.date, month, year });
    },
    [dateSettings],
  );

  return (
    <DateContext.Provider
      value={{ content: dateSettings, setDisplayDate, setDisplayMonth }}
    >
      {children}
    </DateContext.Provider>
  );
};

function useDate(): DateContextWrapper {
  const context = useContext(DateContext);

  if (!context) {
    throw new Error('useDate must be used within an DateProvider');
  }

  return context;
}

export { DateProvider, useDate };
