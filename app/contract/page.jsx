"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
// import ClarityScript from "@/components/ClarityScript"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 886 0145 039",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "chandradeepyadav2@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Etawah, Uttar Pradesh, India 206242",
  },
];

const Contract = () => {
  // ...existing code...
  const [form, setForm] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    // service: '',
    message: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(null);
  const [snackbar, setSnackbar] = React.useState({ open: false, message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    // Validation
    if (!form.firstname.trim() || !form.lastname.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      setLoading(false);
      setSnackbar({ open: true, message: "All fields are required." });
      return;
    }
    // Simple email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setLoading(false);
      setSnackbar({ open: true, message: "Please enter a valid email address." });
      return;
    }
    // Simple phone validation (10+ digits)
    if (!/^\d{10,}$/.test(form.phone.replace(/\D/g, ''))) {
      setLoading(false);
      setSnackbar({ open: true, message: "Please enter a valid phone number." });
      return;
    }
    try {
      const res = await fetch('/api/send-hire-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setSuccess(data.success);
      if (data.success) {
        setForm({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch {
      setSuccess(false);
    }
    setLoading(false);
  }

  return (
    <>
      {/* <ClarityScript/> */}
      <motion.section
        initial={{ opaacity: 0 }}
        animate={{
          opaacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" placeholder="Firstname" value={form.firstname} onChange={e => setForm(f => ({...f, firstname: e.target.value}))} />
                  <Input type="text" placeholder="Lastname" value={form.lastname} onChange={e => setForm(f => ({...f, lastname: e.target.value}))} />
                  <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
                  <Input type="text" placeholder="Phone" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} />
                </div>
                {/* <Select value={form.service} onValueChange={val => setForm(f => ({...f, service: val}))}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel> Select a service</SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UI/Ux Design">UI/Ux Design</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select> */}
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here"
                  value={form.message}
                  onChange={e => setForm(f => ({...f, message: e.target.value}))}
                />
                <Button size="md" className="max-w-40" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
                {success === true && <p className="text-green-500">Message sent!</p>}
                {success === false && <p className="text-red-500">Failed to send message.</p>}
                <Snackbar
                  open={snackbar.open}
                  message={snackbar.message}
                  onClose={() => setSnackbar({ open: false, message: "" })}
                  type="error"
                />
              </form>
            </div>
            <div
              className="flex-1 flex items-center xl:justify-end order-1
            xl:order-none mb-8 xl:mb-0"
            >
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="tet-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  </>

  );
};

export default Contract;
