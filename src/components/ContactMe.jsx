import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {

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
      toast.success("Message Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <section className="section">
      <ToastContainer />
      
      <div className="" id="Contact_me">
        <h2 className="text-xl text-center font-medium md:text-3xl">Contact Me!</h2>
        <div className=" ">
          <form onSubmit={onSubmit} className="mx-5 grid grid-flow-row gap-4 md:w-3/6 md:mx-auto">
            <div>
              <input type="hidden" name="access_key" value='{accesskey || ""}' />
            </div>
            <div className="grid grid-flow-row gap-1 ">
              <label htmlFor="name">Your Name:</label>
              <input type="text" placeholder="Full Name" name="name" className="h-[45px] px-3 text-[#0f112e] rounded-md bg-[#dcebe8]" required/>
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="Enter your Email" name="email" className="h-[45px] px-3 text-[#0f112e] rounded-md bg-[#dcebe8]" required/>
            </div>
            <div className="">
              <textarea placeholder="Enter your Message" name="message" className="p-3 w-full h-[128px] text-start text-[#0f112e] rounded-md bg-[#dcebe8]" required></textarea>
            </div>
            <button type="submit" className="bg-[#b87f17e5] py-1 w-[80%] mx-auto rounded-md">{result ? result : "Send Message"}</button>
          </form>
        </div>
        
      </div>
    </section>
  )
}

export default ContactMe