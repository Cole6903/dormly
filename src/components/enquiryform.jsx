import React, { useState } from "react";

export default function EnquiryForm({pgId}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ ...form, pgId })
    });
    setStatus(res.ok ? "Enquiry sent!" : "Failed. Try again.");
    if (res.ok) setForm({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input name="name" required className="w-full border p-2 rounded" placeholder="Your Name" value={form.name} onChange={handleChange} />
      <input name="email" type="email" required className="w-full border p-2 rounded" placeholder="Email" value={form.email} onChange={handleChange}/>
      <input name="phone" required className="w-full border p-2 rounded" placeholder="Phone" value={form.phone} onChange={handleChange}/>
      <textarea name="message" className="w-full border p-2 rounded" placeholder="Message" value={form.message} onChange={handleChange}/>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Send Enquiry</button>
      {status && <div className="text-green-600">{status}</div>}
    </form>
  );
}