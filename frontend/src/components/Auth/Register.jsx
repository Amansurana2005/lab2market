/*
Temporarily disabled registration form for curated consultancy model.
The original implementation is preserved for reactivation later.

import { useState, useContext } from "react";
import API from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

... original implementation ...
*/

export default function Register() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Registration temporarily disabled</h2>
      <p className="text-gray-600">Public registration is paused while onboarding institutions and researchers. For partner inquiries, contact <a href="mailto:amansurana5454@gmail.com" className="text-blue-500">amansurana5454@gmail.com</a>.</p>
    </div>
  );
}
