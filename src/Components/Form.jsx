import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mail: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateName = (name) => {
    let trimmedName = name.trimStart();
    if (trimmedName.length < 5) {
      return "El nombre debe tener más de 5 caracteres y no puede comenzar con un espacio.";
    }
    return "";
  };

  const validateEmail = (email) => {
    let trimmedEmail = email.trimStart();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return "Ingresa un correo electrónico válido.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "name") {
      setErrors({
        ...errors,
        name: validateName(value),
      });
    } else if (name === "mail") {
      setErrors({
        ...errors,
        mail: validateEmail(value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.mail);

    if (nameError || emailError) {
      setErrors({
        name: nameError,
        mail: emailError,
      });
    } else {
      console.log("Formulario enviado", formData);
      setIsSubmitted(true);
    }
  };


  const closeModal = () => {
    setIsSubmitted(false);

    setFormData({
      name: "",
      mail: "",
    });

    setErrors({
      name: "",
      mail: "",
    });
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="flex inputss">
          <label htmlFor="name">Nombre y apellido</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Pepe Perez"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="flex inputss">
          <label htmlFor="mail">Email</label>
          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="example@example.com"
            value={formData.mail}
            onChange={handleChange}
          />
          {errors.mail && <p className="error-message">{errors.mail}</p>}
        </div>

        <button className="send" type="submit">Enviar</button>
      </form>


      {isSubmitted && (
        <div className="modal">
          <div className="modal-content">
            <p>Gracias {formData.name}, te contactaremos cuando antes vía mail</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
