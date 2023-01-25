import React from "react";

const ContactUs = () => {
  return (
    <div className="fullPage md:my-[3rem] flex flex-col md:flex-row">
      <div className="flex flex-col md:max-w-[40%] text-center md:text-left gap-[20px]">
        <div className="text-[25px] md:text-[60px] font-bold">
          Contact Information
        </div>
        <div>
          <div className="text-[16px] font-bold">ADDRESS</div>
          <p className="text-[14px]">
            No 4, Adesoji Omirin Street, Awoyaya, Ibeju-Lekki, Lagos State,
            Nigeria.
          </p>
        </div>
        <div>
          <div className="text-[16px] font-bold">EMAIL</div>
          <p className="text-[14px]">dev.adebayoomirin@gmail.com</p>
        </div>
        <div>
          <div className="text-[16px] font-bold">PHONE</div>
          <p className="text-[14px]">+2349055294954</p>
        </div>
      </div>
      <div className="bg-blue-800 w-full md:pl-[100px]">
        <div className="md:flex items-center justify-end hidden text-[23px]">
          Omirin Adebayo
        </div>
        <form className=" flex flex-col gap-[20px] text-[20px]">
          <label className="flex flex-col">
            Name
            <input
              type="text"
              name="name"
              className="bg-[#1b1f24] rounded-[999px]"
            />
          </label>
          <br />
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Message
            <textarea name="message" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((formData) => ({ ...formData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem("formData", JSON.stringify(formData));
//   };

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Message:
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
