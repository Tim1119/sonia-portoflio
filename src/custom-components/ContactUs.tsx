import React, { useState } from 'react';
import { FaMapMarkerAlt,  FaEnvelope, FaClock } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuClock } from "react-icons/lu";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { Button } from '../components/ui/button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="containerize mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Contact Us</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactInfo
            icon={<LiaMapMarkerAltSolid className="text-lemon" />}
            title="Address"
            details={[
              "FUTA South Gate,",
              "Akure, Ondo State",
              "Nigeria."
            ]}
          />
          <ContactInfo
            icon={<IoCallOutline className="text-lemon" />}
            title="Call Us"
            details={[
              "+234 815 437 2687",
              "+234 815 437 2687"
            ]}
          />
          <ContactInfo
            icon={<HiOutlineEnvelope className="text-lemon" />}
            title="Email Us"
            details={[
              "executivezenservices@gmail.com",
              "soniaanthony@gmail.com"
            ]}
          />
          <ContactInfo
            icon={<LuClock className="text-lemon" />}
            title="Open Hours"
            details={[
              "Monday - Friday",
              "9:00AM - 05:00PM"
            ]}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-[nunito]">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="form-control"
            required
          ></textarea>
          <Button className='bg-lemon px-5'>Send Message</Button>
        </form>
      </div>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => {
  return (
    <div className="bg-[#F7FBF1] p-[30px] font-[nunito] rounded-md">
      <div className="mr-4 mt-1 text-[38px] text-[#82C82A]">{icon}</div>
      <div className='font-[nunito]' >
        <h3 className="font-semibold text-xl mt-[20px] mr-0 mb-0 text-[#1C4942]">{title}</h3>
        {details.map((detail, index) => (


<p key={index} className="text-gray-600 font-light">{detail}</p>



        ))}
      </div>
    </div>
  );
};

export default ContactPage;

