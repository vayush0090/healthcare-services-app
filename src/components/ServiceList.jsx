const ServiceList = ({ services, handleEdit, handleDelete }) => {
    return (
      <ul className="list-group mt-4">
        {services.map((service, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>${service.price}</p>
            <button onClick={() => handleEdit(index)} className="btn btn-info btn-sm mr-2">Edit</button>
            <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ServiceList