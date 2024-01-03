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


  function modalText () {
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

  const headerStyle = {
    fontSize: '24px'  
  }

  return (
    <div className="App">
        <Modal 
          visible={visible} 
          setVisible={setVisible}
          modalTitle='React Modal'
          modalText={modalText}
          onCancel={onCancel}
          onSuccess={onSuccess}
          isCloseIcon={true}
          isFooter={true}
          isImage={true}
          isCancelButton={true}
          onSuccessButtonLabel='Save'
          onCancelButtonLabel='Cancel'
          image='https://funik.ru/wp-content/uploads/2019/01/14ced2c4725920226c94.jpg'
          cancelButtonStyle={cancelButtonStyle}
          successButtonStyle={successButtonStyle}
          headerStyle={headerStyle}
        />
        <button onClick={()=> setVisible(true)}>Click me</button>
    </div>
  );
}

export default App;
