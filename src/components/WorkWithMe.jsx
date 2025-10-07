import BuildWithMe from "./BuildWithMe"
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const WorkWithMe = () => {

const accesskey= import.meta.env.VITE_CONTACT_ACCESS_KEY;
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  
    formData.append("access_key", accesskey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Project Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };


  return (
    <>
    <div className="">
      <ToastContainer />


      <div className="text-center text-2xl my-5">
      <p>Let&apos;s build Greatness!</p>
      </div>
      <BuildWithMe submit={onSubmit} result={result}/>
    </div>
    </>
    
  )
}

export default WorkWithMe