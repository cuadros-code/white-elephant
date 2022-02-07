import * as yup from "yup";

const schemaLogin = yup.object({
  email   : yup.string()
              .email('Ingrese un correo valido')
              .required('Ingresa tu correo electrónico'),
  password: yup.string()
              .min(6, 'La contraseña debe tener al menos 6 caracteres')
              .required('Ingresa tu contraseña')
}).required();

const schemaRegister = yup.object({
  name    : yup.string().required('Ingresa tu nombre'),
  lastname: yup.string().required('Ingresa tu apellido'),
  email   : yup.string()
              .email('Ingrese un correo valido')
              .required('Ingresa tu correo electrónico'),
  password: yup.string()
              .min(6, 'La contraseña debe tener al menos 6 caracteres')
              .required('Ingresa tu contraseña')
}).required();


export {
  schemaLogin,
  schemaRegister
}
