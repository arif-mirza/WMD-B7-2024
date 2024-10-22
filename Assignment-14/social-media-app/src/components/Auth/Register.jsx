import { useState, useContext, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link , useNavigate} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../../AppContext/AppContext";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebase/firebase.jsx"

function Register() {
  // loading
  const [loading, setLoading] = useState(false);
  const { registerWithEmailAndPassword, signInWithGoogle } = useContext(AuthContext);
 

  const navigate = useNavigate();




  // useEffect
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [navigate])
  

  // initialValues
  let initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min("4", "Must be at least 4 characters long"),
      
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
    .required("Required")
      .min(6, "Must be at least 6 characters long")
     
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = formik.values;
    if (formik.isValid === true) {
      registerWithEmailAndPassword(name, email, password);
      setLoading(true);
    } else {
      setLoading(false);
      alert("Check your input fields");
    }
  };
  const formik = useFormik({ initialValues, validationSchema, handleRegister });

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 justify-items-center items-center h-screen">
          <ClipLoader color="#1c63ca" size={150} speedMultiplier={0.5} />
        </div>
      ) : (
        <div className="grid grid-cols-1 h-screen justify-items-center items-center">
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                REGISTER
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <form onSubmit={handleRegister}>
                {/* name */}
                <div className="mb-2">
                  <Input
                    name="name"
                    type="text"
                    label="Name"
                    size="lg"
                    {...formik.getFieldProps("name")}
                  />
                </div>
                <div>
                  {formik.touched.name && formik.errors.name && (
                    <Typography variant="small" color="red">
                      {formik.errors.name}
                    </Typography>
                  )}
                </div>
                {/* email */}
                <div className="mt-4 mb-2">
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    size="lg"
                    {...formik.getFieldProps("email")}
                  />
                </div>
                <div>
                  {formik.touched.email && formik.errors.email && (
                    <Typography variant="small" color="red">
                      {formik.errors.email}
                    </Typography>
                  )}
                </div>
                <div className="mt-4 mb-2">
                  <Input
                    label="Password"
                    size="lg"
                    type="password"
                    name="password"
                    {...formik.getFieldProps("password")}
                  />
                  <div>
                    {formik.touched.password && formik.errors.password && (
                      <Typography variant="small" color="red">
                        {formik.errors.password}
                      </Typography>
                    )}
                  </div>
                </div>

                <Button variant="gradient" color="blue" fullWidth type="submit">
                  Sign Up
                </Button>
              </form>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth className="my-3" onClick={signInWithGoogle}>
                Sign In with Google
              </Button>

              {/* <Link to="/reset">
              <p className="ml-1 font-bold font-roboto text-sm text-blue-500 text-center ">
                Reset the password
              </p>
            </Link> */}

              <div className="mt-6 flex items-center font-roboto text-base justify-center">
                Already Have an Account?
                <Link to="/register">
                  <p className="ml-1 font-bold font-roboto text-sm text-blue-500 text-center ">
                    Login
                  </p>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}

export default Register;
