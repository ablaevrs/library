import { useState } from 'react'
import Modal from './components/Modal'
import './App.css';

function App() {
  const [visible, setVisible] = useState(false)

  function onCancel () {
    setVisible(false)
  }

  function onSuccess () {
    alert('Ok')
    setVisible(false)
  }


  function modalContent () {
    return (
      <div>
        <p>Text Text Text Text Text Text Text Text Text Text Text </p>
        <p>Text Text Text Text Text Text Text Text Text Text Text </p>
        <p>Text Text Text Text Text Text Text Text Text Text Text </p>
        <p>Text Text Text Text Text Text Text Text Text Text Text </p>
    </div>
    )
  }

  const cancelButtonStyle = {
    width: '100px',
    height: '40px'
  }

  const successButtonStyle = {
    width: '100px',
    height: '40px'
  }

  const titleStyle = {
    fontSize: '24px'  
  }

  return (
    <div className="App">
        <Modal 
          visible={visible} 
          setVisible={setVisible}
          modalContent={modalContent}
          onCancel={onCancel}
          onSuccess={onSuccess}
          isImage={true}
          image='https://funik.ru/wp-content/uploads/2019/01/14ced2c4725920226c94.jpg'
          cancelButtonStyle={cancelButtonStyle}
          successButtonStyle={successButtonStyle}
          titleStyle={titleStyle}
        />
        <button onClick={()=> setVisible(true)}>Click me</button>
    </div>
  );
}

export default App;
