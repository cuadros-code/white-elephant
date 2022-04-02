import * as yup from "yup";

const schemaCreate = yup.object({
  title       : yup.string().required('Ingresa el titulo'),
  location    : yup.string().required('Ingresa el la ubicación'),
  description : yup.string().required('Ingresa la descripción'),
  files       : yup.array().of(yup.mixed().required('Archivos requerido')).required('Ingrese al menos un archivo'),
}).required();



export {
  schemaCreate,
}
