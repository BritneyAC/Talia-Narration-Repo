import { useState } from "react"

export default function Contact(){
  const [formData, setFormData] = useState(
    {name: "", email: "", content: ""})

  function handleChange(event){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input 
          type="text" 
          placeholder="Name" 
          name="name"  
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <label>Email:
        <input 
          type="text" 
          placeholder="Email Address" 
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </label>
      <label>Content:
        <textarea  
          placeholder="" 
          name="content"
          onChange={handleChange}
          value={formData.content}          
        />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}