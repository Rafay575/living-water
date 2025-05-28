"use client"
import Link from "next/link";
import React, { useState } from "react";
import {baseUrl} from "@/api/baseUrl";
const RegisterPrimary = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" });
    setLoading(true);

    const form = new FormData(e.target);
    const body = {
      firstname: form.get("firstname"),
      email: form.get("email"),
      password: form.get("password"),
      confirmpassword: form.get("confirmpassword"),
    };

    // Validate matching passwords
    if (body.password !== body.confirmpassword) {
      setAlert({ type: "danger", message: "Passwords do not match." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${baseUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (!res.ok) {
        setAlert({ type: "danger", message: data.error || 'Registration failed.' });
      } else {
        setAlert({ type: "success", message: 'Account created successfully.' });
      }
    } catch (err) {
      setAlert({ type: "danger", message: 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-section py-5">
      <div className="container">
        {alert.message && (
          <div className={`alert alert-${alert.type} text-center`} role="alert">
            {alert.message}
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Register Your Account</h2>

                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="form-control"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmpassword"
                      name="confirmpassword"
                      className="form-control"
                      placeholder="Confirm password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                          className="theme-btn-1 btn reverse-color btn-block w-100"
                    disabled={loading}
                  >
                    {loading && (
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>

                <p className="text-center mt-3 mb-0">
                  Already have an account? <Link href="/login">Login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .register-section {
          background: #f8f9fa;
          min-height: 100vh;
        }
        .card {
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default RegisterPrimary;
