import React from "react";

const Contact = () => {
  return (
    <div className="text-center m-40">
      <div>
        <p className="text-[#64ffda] tracking-wide font-mono">04. What's Next?</p>
        <h1 className="text-5xl m-4 text-[#ccd6f6] font-bold">Get In Touch</h1>
      </div>
      <div className="w-[600px] m-auto tracking-wide leading-relaxed py-6 text-[#707b97]">
        I'm actively seeking new opportunities to enhance my skills and grow as
        a professional. If you think I'd be a good fit for your team or have any
        questions, please feel free to contact me. I'll make sure to respond as
        soon as possible. Thank you for considering me!
      </div>

      <a href="mailto:harshshekhawat963@gmail.com" target="blank">
        <div className="font-mono text-sm relative top-10 tracking-wide m-auto rounded-[4px] border-[1px] flex justify-center items-center rounded-[4px] border-[1px] w-40 h-[50px] text-center h-10  border-[#64ffda] text-[#64ffda]">
          Mail Me Here
        </div>
      </a>
    </div>
  );
};

export default Contact;
