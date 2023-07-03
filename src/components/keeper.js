import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import "../css/keeper.css"
import img from '../images/Capture.PNG'
import da from '../images/down-arrow.png'

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  }
  else
    return [];
}

const Keeper = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true)
  const [isEditItem, setIsEditItem] = useState(null)

  const addItem = () => {
    if (!inputData) {
      alert('Please Fill The Data')
    }
    else if(inputData && !toggleSubmit){
      setItems(
        items.map((e)=>{
          if(e.id===isEditItem){
            return{...e, name:inputData}
          }
          return e;
        })
      )
      setToggleSubmit(true);
      setInputData('');
      setIsEditItem(null);
    }
    else {
      const allInputData = { id: new Date().getTime().toString(), name: inputData }
      setItems([...items, allInputData]);
      setInputData('')
    }
  }
  const deleteItem = ((id) => {
    const upadatedItems = items.filter((e) => { return id !== e.id; })
    setItems(upadatedItems);
  })
  const removeAll = () => { setItems([]) }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
  }, [items]);

  const EditItem = (id) => {
    let newEditItem = items.find((e)=>{
      return e.id===id
    });
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id)
  }

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
            {
              toggleSubmit?<i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i>:
              <i className="far fa-edit add-btn" title='Edit Item' onClick={addItem}></i>
            }
            
          </div>
          <div className="showItems">
            {
              items.map((e) => {
                return (
                  <div className="eachItem" key={e.id}>
                    <h3>{e.name}</h3>
                    <div className='todo-btn'>
                      <i className="far fa-edit add-btn" title='Edit Item' onClick={() => EditItem(e.id)}></i>
                      <i className="far fa-trash-alt add-btn" title='Delete Item' onClick={() => deleteItem(e.id)}></i>
                    </div>
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
