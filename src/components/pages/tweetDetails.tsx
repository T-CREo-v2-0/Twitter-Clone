import { useParams } from 'react-router-dom';


function TweetDetails() {
  const { id } = useParams();
  return (
    <div className="container text-black">
       <h1>Tweets Details Page - { id }</h1>
    </div>
  );
}

export default TweetDetails;
