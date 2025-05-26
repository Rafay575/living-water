'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';
import HeroPrimary from '@/components/sections/hero-banners/HeroPrimary';

export default function PurchasesPage() {
  const router = useRouter();
  const token = useSelector(s => s.auth.token);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!token) {
      router.replace('/login');
      return;
    }
    fetchPurchases(page);
  }, [token, page]);

  const fetchPurchases = async (page) => {
    try {
      const res = await fetch(`http://localhost:5000/api/purchase?page=${page}&limit=10`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed to load');
      setData(result.purchases);
      setTotalPages(result.totalPages);
    } catch (err) {
      setAlert({ type: 'danger', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  if (!token) return null; // avoid flicker

  return (
    <PageWrapper
      isNotHeaderTop={true}
      isHeaderRight={true}
      isTextWhite={true}
      isNavbarAppointmentBtn={true}
    >
      <HeroPrimary title="Order History" text="Order History" bg="/img/bg/5.jpg" />
      <div className="container pb-5">
        <h1 className="mb-4">Order History</h1>

        {alert.message && (
          <div className={`alert alert-${alert.type}`}>{alert.message}</div>
        )}

        {loading ? (
          <p>Loading…</p>
        ) : data.length === 0 ? (
          <p>No purchases found.</p>
        ) : (
          <>
            <div className="row">
              {data.map((p) => (
                <div className="col-12 col-md-4" key={p.id}>
                  <div className="card mb-4 shadow">
                    <div className="card-body text-center">
                      <h5 className="card-title">Order #{p.id}</h5>
                      <p className="card-text">Cases: {p.cases}</p>
                      <p className="card-text">{p.description}</p>
                      <h6 className="text-primary">${p.price}</h6>
                      <small className="text-muted">
                        {new Date(p.created_at).toLocaleString()}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-4">
              <button
                className="btn btn-secondary mx-2"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="align-self-center">
                Page {page} of {totalPages}
              </span>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </PageWrapper>
  );
}
