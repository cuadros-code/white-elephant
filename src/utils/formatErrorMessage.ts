export const formatErrorMessage = (error: string) => {
  switch (error) {
    case 'auth/email-already-in-use':
      return 'El correo ya esta en uso'
    case 'auth/invalid-email':
      return 'El correo no es valido'
    case 'auth/operation-not-allowed':
      return 'No se puede crear el usuario'
    default:
      return 'Error de autenticación'
  }
}
