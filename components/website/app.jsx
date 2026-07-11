/* I Domain Industrial — Website kit app assembly */
function App() {
  const [lang, setLang] = useState(0); // 0 = 中文, 1 = EN
  const [active, setActive] = useState("products");
  useReveal();
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [lang]);
  useEffect(() => {
    const ids = ["products", "process", "projects", "about", "contact"];
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <React.Fragment>
      <AnnivBar lang={lang} />
      <Header lang={lang} setLang={setLang} active={active} />
      <Hero lang={lang} />
      <Stats lang={lang} />
      <Products lang={lang} />
      <Process lang={lang} />
      <Projects lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </React.Fragment>
  );
}

/* About strip (kept here, small) */
function About({ lang }) {
  return (
    <section className="section alt" id="about">
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <span className="eyebrow">{lang === 0 ? "關於壹東" : "About us"}</span>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.15, letterSpacing: "-0.01em", margin: "14px 0 0" }}>
            {lang === 0 ? "把金屬，做成建築該有的樣子。" : "Shaping metal into what architecture should be."}
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.85, color: "var(--fg2)", marginTop: 18 }}>
            {lang === 0
              ? "壹東實業專營複層三明治金屬板設計、製造與施工，配合客戶建築物造型之需求，生產各式精密尺寸之金屬帷幕牆，並具有全自動化烤漆線，滿足客戶對色彩之要求。"
              : "I Domain Industrial specializes in the design, manufacture, and installation of composite sandwich metal panels — producing precision-dimensioned metal curtain walls to suit each building's form, with a fully-automated paint line that meets any color requirement."}
          </p>
        </div>
        <div className="panel-media mmedia-steel" style={{ height: 320 }}>
          <span className="cap" style={{ color: "rgba(40,50,70,.55)" }}>BRUSHED METAL FAÇADE</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
