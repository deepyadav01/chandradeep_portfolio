import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import React from "react";

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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
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
    </form>
  );
};

export default PopupHireForm;
