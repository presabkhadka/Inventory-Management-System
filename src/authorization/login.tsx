import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 
import { H2, P, Label, SmallText } from "@/components/styledcomponent";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), 
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid md:grid-cols-12 h-screen gap-4">
      <div className="md:col-span-5 flex justify-center items-center">
        <img src="../src/assets/l.png" alt="logo" className="aspect-auto" />
      </div>
      <div className="md:col-span-7 flex justify-center items-center container">
        <div className="grid md:grid-cols-9 grid-cols-12 justify-center w-full">
          <div className="col-start-3 md:col-span-5 col-span-8 flex flex-col gap-4 w-full">
            <div className="flex justify-center">
              <img
                src="../src/assets/pp.png"
                alt="logo"
                className="aspect-square"
              />
            </div>
            <div className="flex flex-col gap-3">
              <H2 className="text-center">Log in to your account</H2>
              <P className="text-center text-coolgray-700">
                Welcome back! Please enter your details.
              </P>
            </div>
            <div className="flex flex-col gap-6">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="email" className="text-coolgray-700">
                    Email
                  </Label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 gap-2 rounded-lg border font-normal text-base leading-6"
                    {...register("email")} 
                  />
                  {errors.email && (
                    <SmallText className="text-red-500">{errors.email.message}</SmallText>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="password" className="text-coolgray-700">
                    Password
                  </Label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="px-4 py-3 gap-2 rounded-lg border font-normal text-base leading-6"
                    {...register("password")}
                  />
                  
                  {errors.password && (
                    <SmallText className="text-red-500">{errors.password.message}</SmallText>
                  )}
                </div>
                <button
                  type="submit"
                  className="border px-4 py-2 bg-blue-600 text-white rounded gap-2"
                >
                  Login
                </button>
              </form>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" name="RemChk" id="rem" />
                  <label
                    htmlFor="rem"
                    className="font-medium text-sm leading-5 text-greyText"
                  >
                    Remember for 30 days
                  </label>
                </div>
                <div>
                  <a href="#" className="text-blue-600 font-medium text-sm leading-5">
                    Forgot password
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="border px-4 py-2 flex justify-center gap-3">
                  <img src="../src/assets/google.png" alt="google logo" />
                  Sign up with Google
                </button>
              </div>
            </div>
            <div>
              <P className="text-coolgray-800 flex justify-center gap-1">
                Don't have an account?{" "}
                <Link to="/signup">
                  <P className="text-blue-600">Sign up</P>
                </Link>
              </P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
