import { useParams, useNavigate } from 'react-router-dom';

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div className='text-black'>
    <div className='absolute left-10 top-10'>
        <button className="bg-transparent hover:bg-slate-600 text-slate-600 font-semibold hover:text-white py-2 px-4 border border-slate-600 hover:border-transparent rounded" type="button" onClick={navigateToHome}>Back to Timeline</button>
    </div>
    <div className="container text-black">
       <h1>User Details Page - { id }</h1>
    </div>
    </div>
  );
}

export default Profile;