import {Quote} from "../components/Quote";
import {useState} from "react";
import {SignUpType} from "@udayprakash80/common-medium";
import {Link, useNavigate} from "react-router-dom";
import {LabelledInput} from "../Shared/LabelledInput";
import axios from "axios";
import {BACKEND_URL} from "../config";

export function SignUp() {
  const navigate = useNavigate();
  const [postInputs, setPostInputs ]= useState<SignUpType>({
    email: "",
    password: "",
    name: ""
  });
  async function sendRequest() {
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
      if(response){
        const jwt = response.data;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      }
    }catch(e){
      console.error(e);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen flex justify-center flex-col">
        <div className= "flex flex-row min-h-screen justify-center items-center">
          <div className="bg-white rounded-lg p-5">
            <div className="flex justify-center text-4xl font-bold">
              Create an account
            </div>
            <div className="flex justify-center text-xl text-slate-500 p-2">
              Already have a account?
              <Link className="pl-2 underline" to="/signin">
                Sign In
              </Link>
            </div>

            <div>
              <LabelledInput type="text" label="Email" placeholder="udayprakash80@yahoo.com" onChange= {(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value
                })
              }}></LabelledInput>
            </div>
            <div>
              <LabelledInput type="password" label="Password" placeholder="******" onChange= {(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value
                })
              }}></LabelledInput>
            </div>
            <div>
              <LabelledInput type="text" label="Name" placeholder="Udaya Bihari" onChange= {(e) => {
                setPostInputs( {
                  ...postInputs,
                  name: e.target.value
                })
              }}></LabelledInput>
            </div>
            <div className="pt-5">
              <button onClick={sendRequest} className="bg-slate-900 p-3 text-white w-full rounded-lg text-lg">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="invisible lg:visible">
        <Quote/>
      </div>
    </div>
  )
}
