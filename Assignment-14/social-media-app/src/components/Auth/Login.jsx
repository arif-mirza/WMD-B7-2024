import { useState, useContext, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../../AppContext/AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.jsx";

function Login() {
  const { signInWithGoogle, loginWithEmailAndPassword } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let initialValues = {
    email: "",
    password: "",
  };

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
  }, [navigate]);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Required")
      .min("6", "Must be at least 6 characters long"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    if (formik.isValid === true) {
      setLoading(true);
      loginWithEmailAndPassword(email, password);
    } else {
      alert("check your input field");
      setLoading(false);
    }

    console.log("formik", formik);
  };

  const formik = useFormik({ initialValues, validationSchema, handleSubmit });
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
                Login
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <form onSubmit={handleSubmit}>
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
                <div className="-ml-2.5">
                  <Checkbox label="Remember Me" />
                </div>
                <Button variant="gradient" color="blue" fullWidth type="submit">
                  Login
                </Button>
              </form>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                fullWidth
                className="my-3"
                onClick={signInWithGoogle}
              >
                Sign In with Google
              </Button>

              <Link to="/reset">
                <p className="ml-1 font-bold font-roboto text-sm text-blue-500 text-center ">
                  Reset the password
                </p>
              </Link>

              <div className="mt-6 flex items-center font-roboto text-base justify-center">
                Don't have an account?
                <Link to="/register">
                  <p className="ml-1 font-bold font-roboto text-sm text-blue-500 text-center ">
                    Register
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

export default Login;
