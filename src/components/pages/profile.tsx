import { useParams } from 'react-router-dom';


function Profile() {
  const { id } = useParams();
  return (
    <div className="container text-black">
       <h1>User Details Page - { id }</h1>
    </div>
  );
}

export default Profile;