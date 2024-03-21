import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ShowData() {
    const location = useLocation();
    const savedImages = location.state ? location.state.savedImages : [];
    const navigate = useNavigate();

    function returnHome() {
        navigate('/');
    }

    function clearAllData() {
        localStorage.clear(); 
        navigate('/');
    }

    return (
        <div className="show-data-container">
            <h1 className="text-center mb-4">Saved Images</h1>
            <div className="card-container d-flex flex-wrap justify-content-start">
                {savedImages.map((img, index) => (
                    <div key={index} className="card" style={{height : '150', width: '150px', margin: '10px', borderRadius: '15px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
                        <img src={img} className='card-img-top' style={{ width: '100%', height: '250px', borderRadius: '15px 15px 0 0' }} />
                        <div className="card-body">
                            <h5 className="card-title">Image {index + 1}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <div className="buttons-container ms-2">
                <button className="btn btn-primary " onClick={returnHome}>Return to Home</button>
                <button className="btn btn-danger ms-1" onClick={clearAllData}>Clear All</button>
            </div>
        </div>
    );
}

export default ShowData;
