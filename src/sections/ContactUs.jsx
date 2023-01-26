import React from "react";

const ContactUs = () => {
  return (
    <div className="mx-[6rem] items-center justify-center md:my-[3rem] flex flex-col md:flex-row">
      <div className="flex flex-col w-[50%] text-center md:text-left gap-[20px]">
        <div className="text-[25px] md:text-[60px] font-bold max-w-[60%]">
          Contact Information
        </div>
        <div className="max-w-[60%]">
          <div className="text-[16px] font-bold">ADDRESS</div>
          <p className="text-[14px]">
            No 4, Adesoji Omirin Street, Awoyaya, Ibeju-Lekki, Lagos State,
            Nigeria.
          </p>
        </div>
        <div className="max-w-[60%]">
          <div className="text-[16px] font-bold">EMAIL</div>
          <p className="text-[14px]">dev.adebayoomirin@gmail.com</p>
        </div>
        <div className="max-w-[60%]">
          <div className="text-[16px] font-bold">PHONE</div>
          <p className="text-[14px]">+2349055294954</p>
        </div>
      </div>
      <div className="w-[50%] flex flex-col md:pl-[100px] pt-[0.5rem]">
        <div className="md:flex items-center justify-end hidden px-[10px] text-[20px]">
          Omirin Adebayo Osamudiamen
        </div>
        <form className="flex flex-col gap-[1rem] text-[20px]">
          <label className="flex flex-col gap-[0.2rem]">
            Name
            <input
              type="text"
              name="name"
              className="bg-[#1b1f24] rounded-[25px] px-[10px] text-white py-[10px]"
            />
          </label>
          <label className="flex flex-col gap-[0.2rem]">
            Email
            <input
              type="email"
              name="email"
              className="bg-[#1b1f24] rounded-[25px] px-[10px] text-white py-[10px]"
            />
          </label>
          <label className="flex flex-col gap-[0.2rem]">
            Message
            <textarea
              name="message"
              className="bg-[#1b1f24] rounded-[15px] min-h-[150px] px-[10px] text-white py-[10px]"
            />
          </label>
          <button
            type="submit"
            className="border-[1px] border-black w-fit px-[50px] py-[10px] hover:bg-[#1b1f24] hover:text-white transition ease-in-out duration-500"
          >
            GET IN TOUCH
          </button>
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
