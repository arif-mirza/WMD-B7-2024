import * as Yup from "yup"

const formSchema = Yup.object().shape({
  userId: Yup.number().required("User ID is required"),
  password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  zipCode: Yup.number().required("Zip Code is required"),
  email: Yup.string().required("Email is required").email("Please enter a valid email"),
  sex: Yup.string().required("gender is required"),
  language: Yup.string().required("Language is required"),
  about: Yup.string().required("Write here something"),
})


export default formSchema;