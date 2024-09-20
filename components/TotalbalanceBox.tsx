import AnimatedCounter from './AnimatedCounter';
import DonughtChart from './DonughtChart';

const TotalbalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
       <DonughtChart accounts={ accounts } />
      </div>
      <div className=' flex flex-col gap-6'>
        <h2 className='header-2'>
        Bank Account: {totalBanks}
        </h2>
        <div className='flex flex-col gap-2'>
            <p className='total-balance-lebel'>
                Total Current Balance
            </p>
            <div className='total-balance-amount flex-center gap-2'>
              <AnimatedCounter amount= {totalCurrentBalance} />
            </div>

        </div>
      </div>
    </section>
  )
}

export default TotalbalanceBox