import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Note from './Note'
import notes from './Notes'
import "../css/keeper.css"
import img from '../images/Capture.PNG'
import da from '../images/down-arrow.png'
const Keeper = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {

    }
    else {
      setItems([...items, inputData]);
      setInputData('')
    }
  }
  const deleteItem = ((id)=>{
    const upadatedItems = items.filter((e, i)=> {return id!==i;})
    setItems(upadatedItems);
  })
  const removeAll = ()=>{setItems([])}
  return (
    <React.Fragment>
      <Header />
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img className="noteimg" src={img} height="200px" />
            <figcaption>Add Your list Here</figcaption><img className="downArrow" src={da} width="100px" height="100px" alt="Image" />
          </figure>
          <div className="addItems">
            <input type="text" placeholder='Add Items Here' value={inputData} onChange={(e) => { setInputData(e.target.value) }} />
            <i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i>
          </div>
          <div className="showItems">
            {
              items.map((e, i) => {
                return (
                  <div className="eachItem" key={i}>
                  <h3>{e}</h3>
                  <i class="far fa-trash-alt" title='Delete Item' onClick={()=>deleteItem(i)}></i>
                  </div>
                )
              })
            }
          </div>
          { }
          <div className="showItems">
            <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}><span>Check List</span></button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Keeper
