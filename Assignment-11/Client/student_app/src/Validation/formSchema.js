import * as yup from "yup";

const formSchema = yup.object().shape({
  Name: yup.string().min(3).max(14).required("Name is required"),
  Email: yup.string().email("Please enter a valid email").required("Email is required"),
  Course : yup.string().required("course is required"),
  Phone : yup.number().min(10).required("phone is required"),
})

export default formSchema;