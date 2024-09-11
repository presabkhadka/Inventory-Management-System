import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { H2, Label, P, SmallText } from "@/components/styledcomponent";
import { Link } from "react-router-dom";

function Signup() {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])(?=^.{8,}$).*$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number or special character"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
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
              <H2 className="text-center">Create an account</H2>
              <P className="text-center text-coolgray-700">
                Start your 30-day free trial.
              </P>
            </div>
            <div className="flex flex-col gap-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-coolgray-700">
                    Name
                  </Label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                    className="px-4 py-3 gap-2 rounded-lg border font-normal text-base leading-6"
                  />
                  {errors.name && (
                    <SmallText className="text-red-500">
                      {errors.name.message}
                    </SmallText>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-coolgray-700">
                    Email
                  </Label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="px-4 py-3 gap-2 rounded-lg border font-normal text-base leading-6"
                  />
                  {errors.email && (
                    <SmallText className="text-red-500">
                      {errors.email.message}
                    </SmallText>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password" className="text-coolgray-700">
                    Password
                  </Label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    {...register("password")}
                    className="px-4 py-3 gap-2 rounded-lg border font-normal text-base leading-6"
                  />
                  {errors.password && (
                    <SmallText className="text-red-500">
                      {errors.password.message}
                    </SmallText>
                  )}
                </div>
                <button
                  type="submit"
                  className="border px-4 py-2 bg-blue-600 text-white rounded gap-2"
                >
                  Get started
                </button>
              </form>

              <div className="flex flex-col gap-4">
                <button className="border px-4 py-2 flex justify-center gap-3">
                  <img src="../src/assets/google.png" alt="google logo" />
                  Sign up with Google
                </button>
              </div>
            </div>
            <div>
              <P className="text-coolgray-800 flex justify-center gap-1">
                Already have an account?
                <Link to="/login">
                  <P className="text-blue-600">Log in</P>
                </Link>
              </P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
