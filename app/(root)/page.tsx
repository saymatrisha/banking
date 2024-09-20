import RightSidebar from '@/components/RightSidebar';
import TotalbalanceBox from '@/components/TotalbalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Trisha", lastName:"Ahmed", email: "sayma1010@gmail.com"};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
             type="greeting"
             title="welcome"
             user={loggedIn?.firstName || "Guest"}
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