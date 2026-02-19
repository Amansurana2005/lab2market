/*
Temporarily disabled login form for curated consultancy model.
The original implementation is preserved below for easy reactivation.

import { useState, useContext } from "react";
import API from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

... original implementation ...
*/

export default function Login() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Login temporarily disabled</h2>
      <p className="text-gray-600">Authentication is disabled while we run a curated consultancy model. If you are an existing partner, please contact us at <a href="mailto:amansurana5454@gmail.com" className="text-blue-500">amansurana5454@gmail.com</a>.</p>
    </div>
  );
}
