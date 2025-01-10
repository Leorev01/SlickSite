import { useEffect, useState } from 'react';

const DynamicDateComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{currentTime}</div>;
};

export default DynamicDateComponent;
