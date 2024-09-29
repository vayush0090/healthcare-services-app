import './styles.css';
import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import AddService from './components/AddService';

const App = () => {
  const [services, setServices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addService = (newService) => {
    if (isEditing) {
      const updatedServices = [...services];
      updatedServices[editingIndex] = newService;
      setServices(updatedServices);
      setIsEditing(false); 
      setEditingIndex(null); 
    } else {
      setServices([...services, newService]);
    }
  };

  const editService = (index) => {
    setEditingIndex(index);
    setIsEditing(true); 
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
  <h1 className="text-center my-4">Healthcare Services</h1>
  <div className="row">
    <div className="col-md-6">
      <AddService 
        addService={addService} 
        serviceToEdit={services[editingIndex]} 
        isEditing={isEditing} 
      />
    </div>
    <div className="col-md-6">
      <ServiceList 
        services={services} 
        handleEdit={editService} 
        handleDelete={deleteService} 
      />
    </div>
  </div>
</div>

  );
};

export default App;
