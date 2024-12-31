import './App.css'
import { InstaFollowCard } from './InstaFollowCard.jsx'

const users = [
  {
    userName: 'aarongutierrez7',
    name: 'Aarón Gutiérrez',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <InstaFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </InstaFollowCard>
        ))
      }
    </section>
  )
}
