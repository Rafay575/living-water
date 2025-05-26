'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

/* ────────── lazy-load PayPal (no markup on the server) ────────── */
const PayPalScriptProvider = dynamic(
  () => import('@paypal/react-paypal-js').then(m => m.PayPalScriptProvider),
  { ssr: false }
);
const PayPalButtons = dynamic(
  () => import('@paypal/react-paypal-js').then(m => m.PayPalButtons),
  { ssr: false }
);

/* ────────── tiny gate that waits for hydration to finish ───────── */
function ClientOnly({ children }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated ? children : null;
}

export default function ProductPage() {
  const router = useRouter();
  const { token } = useSelector(s => s.auth);

  const [mainImage, setMainImage]   = useState('/img/abc.png');
  const [selectedIdx, setSelected]  = useState(0);
  const [alert, setAlert]           = useState({ type: '', message: '' });

  const [addr, setAddr] = useState({
    line1:   '',
    city:    '',
    state:   '',
    zip:     '',
    country: '',
    phone:   '',
  });
  const isAddressValid = Object.values(addr).every(v => v.trim());

  const packages = [
    { cases: 1,  description: '12 (20 oz) bottles', price:  20 },
    { cases: 6,  description: '12 (20 oz) bottles', price: 110 },
    { cases: 12, description: '12 (20 oz) bottles', price: 220 },
  ];
  const selected = packages[selectedIdx];

  /* ───────────────────────── PayPal hooks ───────────────────────── */
  const onPayCreate = async () => {
    if (!token) { router.push('/login'); return; }

    const res = await fetch('http://localhost:5000/api/purchase/create-order', {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:  `Bearer ${token}`,
      },
      body: JSON.stringify({ price: selected.price, shipping: addr }),
    });
    const { orderID } = await res.json();
    return orderID;
  };

  const onPayApprove = async data => {
    const res = await fetch('http://localhost:5000/api/purchase', {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:  `Bearer ${token}`,
      },
      body: JSON.stringify({
        orderID:     data.orderID,
        cases:       selected.cases,
        description: selected.description,
        price:       selected.price,
        shipping:    addr,
      }),
    });
    const out = await res.json();
    setAlert(
      res.ok
        ? { type: 'success', message: 'Purchase recorded!' }
        : { type: 'danger',  message: out.error || 'Record failed' }
    );
  };

  const onPayError = err => {
    console.error(err);
    setAlert({ type: 'danger', message: 'PayPal error, please try again.' });
  };
  /* ──────────────────────────────────────────────────────────────── */

  return (
    <div className="container py-4" style={{ marginBottom: '150px' }}>
      {alert.message && (
        <div className={`alert alert-${alert.type}`}>{alert.message}</div>
      )}

      <div className="row gy-4">
        {/* ─────────── gallery ─────────── */}
        <div className="col-12 col-md-6">
          <div className="mb-3 d-flex gap-2 flex-wrap">
            {packages.map((_, i) => (
              <img
                key={i}
                src="/img/abc.png"
                alt=""
                className="img-thumbnail"
                style={{ width: 60, height: 60, cursor: 'pointer' }}
                onClick={() => setMainImage('/img/abc.png')}
              />
            ))}
          </div>
          <div className="text-center">
            <Image
              src={mainImage}
              alt="Living Water"
              width={400}
              height={400}
              className="rounded"
            />
          </div>
        </div>

        {/* ─────────── details + form ─────────── */}
        <div className="col-12 col-md-6">
          <h1 className="fw-bold">Living Water</h1>
          <p className="text-muted">
            Our water is inherently PURE and free from chemicals…
          </p>

          {/* package selector */}
          <h5 className="mt-4">Choose Your Package</h5>
          <div className="row gy-3">
            {packages.map((pkg, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className={`card h-100 text-center ${
                    selectedIdx === i ? 'border-primary shadow' : ''
                  }`}
                  onClick={() => setSelected(i)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-body">
                    <h6>
                      {pkg.cases} Case{pkg.cases > 1 ? 's' : ''}
                    </h6>
                    <small className="text-muted d-block">{pkg.description}</small>
                    <p className="h5 mt-2 mb-0">${pkg.price}.00</p>
                    <small className="text-secondary">USD</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* shipping form */}
          <h5 className="mt-4">Shipping Address</h5>
          <div className="row g-3">
            <div className="col-md-12">
              <input
                className="form-control"
                placeholder="Street address (Line 1)"
                value={addr.line1}
                onChange={e => setAddr({ ...addr, line1: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="City / Town"
                value={addr.city}
                onChange={e => setAddr({ ...addr, city: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="State / Province / Region"
                value={addr.state}
                onChange={e => setAddr({ ...addr, state: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="ZIP / Postal code"
                value={addr.zip}
                onChange={e => setAddr({ ...addr, zip: e.target.value })}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Country code (e.g. US, PK)"
                value={addr.country}
                onChange={e =>
                  setAddr({ ...addr, country: e.target.value.toUpperCase() })
                }
              />
            </div>
            <div className="col-md-12">
              <input
                className="form-control"
                placeholder="Phone number"
                value={addr.phone}
                onChange={e => setAddr({ ...addr, phone: e.target.value })}
              />
            </div>
          </div>

          {/* PayPal */}
          <div className="mt-4" suppressHydrationWarning>
            <ClientOnly>
              <PayPalScriptProvider
                options={{
                  'client-id':        process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
                  currency:           'USD',
                  'disable-funding':  'paylater,card,credit',
                }}
              >
                <PayPalButtons
                  style={{ layout: 'vertical' }}
                  createOrder={onPayCreate}
                  onApprove={onPayApprove}
                  onError={onPayError}
                  disabled={!isAddressValid}
                />
              </PayPalScriptProvider>

              {!isAddressValid && (
                <small className="text-danger">
                  Please complete the shipping form to enable checkout.
                </small>
              )}
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  );
}
