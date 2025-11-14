import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import './cyber.css'
import Spline from '@splinetool/react-spline'

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
        }
      })
    }, { threshold: 0.2 })

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <div className="bg-dark-tech text-white">
      {/* Sticky Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top cyber">
        <div className="container py-2">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
            <span className="rounded-circle d-inline-block glow-pulse" style={{width:10,height:10,background:'#5ce1ff'}}></span>
            <strong>Sentinel Labs</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#stats">Stats</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
              <li className="nav-item ms-lg-3"><a className="btn btn-ghost" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero with Spline */}
      <header id="home" className="hero position-relative">
        <div className="grid-overlay"></div>
        <div className="scanline"></div>

        <div className="container position-relative" style={{zIndex:2}}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h1 className="display-3 hero-title gradient-text mb-3 reveal slide-up">Defend. Detect. Disrupt.</h1>
              <p className="lead mb-4 reveal">Next‑gen cyber security for cloud, network, and edge. AI‑assisted protection with real‑time threat monitoring.</p>
              <div className="d-flex flex-wrap gap-3 reveal">
                <a href="#pricing" className="btn btn-cyber">Start Protection</a>
                <a href="#services" className="btn btn-ghost">Explore Services</a>
              </div>
              <div className="d-flex gap-4 mt-5 small reveal">
                <div className="d-flex align-items-center gap-2"><span className="badge rounded-pill text-bg-dark neon-border">SOC 24/7</span> Always‑on</div>
                <div className="d-flex align-items-center gap-2"><span className="badge rounded-pill text-bg-dark neon-border">ISO 27001</span> Certified</div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 holo reveal zoom-in" style={{height:'60vh'}}>
              <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge badge-pop rounded-pill px-3 py-2">Our Expertise</span>
            <h2 className="mt-3 section-title">Advanced Security Services</h2>
            <p className="section-sub">Penetration testing, network defense, and cloud security engineered for scale.</p>
          </div>

          <div className="row g-4">
            {[
              {title:'Penetration Testing', text:'Red‑team simulations to uncover vulnerabilities before attackers do.', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" stroke="#5ce1ff" strokeWidth="1.6"/><path d="M9 12l2 2 4-4" stroke="#7a5cff" strokeWidth="1.6"/></svg>
              )},
              {title:'Network Security', text:'Zero‑trust segmentation and intelligent intrusion prevention.', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#5ce1ff" strokeWidth="1.6"/><path d="M7 7V5a5 5 0 0110 0v2" stroke="#7a5cff" strokeWidth="1.6"/></svg>
              )},
              {title:'Cloud Protection', text:'Hardened configurations, workload scanning, and runtime defense.', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 16h9a4 4 0 100-8 6 6 0 10-12 2" stroke="#5ce1ff" strokeWidth="1.6"/></svg>
              )},
              {title:'Threat Monitoring', text:'AI‑assisted detection with actionable alerts and forensics.', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="#7a5cff" strokeWidth="1.6"/><path d="M3 12a9 9 0 0118 0" stroke="#5ce1ff" strokeWidth="1.6"/></svg>
              )},
              {title:'Security Consulting', text:'Policy, compliance, and incident response readiness.', icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l9 4-9 4-9-4 9-4z" stroke="#5ce1ff" strokeWidth="1.6"/><path d="M3 11l9 4 9-4" stroke="#7a5cff" strokeWidth="1.6"/></svg>
              )}
            ].map((s, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="card cyber p-4 h-100 reveal slide-up">
                  <div className="icon-wrap">{s.icon}</div>
                  <h5 className="card-title mb-2">{s.title}</h5>
                  <p className="card-text mb-0">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="section pt-0">
        <div className="container">
          <div className="row g-4">
            {[
              {v:'99.99%', l:'Uptime'},
              {v:'< 5m', l:'MTTR'},
              {v:'+120', l:'Enterprise Clients'},
              {v:'24/7', l:'Global SOC'}
            ].map((x, i) => (
              <div className="col-6 col-lg-3" key={i}>
                <div className="stat reveal glow">
                  <div className="value gradient-text">{x.v}</div>
                  <div className="label">{x.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Trusted by leaders</h2>
            <p className="section-sub">Real feedback from teams that rely on us.</p>
          </div>

          <div id="carousel" className="carousel slide reveal" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[
                {q:'The monitoring and response is lightning‑fast. We sleep better.', a:'CTO, Fintech Co.'},
                {q:'Flawless red‑team reports and guided remediation.', a:'CISO, Healthcare'},
                {q:'Cloud posture improved in weeks, not months.', a:'Head of Cloud, SaaS'}
              ].map((t, i) => (
                <div className={`carousel-item ${i===0 ? 'active' : ''}`} key={i}>
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="card cyber p-4 p-md-5 text-center">
                        <h5 className="mb-3">“{t.q}”</h5>
                        <p className="text-muted mb-0">— {t.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex gap-2 justify-content-center mt-3">
              <button className="btn btn-ghost btn-sm" type="button" data-bs-target="#carousel" data-bs-slide="prev">Prev</button>
              <button className="btn btn-ghost btn-sm" type="button" data-bs-target="#carousel" data-bs-slide="next">Next</button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section pt-0 pricing">
        <div className="container">
          <div className="row g-4 align-items-end">
            {[
              {name:'Starter', price:'$399/mo', features:['24/7 Monitoring','Email Alerts','Monthly Reports'], cta:'Get Starter'},
              {name:'Pro', price:'$999/mo', features:['SIEM Integration','Incident Response','Weekly Reports'], cta:'Go Pro', pop:true},
              {name:'Enterprise', price:'Custom', features:['Dedicated SOC','Compliance Suite','On‑site Audits'], cta:'Contact Sales'}
            ].map((p, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className={`card cyber p-4 h-100 reveal ${p.pop ? 'holo' : 'slide-up'}`}>
                  {p.pop && <span className="badge badge-pop rounded-pill align-self-start mb-2">Most Popular</span>}
                  <h5 className="mb-2">{p.name}</h5>
                  <div className="price gradient-text mb-3">{p.price}</div>
                  <ul className="list-unstyled small mb-4">
                    {p.features.map((f, j) => (
                      <li key={j} className="feature d-flex align-items-center gap-2 mb-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l4 4L19 6" stroke="#5ce1ff" strokeWidth="2"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`btn ${p.pop ? 'btn-cyber' : 'btn-ghost'}`}>{p.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4 mt-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div className="small text-muted">© {new Date().getFullYear()} Sentinel Labs. All rights reserved.</div>
          <div className="social d-flex">
            {[
              {href:'#', path:'M18 2H6a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z'},
              {href:'#', path:'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z'},
              {href:'#', path:'M21 15a4 4 0 00-4-4H8a4 4 0 100 8h9a4 4 0 004-4z'}
            ].map((s, i) => (
              <a key={i} href={s.href} aria-label="social">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d={s.path} stroke="#7a5cff" strokeWidth="1.6"/></svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
