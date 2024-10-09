import RightSidebar from '@/components/RightSidebar';
import TotalbalanceBox from '@/components/TotalbalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
             type="greeting"
             title="welcome"
             user={loggedIn?.name || "Guest"}
             subtext="Access and manage your account and transactions efficiently."
            />

            <TotalbalanceBox 
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1500.45}
            />
        </header>
        RECENT TRANSATIONS
      </div>

      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 123.65 },{ currentBalance: 123.65 }]}
      />
    </section>
  )
}

export default Home