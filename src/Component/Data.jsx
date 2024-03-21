// import React, { useEffect, useState } from 'react';
// import { json, useNavigate } from 'react-router-dom';
// import './Data.css'

// function Data() {
//     const [img, setImg] = useState();
//     const [SavedImg, setSavedImg] = useState([]);
//     const navigate = useNavigate();
//     function handleChange(e) {
//         const file = e.target.files[0];
//         if (file) {
//             setImg(URL.createObjectURL(file));
//         }
//     }

//     function handleClick() {
//         if (!img) {
//             alert('Please upload a photo');
//         } else {
//             setSavedImg([...SavedImg, img]);
//         }
//     }

//     function navigatePage() {
//         navigate('/otherpage', { state: { savedImages: SavedImg } });
//     }

//     useEffect(()=>{
//       const storedImg = JSON.parse(localStorage.getItem('Items'))
//       if(Array.isArray(storedImg) && storedImg.length) {
//         setSavedImg(storedImg)
//       }
//     })

//     useEffect(()=>{
//       localStorage.setItem('Items',JSON.stringify(SavedImg))
//     },[SavedImg])

//     return (
//         <>
//            <div className="d-flex justify-content-center align-items-center vh-100">
//            <div>
           
//             <div className='card m-3 p-2' style={{width : '550px', height : '200px'}}>
//             <h3 style={{textAlign : 'center'}}>Image Upload and Management</h3>
//                 <input type="file" onChange={handleChange} className='ms-5' style={{width: '80%'}} />
//                 <button className='btn btn-success w-50 mt-1' style={{width : '100px'}} onClick={handleClick}>Submit</button>
//                 <button className='btn btn-info mt-1' style={{width : '100px'}} onClick={navigatePage}>ShowData</button>
//             </div>
//            </div>
//            </div>
//         </>
//     );
// }

// export default Data;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Data() {
    const [img, setImg] = useState();
    const [SavedImg, setSavedImg] = useState([]);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        const file = e.target.files[0];
        if (file) {
            setImg(URL.createObjectURL(file)); 
            setSavedImg([...SavedImg, URL.createObjectURL(file)]);
            setUploadSuccess(true);
        }
    }

    function navigatePage() {
        navigate('/otherpage', { state: { savedImages: SavedImg } });
    }

    useEffect(() => {
        const storedImg = JSON.parse(localStorage.getItem('Items')) || [];
        if (Array.isArray(storedImg) && storedImg.length) {
            setSavedImg(storedImg);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('Items', JSON.stringify(SavedImg));
    }, [SavedImg]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
                <div className='card m-3 p-2 card-hover' style={{ width: '550px', height: '300px', borderRadius: '15px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Image Upload and Management</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input type="file" onChange={handleChange} className='form-control mb-3' style={{ width: '60%' }} />
                    </div>
                    {uploadSuccess && <p style={{ textAlign: 'center', color: 'green' }}>Upload Successful!</p>}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className='btn btn-info me-3' style={{ width: '120px' }} onClick={navigatePage}>Show Data</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;


