import { useParams, useNavigate } from 'react-router-dom';

function TweetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div className="w-full bg-white mb-4 rounded-xl overflow-hidden max-w-xl min-w-xl text-black">
      <div className='absolute left-10 top-10'>
        <button className="bg-transparent hover:bg-slate-600 text-slate-600 font-semibold hover:text-white py-2 px-4 border border-slate-600 hover:border-transparent rounded" type="button" onClick={navigateToHome}>Back to Timeline</button>
      </div>
       <h1>Tweets Details Page - { id }</h1>
    </div>
  );
}

export default TweetDetails;