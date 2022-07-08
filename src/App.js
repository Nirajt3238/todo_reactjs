import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className='main_content'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
            <div className="card text-center" style={{ maxWidth: 640 }}>
                <div className="card-header heading">ToDo Project in ReactJs</div>
                <div className="card-body">
                  <div className='row'>
                    <div className='col-9'>
                      <input type="text" placeholder='Write Something' className='form-control' />
                    </div>
                    <div className='col-3'>
                      <button className='btn btn-primary px-5 font-weight-bold' type='button'>Add</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
