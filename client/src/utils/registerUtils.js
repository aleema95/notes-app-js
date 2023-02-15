export function validation(input) {
  let errors = {};
  
  const onlyLetters = /[^A-Za-z]/g;
  const emailValidator = /[A-Za-z0-9.-]+@[a-zA-Z-]+\.(com|edu|net)$/g;

  if(!input.name) {
    errors.name_only_Letters = true;
    errors.name = true;
  } else if (onlyLetters.test(input.name)) errors.name_only_Letters = true;
  
  if(!input.last_name) {
    errors.last_name = true;
    errors.last_name_only_Letters = true;
  } else if (onlyLetters.test(input.last_name)) errors.last_name_only_Letters = true;

  if(!input.email) {
    errors.email = true;
    errors.invalid_email = true;
  } else if(!emailValidator.test(input.email)) errors.invalid_email = true;

  if(!input.message) errors.message = true;

  return errors
}