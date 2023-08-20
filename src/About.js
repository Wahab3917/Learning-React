// import React, {useState} from 'react'

export default function About(props) {

  // const [btnText, setBtnText] = useState('Enable Dark Mode');

  // const [myStyle, setMyStyle] = useState({
  //   color: '#101010',
  //   background: '#fff',
  //   borderColor: '#101010'
  // });

  // const toggleStyle = () => {
  //   if (myStyle.color === '#101010') {
  //     setMyStyle({
  //       color: '#fff',
  //       background: '#101010',
  //       borderColor: '#fff'
  //     });
  //     setBtnText('Disable Dark Mode');
  //   }
  //   else {
  //     setMyStyle({
  //       color: '#101010',
  //       background: '#fff',
  //       borderColor: '#101010'
  //     });
  //     setBtnText('Enable Dark Mode');
  //   }

  // }

  return (
    <>

      <div className="container mt-5" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>

        <h1 className='mb-3'>About</h1>

        <div className="card" style={{backgroundColor: props.mode === 'dark' ? '#343a40' : '#fff'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card mt-3" style={{backgroundColor: props.mode === 'dark' ? '#343a40' : '#fff'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card mt-3" style={{backgroundColor: props.mode === 'dark' ? '#343a40' : '#fff'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

      </div>

      {/* <div className="container mt-3">
        <button onClick={toggleStyle} type='button' className="btn btn-primary">{btnText}</button>
      </div> */}

    </>
  );
}

