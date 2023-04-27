import '../styles/App.scss'
import ButtonsContainer from './ButtonsContainer'
import Clock from './Clock'
import Header from './Header'
import Modal from './Modal'
// import { useState } from 'react'


function App() {
  return (
    <div className='main'>
      <Header></Header>
      <ButtonsContainer></ButtonsContainer>
      <Clock></Clock>
      <Modal></Modal>
    </div>
  )
}

export default App