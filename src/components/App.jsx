import '../styles/App.scss'
import ButtonsContainer from './ButtonsContainer'
import Clock from './Clock'
import Header from './Header'
import Modal from './Modal'
import Settings from './Settings'
// import { useState } from 'react'


function App() {
  return (
    <div className='main'>
      <Header></Header>
      <ButtonsContainer></ButtonsContainer>
      <Clock></Clock>
      <Settings></Settings>
      <Modal></Modal>
    </div>
  )
}

export default App