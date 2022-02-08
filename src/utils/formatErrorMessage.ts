export const formatErrorMessage = (error: string) => {
  switch (error) {
    case 'auth/email-already-in-use':
      return 'El correo ya esta en uso'
    case 'auth/invalid-email':
      return 'El correo no es valido'
    case 'auth/operation-not-allowed':
      return 'No se puede crear el usuario'
    case 'auth/usser-not-found':
      return 'El usuario no existe'
    case 'auth/wrong-password':
      return 'El usuario o contraseña es incorrecta'
    default:
      return 'Error de autenticación'
  }
}