import { useForm } from "../hook/useForm";
import Loader from "./Loader";
import Message from "./Message";
import cv from "../img/cv-1.jpg";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="relative flex flex-col justify-around items-center">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full rounded-md">
        <h2 className="text-slate-200 font-semibold text-center">Formulario de Contacto</h2>
      </div>
      <p className="flex text-slate-400 italic text-sm mt-2">
        los campos con  <p className="text-red-400"> * </p> son obligatorios
      </p>
      <div className="flex flex-row space-x-3 mt-10">
        <img src={cv} alt="cv" className="md:flex hidden"/>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2 justify-center items-center md:justify-start md:items-start">
          {errors.name && <p className="bg-pink-200 rounded-sm px-4 italic text-sm opacity-80 ">{errors.name}</p>}
          *
          <input
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
            className="border rounded-md pl-3 border-violet-400 placeholder:italic placeholder:text-slate-400 w-full"
          />
          {errors.email && <p className="bg-pink-200 rounded-sm px-4 italic text-sm opacity-80 ">{errors.email}</p>}
          *
          <input
            type="email"
            name="email"
            placeholder="Escribe tu email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
            className="border rounded-md pl-3 border-violet-400 placeholder:italic placeholder:text-slate-400 w-full"
          />
            {errors.subject && <p className="bg-pink-200 rounded-sm px-4 italic text-sm opacity-80 ">{errors.subject}</p>}
          *
          <input
            type="text"
            name="subject"
            placeholder="Asunto a tratar"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
            className="border rounded-md pl-3 border-violet-400 placeholder:italic placeholder:text-slate-400 w-full"
          />
            {errors.comments && <p className="bg-pink-200 rounded-sm px-4 italic text-sm opacity-80 ">{errors.comments}</p>}
          *
            <textarea
              name="comments"
              cols="25"
              rows="5"
              placeholder="Escribe tus comentarios"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.comments}
              required
              className="border border-violet-400 rounded-md placeholder:italic pl-4"
            ></textarea>
          
          <input type="submit" value="Enviar" className="w-full bg-green-400/90 rounded-md text-slate-100 border hover:border-green-700 hover:bg-slate-100 hover:text-green-700  "/>
        </form>
      </div>

      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="bg-[#198754]" tcolor="text-green-300" />
      )}
    </div>
  );
};

export default ContactForm;
