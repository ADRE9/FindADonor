import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default yup.object().shape({
  name:yup.string().required("Name is required"),
  email: yup.string().email().required('Email is required'),
  age: yup.number().min(18, "You should be minimun 18 years old"),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone Number is required'),
});