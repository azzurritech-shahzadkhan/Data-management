import Container from './Container'
import ChatModel from '@/components/AiAssist/ChatModel'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AiAgent from './AiAgent';

const AiAssistant = () => {
  return (
    <Container>
      <div>
      
      <Tabs>
    <TabList>
      <Tab>Chatbot</Tab>
      <Tab>AI Agent</Tab>
    </TabList>

    <TabPanel>
      <h2><ChatModel/></h2>
    </TabPanel>
    <TabPanel>
      <h2><AiAgent/></h2>
    </TabPanel>
  </Tabs>
        {/* <div className='border-b border-white/60 pb-[15px]'>
          <p className='text-[24px] text-white font-semibold'>AI Model</p>
          <p className='text-white/60 text-[14px] leading-[19.6px] font-medium'>Chat with our assistant below</p>
        </div> */}
        
        
      </div>
    </Container>
  )
}

export default AiAssistant
