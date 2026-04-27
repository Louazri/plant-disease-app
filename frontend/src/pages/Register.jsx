import { useState } from "react";
import api from "../api/axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await api.post("/auth/register", formData);
      setIsError(false);
      setMessage(response?.data?.message || "Registration successful");
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      setIsError(true);
      setMessage(error?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className="mx-auto mt-10 max-w-md rounded-lg border border-slate-200 p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full rounded border border-slate-300 px-3 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded border border-slate-300 px-3 py-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded border border-slate-300 px-3 py-2"
          required
        />
        <button
          type="submit"
          className="w-full rounded bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
        >
          Register
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-sm ${isError ? "text-red-600" : "text-green-700"}`}>
          {message}
        </p>
      )}
    </section>
  );
}

export default Register;
