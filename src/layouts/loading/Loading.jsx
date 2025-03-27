import  { useEffect, useState } from 'react'
import './Loading.css'
const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  if (!isLoading) return null;
  return (
    < > 
    <div className="loading">
      <div className="center">
        <div className="ring"></div>
        <div className="text"><span>T</span> ravel</div>
      </div>
    </div>
    </ >
  )
}

export default Loading