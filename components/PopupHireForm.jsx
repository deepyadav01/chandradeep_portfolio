import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import React from "react";
import Snackbar from "./Snackbar";

const PopupHireForm = ({ onSuccess }) => {
  const [form, setForm] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
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
        if (onSuccess) onSuccess();
      }
    } catch {
      setSuccess(false);
    }
    setLoading(false);
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <h3 className="text-2xl text-accent mb-2">Let's work together</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="text" placeholder="Firstname" value={form.firstname} onChange={e => setForm(f => ({...f, firstname: e.target.value}))} />
        <Input type="text" placeholder="Lastname" value={form.lastname} onChange={e => setForm(f => ({...f, lastname: e.target.value}))} />
        <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
        <Input type="text" placeholder="Phone" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} />
      </div>
      <Textarea
        className="h-[120px]"
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
  );
};

export default PopupHireForm;
