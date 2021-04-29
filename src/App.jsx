import React, {useState} from 'react';
import Title from './comps/Title.jsx';
import UploadForm from './comps/UploadForm.jsx';
import ImageGrid from './comps/ImageGrid.jsx';
import Modal from './comps/Modal.jsx'
function App() {
    const [selectedImg, setSelectedImg] = useState(null)
    return ( 
        <div className = "App" >
        <Title />
        <UploadForm/>
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
        </div>
    );
}

export default App;