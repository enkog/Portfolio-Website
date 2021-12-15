import React from 'react';
import penz from '../../assets/images/penz-classes.png';
import todo from '../../assets/images/todo-list.png';
import lifestyle from '../../assets/images/lifestyle.png';
import project4 from '../../assets/images/tic-tac-toe.png';
import '../Portfolio/Portfolio.css';

export default function Portfolio() {
    return (
        <div className='portfolio-section'>
            <h3 className='mb-5'>My best works</h3>
            <div className="row mb-3">
                <div className="col-sm-6">
                    <div className="card">
                        <img src={penz} alt='project 1'/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <img src={project4} alt='project 2' />
                    </div>
                </div>
                </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                      <img src={todo} alt='project 3'/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                      <img src={lifestyle} alt='project 4' />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                      <img src={penz} alt='project 5'/>
                    </div>
                </div>
                </div>
        </div>
    )
}
