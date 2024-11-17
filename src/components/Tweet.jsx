import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />

          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
