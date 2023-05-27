import React from 'react';
import '../stylesheets/tweets.css';

function Tweet(props) {
	return (
    <a href="#" className="text-black">
      <div className="w-full bg-white mb-4 rounded-xl overflow-hidden max-w-xl min-w-xl">
        <div className="flex border-b border-solid border-grey-light">
          <div className="w-1/8 text-right pl-3 pt-3">
          <div><a href="#"><div className="rounded-full h-12 w-12 mr-2 bg-red-400"></div></a></div>
          </div>
          <div className="w-7/8 p-3 pl-0">
            <div className="flex justify-between">
              <div>
                <span className='text-black'><a href="#" className="text-black"><strong>{props.name} </strong></a></span>
                <span className="text-black">@{props.username}</span>
                <span className="text-black"> &middot; </span>
                <span className="text-black">{props.day} {props.month} {props.year}</span>
              </div>
            </div>

            <div className="mb-4 text-black text-left flex justify-between">{props.tweet}</div>

            <div className="pb-2 text-center">
              <span className="mr-8"><a href="#" className="text-black hover:no-underline hover:text-blue-light">{props.replies} Replies</a></span>
              <span className="mr-8"><a href="#" className="text-black hover:no-underline hover:text-green">{props.retweets} Retweets</a></span>
              <span className="mr-8"><a href="#" className="text-black hover:no-underline hover:text-red">{props.likes} Likes</a></span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Tweet;