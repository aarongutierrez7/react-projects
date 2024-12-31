import { useState } from 'react'
import PropTypes from 'prop-types';

export function InstaFollowCard ({ children, userName, initialIsFollowing }) {
  InstaFollowCard.propTypes = {
    children: PropTypes.any,
    userName: PropTypes.string,
    initialIsFollowing: PropTypes.bool
  };
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  console.log('[InstaFollowCard] render with userName: ', userName)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'ig-followCard-button is-following'
    : 'ig-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='ig-followCard'>
      <header className='ig-followCard-header'>
        <img
          className='ig-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='ig-followCard-info'>
          <strong>{children}</strong>
          <span className='ig-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='ig-followCard-text'>{text}</span>
          <span className='ig-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>

  )
}