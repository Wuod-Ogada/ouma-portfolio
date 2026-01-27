import BuildWithMe from "./BuildWithMe"
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { collab } from "../assets/assets";


const WorkWithMe = () => {

const accesskey= import.meta.env.VITE_CONTACT_ACCESS_KEY;
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  
    formData.append("access_key", accesskey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setResult("");
      toast.success("Project Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", res);
      toast.error(res.message)
      setResult("");
    }
  };


  return (
    <>
    <div className="flex flex-col items-center">
      <ToastContainer />

      <div className="text-center text-2xl my-5">
        <p>Let&apos;s build Greatness!</p>
      </div>
      <div className="md:flex md:ml-[-10%] items-center">
        <div className="w-50 md:w-85 mx-auto object-contain">
          <img src={collab} alt="collaboration" />
        </div>
        <div>
          <BuildWithMe submit={onSubmit} result={result}/>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default WorkWithMe