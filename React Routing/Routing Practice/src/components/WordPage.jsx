import { useParams, useNavigate } from 'react-router-dom';

const WordPage = () => {
  const { word } = useParams();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  };

  return (
    <div>
      <h1>{word}</h1>
      <button onClick={goHome}>Go to Home</button>
    </div>
  );
}

export default WordPage;
