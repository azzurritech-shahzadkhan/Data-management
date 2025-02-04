import { CustomerRecomendationChat } from '@/components/dashboard/CustomerRecomendationChart'
import GuageChart from '@/components/dashboard/GuageChart'
import Container from './Container'


const PerformanceAnalytics = () => {
         
    return (
    <Container>
      <div className='mt-4 grid grid-cols-2 gap-4'>
        <div>
          <CustomerRecomendationChat />
        </div>
        <div className='overflow-hidden flex  justify-center'>
          <GuageChart />
        </div>
      </div>
    </Container>
  )
}

export default PerformanceAnalytics
