import { useParams, useNavigate } from 'react-router-dom';

const NumberPage = () => {
  const { number } = useParams();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={goHome}>Go to Home</button>
    </div>
  );
}

export default NumberPage;
