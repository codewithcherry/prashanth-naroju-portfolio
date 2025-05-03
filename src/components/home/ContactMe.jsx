"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaBehance, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interest: "Other",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (interest) => {
    setFormData({ ...formData, interest });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      const response = await axios.post("/api/send-message", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        setStatus({ loading: false, success: true, error: null });
        // Reset form on successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
          interest: "Other",
        });
      } else {
        throw new Error(response.data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        loading: false,
        success: false,
        error: error.response?.data?.error || error.message,
      });
    }
  };

  return (
    <div className="my-10 scroll-m-24" id="Contact">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
        className="text-2xl md:text-4xl font-bold text-center "
      >
        Contact Me
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
        className="flex flex-col md:flex-row gap-8 bg-white dark:bg-black text-black dark:text-white p-6 md:p-10 rounded-xl shadow-xl w-full max-w-6xl mx-auto mt-8"
      >
        {/* Left Section */}
        <motion.div
          variants={item}
          className="flex flex-col gap-8 w-full md:w-1/2"
        >
          <motion.div variants={item}>
            <h2 className="text-2xl md:text-3xl font-bold">
              Let's talk on something{" "}
              <span className="text-blue-500">great</span> together
            </h2>
          </motion.div>

          <motion.div variants={container} className="flex flex-col gap-4">
            <motion.div variants={item} className="flex items-center gap-3">
              <Mail className="text-blue-500 flex-shrink-0" size={20} />
              <span>prashanth.naro@gmail.com</span>
            </motion.div>
            {/* <motion.div variants={item} className="flex items-center gap-3">
              <Phone className="text-blue-500 flex-shrink-0" size={20} />
              <span>+91 814 357 2081</span>
            </motion.div> */}
            <motion.div variants={item} className="flex items-center gap-3">
              <MapPin className="text-blue-500 flex-shrink-0" size={20} />
              <span>Hyderabad, India</span>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="flex gap-4 mt-4">
            <FaLinkedin className="cursor-pointer text-blue-500 hover:text-blue-400 text-xl" />
            <FaTwitter className="cursor-pointer text-blue-500 hover:text-blue-400 text-xl" />
            <FaInstagram className="cursor-pointer text-blue-500 hover:text-blue-400 text-xl" />
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div variants={item} className="w-full md:w-1/2">
          <motion.div variants={container} className="space-y-4">
            <motion.div variants={item}>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                I'm interested in:
              </h3>
              <motion.div variants={container} className="flex flex-wrap gap-2">
                {[
                  "Hire Me",
                  "Connect",
                  "Discuss Project",
                  "Web Development",
                  "Freelance",
                  "Other",
                ].map((interest, index) => (
                  <motion.div key={index} variants={item}>
                    <Button
                      variant={
                        formData.interest === interest ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => handleInterestChange(interest)}
                      className="flex-1 min-w-fit"
                    >
                      {interest}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={item}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </motion.div>

            <motion.div variants={item}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </motion.div>

            <motion.div variants={item}>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              ></textarea>
            </motion.div>

            <motion.div variants={item}>
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3"
                onClick={handleSubmit}
              >
                {status.loading ? "Sending..." : "Send message"}
              </Button>
            </motion.div>
            {/* Status messages */}
            {status.error && (
              <div variants={item} className="text-red-500 text-sm">
                {status.error}
              </div>
            )}

            {status.success && (
              <div  className="text-green-500 text-sm">
                Message sent successfully!
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
