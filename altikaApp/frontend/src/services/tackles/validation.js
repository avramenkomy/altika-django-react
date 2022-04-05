export default function validation(validate_type, value) {
  const validation_types = ['phone', 'email']

  if (value === '' || value === null || value === undefined) {
    console.error(`validation error: empty value`)
    return false
  }

  if (validation_types.includes(validate_type)) {
    if (validate_type === 'phone') {
      if (value.length < 11) {
        console.error(`validation error: phone length value`)
        return false
      }
    }
    if (validate_type === 'email') {
      if (!value.includes('@') && !value.includes('.') && (value.lastIndexOf('.') - value.indexOf('@')) < 2) {
        console.error(`validation error: email value`)
        return false
      }
    }
  }
  return true
}