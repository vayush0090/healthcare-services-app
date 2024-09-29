import { useEffect, useState } from "react";
const AddService = ({ addService, serviceToEdit, isEditing }) => {
    const [service, setService] = useState({
      name: '',
      description: '',
      price: ''
    });

    useEffect(() => {
      if (isEditing && serviceToEdit) {
        setService(serviceToEdit);
      }
    }, [isEditing, serviceToEdit]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!service.name || !service.description || !service.price) {
        alert("All fields are required");
        return;
      }
      addService(service); 
      setService({ name: '', description: '', price: '' }); 
    };
  
    return (
      <form onSubmit={handleSubmit} className="form-group mt-4">
        <input
          type="text"
          value={service.name}
          onChange={(e) => setService({ ...service, name: e.target.value })}
          placeholder="Service Name"
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          value={service.description}
          onChange={(e) => setService({ ...service, description: e.target.value })}
          placeholder="Description"
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          value={service.price}
          onChange={(e) => setService({ ...service, price: e.target.value })}
          placeholder="Price"
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-primary w-100">{isEditing ? 'Update Service' : 'Add Service'}</button>
      </form>
    );
  };
  
  export default AddService