"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { setCredentials } from "../../../../store/authSlice";
import { useSelector } from 'react-redux';
import { baseUrl } from "@/api/baseUrl";
const LoginPrimary = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert]     = useState({ type: "", message: "" });
  const dispatch = useDispatch();
  const router   = useRouter();
  const { token, user } = useSelector((s) => s.auth);
  console.log(token,user);
  const handleLogin = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" });
    setLoading(true);

    const form = new FormData(e.target);
    const payload = {
      email: form.get("email"),
      password: form.get("password"),
    };

    try {
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setAlert({ type: "danger", message: data.error || "Login failed." });
      } else {
        // 1. Store in Redux
        dispatch(setCredentials({ user: data.user || {}, token: data.token }));
        // 2. Persist JWT in cookie for 7 days
        Cookies.set("token", data.token, { expires: 7 });
        setAlert({ type: "success", message: "Logged in successfully." });
        // 3. Redirect to dashboard
        router.push("/");
      }
    } catch {
      setAlert({ type: "danger", message: "An unexpected error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-section py-5" style={{ background: "#f8f9fa", minHeight: "100vh" }}>
      <div className="container">
        {alert.message && (
          <div className={`alert alert-${alert.type} text-center`} role="alert">
            {alert.message}
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm" style={{ borderRadius: 10 }}>
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Sign In To Your Account</h2>

                <form onSubmit={handleLogin}>
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

                  <div className="mb-4">
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

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    )}
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                </form>

                <p className="text-center mt-3 mb-0">
                  Don&apos;t have an account? <Link href="/register">Create one</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPrimary;
