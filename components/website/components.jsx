/* I Domain Industrial — Website kit components */
const { useState, useEffect, useRef } = React;

// Bilingual copy
const T = {
  nav: { products: ["產品系統", "Products"], process: ["製程", "Process"], projects: ["實績", "Projects"], about: ["關於壹東", "About"], contact: ["聯絡", "Contact"] },
};

function Icon({ name, className }) {
  return <i data-lucide={name} className={"ico " + (className || "")}></i>;
}

function useReveal() {
  // Entrance is handled purely in CSS (.reveal) so React re-renders can't
  // strip a JS-toggled class. Kept as a no-op for call-site stability.
}

/* ---------------- Anniversary Bar ---------------- */
function AnnivBar({ lang }) {
  return (
    <div className="anniv-bar">
      <div className="wrap anniv-in">
        <img className="anniv-logo" src="assets/logo-50th-white.png" alt="50th" />
        <span className="anniv-text">
          {lang === 0 ? "1975 – 2025 · 壹東實業歡慶五十週年" : "1975 – 2025 · Celebrating 50 Years of I Domain Industrial"}
        </span>
        <span className="anniv-spark">50<sup>th</sup></span>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header({ lang, setLang, active }) {
  const items = [
    ["products", "#products"], ["process", "#process"],
    ["projects", "#projects"], ["about", "#about"], ["contact", "#contact"],
  ];
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a href="#top"><img className="logo" src="assets/logo-horizontal.svg" alt="壹東實業 I Domain Industrial" /></a>
        <nav className="nav">
          {items.map(([k, href]) => (
            <a key={k} href={href} className={active === k ? "active" : ""}>{T.nav[k][lang]}</a>
          ))}
        </nav>
        <div className="hdr-right">
          <div className="lang">
            <button className={lang === 0 ? "on" : ""} onClick={() => setLang(0)}>中</button>
            <span style={{ color: "var(--border-strong)" }}>/</span>
            <button className={lang === 1 ? "on" : ""} onClick={() => setLang(1)}>EN</button>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: 14 }}>
            {lang === 0 ? "索取規格" : "Request specs"}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ lang }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg"></div>
      <div className="wrap hero-in">
        <span className="eyebrow" style={{ color: "#7ea2ee" }}>{lang === 0 ? "金屬帷幕牆 · 建築外牆系統" : "Metal Curtain Wall Systems"}</span>
        <h1>{lang === 0 ? "精密尺寸的金屬外牆，依您的建築造型而生。" : "Precision metal façades, engineered to your architecture."}</h1>
        <p className="lede">
          {lang === 0
            ? "壹東實業專營複層三明治金屬板的設計、製造與施工。全自動化烤漆線，滿足任何色彩與尺寸需求。"
            : "I Domain Industrial designs, manufactures, and installs composite sandwich metal panels — with a fully-automated paint line that meets any color and dimension spec."}
        </p>
        <div className="hero-cta">
          <a href="#products" className="btn btn-primary">{lang === 0 ? "探索產品系統" : "Explore products"} <i data-lucide="arrow-right" className="ico"></i></a>
          <a href="#projects" className="btn btn-ghost-light">{lang === 0 ? "查看實績" : "View projects"}</a>
        </div>
      </div>
      <div className="hero-photo"><div className="facade"></div></div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats({ lang }) {
  const data = [
    ["50+", lang === 0 ? "年帷幕牆工程經驗" : "Years of façade engineering", "SINCE 1975"],
    ["100%", lang === 0 ? "全自動化烤漆線" : "Automated paint line", "FINISHING"],
    ["±0.5", lang === 0 ? "毫米精密公差" : "mm dimensional tolerance", "PRECISION"],
    ["3", lang === 0 ? "一貫服務：設計·製造·施工" : "Design · Make · Install", "SERVICE"],
  ];
  return (
    <div className="wrap"><div className="stats">
      {data.map(([v, k, e], i) => (
        <div className="stat reveal" key={i}>
          <div className="v" dangerouslySetInnerHTML={{ __html: v.replace(/([+%])/, "<small>$1</small>") }}></div>
          <div className="k">{k}</div>
          <div className="e">{e}</div>
        </div>
      ))}
    </div></div>
  );
}

Object.assign(window, { Icon, useReveal, AnnivBar, Header, Hero, Stats });
