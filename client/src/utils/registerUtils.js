export function validation(input) {
  let errors = {};
  
  const onlyLetters = /[^A-Za-z]/g;
  const emailValidator = /[A-Za-z0-9.-]+@[a-zA-Z-]+\.(com|edu|net)$/g;

  if(!input.username) {
    errors.username = true;
  }

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

  if(!input.password) {
    errors.password = true;
  }
  
  if(input.password !== input.confirm_password || input.confirm_password == '') {
    errors.confirm_password = true
  }

  return errors
}