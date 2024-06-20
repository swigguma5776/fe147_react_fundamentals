import { useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios'; 

//internal import
import style from './CustomerForm.module.css';

function CustomerForm() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  // useParams allows us to grab parameters from our url
  // in this case our edit-customers/:id url endpoint takes in a parameter :id so we are grabbing that from the url to use
  console.log(id)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  
  function handleChange(event){
    console.log(event.target)
    
    const { name, value } = event.target; //deconstructuring our event.target to grab the name & value key/value pairs
    // doing the same thing as above
    // const name = event.target.name;
    // const value = event.target.value; 
    console.log(name, value)
    setFormData({ ...formData, [name]: value }) //updating formData based on the changes to the input
    console.log(formData)
  }
  
  async function handleSubmit(event){
    event.preventDefault();
    
    if (id) {
      // in axios the order of the arguments is 
        // 1st = url,
        // 2nd = body,
        // 3rd = { headers, params }
       try {
        const response = await axios.put(`http://127.0.0.1:5000/customers/${id}`,
            formData,
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          )
      
        console.log(response)
        alert(`Updated Customer: ${formData.name}`)
        } catch(error) {
          console.log(error)
        }
    } else {
      
            try {
            const response = await axios.post(`http://127.0.0.1:5000/customers`,
              formData,
              {
                headers: {
                  "Content-Type": "application/json"
                }
              }
            )
            
            console.log(response)
            alert(`Submitted Customer: ${formData.name}`)
            
          } catch(error) {
            console.log(error)
          }
   
    }
    
    navigate('/customers')
  }
  
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h3>Add/Edit Customers</h3>
      <div className={style["form-group"]}>
        <label htmlFor="name" className={style.label}>Name:</label>
        <input type="text" id="name" name="name" placeholder="Name here" className={style.input} onChange={handleChange}/>
      </div>
      <div className={style["form-group"]}>
        <label htmlFor="email" className={style.label}>Email:</label>
        <input type="text" id="email" name="email" pattern="[\w.]+@[\w]+[.][a-z]{2,}" placeholder="Email Here" className={style.input} onChange={handleChange}/>
      </div>
      <div className={style["form-group"]}>
        <label htmlFor="phone" className={style.label}>Phone:</label>
        <input type="text" id="phone" name="phone" pattern="[\d]{10}" placeholder="Phone Here" className={style.input} onChange={handleChange}/>
      </div>
      <button type="submit" className={style.button}>Submit</button>
    </form>
  )
}

export default CustomerForm
