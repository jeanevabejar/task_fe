import { useState } from "react"
import { createCategory, updateCategory } from "../Utils/Categoryservice";


export const CreateForm = () => {
    const [categoryName, setCategoryName] = useState('');
    const [error, setError] = useState(null);
    
    const handleInputChange = (event) => {
      setCategoryName(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await createCategory(categoryName);
        setCategoryName('');
        console.log('created', response)
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div>
        <h2>Create New Category</h2>
        {error && <p>Error: {error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Category Name:
            <input
              type="text"
              value={categoryName}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Create Category</button>
        </form>
      </div>
    );
}


