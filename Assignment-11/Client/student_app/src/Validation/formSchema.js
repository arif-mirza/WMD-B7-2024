import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().min(3).max(14).required("Name is required"),
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  course : yup.string().required("course is required"),
  phone : yup.number().min(10).required("phone is required"),
})

export default formSchema;