"use client";

import { registerUser } from "@/actions/register";
import { Form, Input, Button } from "@heroui/react";
import { register } from "module";
import { useState } from "react";

interface Iprops {
  onclose: () => void;
}

const RegistrationForm = ({ onclose }: Iprops) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const result = await registerUser(formData);
    console.log("Registration result:", result);

    onclose();
  };

  return (
    <Form
      className="max-w-lg mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create Your Account
      </h2>
      <Input
        aria-label="Email"
        required
        name="email"
        placeholder="Enter your email"
        type="email"
        value={formData.email}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
      <div className="relative w-full mb-4">
        <Input
          required
          name="password"
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <label className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => setShowPassword(!showPassword)}
            checked={showPassword}
          />
          <span className="w-8 h-4 bg-gray-300 rounded-full shadow-inner relative">
            <span
              className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow transform transition-transform ${
                showPassword ? "translate-x-4 bg-blue-500" : "bg-gray-500"
              }`}
            ></span>
          </span>
        </label>
      </div>
      <div className="relative w-full mb-6">
        <Input
          required
          name="confirmPassword"
          placeholder="Confirm your password"
          type={showPassword ? "text" : "password"}
          value={formData.confirmPassword}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <label className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => setShowPassword(!showPassword)}
            checked={showPassword}
          />
          <span className="w-8 h-4 bg-gray-300 rounded-full shadow-inner relative">
            <span
              className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow transform transition-transform ${
                showPassword ? "translate-x-4 bg-blue-500" : "bg-gray-500"
              }`}
            ></span>
          </span>
        </label>
      </div>
      <div className="flex justify-between items-center">
        <Button
          onPress={onclose}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Register
        </Button>
      </div>
    </Form>
  );
};
export default RegistrationForm;



