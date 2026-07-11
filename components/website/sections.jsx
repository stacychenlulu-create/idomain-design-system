/* I Domain Industrial — Website kit sections (products, process, projects, contact, footer) */

/* ---------------- Products (tabbed) ---------------- */
function Products({ lang }) {
  const [tab, setTab] = useState(0);
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [tab, lang]);
  const tabs = [
    {
      name: ["複層三明治金屬板", "Sandwich Panel"], pre: "CORE SYSTEM", media: "mmedia-blue",
      cap: "COMPOSITE SANDWICH PANEL",
      desc: lang === 0
        ? "雙層金屬面板中夾隔熱芯材，兼具結構剛性、隔熱與隔音。每片依建築造型客製尺寸。"
        : "Two metal skins bonded to an insulating core — structural rigidity, thermal and acoustic performance in one panel, cut to your building's form.",
      feats: lang === 0
        ? ["客製化精密尺寸", "隔熱・隔音芯材", "平整度與剛性兼具"]
        : ["Custom precision sizing", "Insulating acoustic core", "Flatness with rigidity"],
    },
    {
      name: ["金屬帷幕牆", "Curtain Wall"], pre: "FAÇADE", media: "mmedia-steel",
      cap: "UNITISED METAL CURTAIN WALL",
      desc: lang === 0
        ? "完整的單元式帷幕牆系統，從結構轉接、防水到飾面，配合立面造型整合設計。"
        : "Complete unitised curtain-wall systems — structural brackets, weatherproofing, and finish, integrated to the elevation design.",
      feats: lang === 0
        ? ["單元式快速安裝", "整合防水氣密", "立面造型自由"]
        : ["Unitised fast install", "Integrated weather seal", "Free-form elevations"],
    },
    {
      name: ["全自動化烤漆", "Automated Coating"], pre: "FINISH", media: "mmedia-copper",
      cap: "AUTOMATED PAINT LINE",
      desc: lang === 0
        ? "全自動化烤漆線確保色彩一致與耐候性，提供金屬、珍珠、特殊色等多元飾面。"
        : "A fully-automated paint line ensures color consistency and weather durability — metallic, pearl, and custom finishes available.",
      feats: lang === 0
        ? ["色彩一致性高", "耐候耐蝕塗層", "金屬・特殊色選擇"]
        : ["High color consistency", "Weather-resistant coating", "Metallic & custom colors"],
    },
  ];
  const t = tabs[tab];
  return (
    <section className="section" id="products">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{lang === 0 ? "產品系統" : "Product Systems"}</span>
          <h2>{lang === 0 ? "從一片金屬板，到整面建築外牆。" : "From a single panel to an entire façade."}</h2>
        </div>
        <div className="tabs">
          {tabs.map((x, i) => (
            <button key={i} className={"tab" + (i === tab ? " on" : "")} onClick={() => setTab(i)}>{x.name[lang]}</button>
          ))}
        </div>
        <div className="panel">
          <div className={"panel-media " + t.media}><span className="cap">{t.cap}</span></div>
          <div>
            <div className="pre">{t.pre}</div>
            <h3 className="serif">{t.name[lang]}</h3>
            <p>{t.desc}</p>
            <ul className="feat-list">
              {t.feats.map((f, i) => (
                <li key={i}><i data-lucide="check" className="ico"></i>{f}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-outline">{lang === 0 ? "索取技術規格" : "Request datasheet"} <i data-lucide="file-text" className="ico"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process({ lang }) {
  const steps = [
    ["01", "ruler", ["設計與選型", "Design & spec"], lang === 0 ? "依建築立面與性能需求，協同確認板型、尺寸與飾面。" : "Panel type, dimensions, and finish confirmed against the elevation and performance brief."],
    ["02", "factory", ["精密製造", "Precision fabrication"], lang === 0 ? "數控加工各式精密尺寸金屬板，控制平整度與公差。" : "CNC fabrication of precision panels, controlling flatness and tolerance."],
    ["03", "paint-bucket", ["全自動烤漆", "Automated coating"], lang === 0 ? "自動化烤漆線上色，確保色彩一致與耐候塗層。" : "Coating on the automated paint line for consistent color and durable finish."],
    ["04", "hard-hat", ["現場施工", "On-site install"], lang === 0 ? "單元式吊掛安裝，整合防水氣密與細部收邊。" : "Unitised installation with integrated weatherproofing and detailing."],
  ];
  return (
    <section className="section ink" id="process">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow" style={{ color: "#7ea2ee" }}>{lang === 0 ? "一貫製程" : "End-to-end Process"}</span>
          <h2>{lang === 0 ? "設計、製造、施工，一條龍掌握品質。" : "Design, manufacture, install — quality held end to end."}</h2>
          <p>{lang === 0 ? "從圖面到立面，每個環節都在壹東的掌控之中。" : "From drawing to elevation, every stage stays under one roof."}</p>
        </div>
        <div className="steps">
          {steps.map(([n, ic, title, body], i) => (
            <div className="step reveal" key={i}>
              <div className="num">{n}</div>
              <i data-lucide={ic} className="ico"></i>
              <h4 className="serif">{title[lang]}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
function Projects({ lang }) {
  const projs = [
    [["商辦帷幕牆", "Commercial Tower"], ["台北 · Taipei", "TAIPEI"], "mmedia-blue", "CURTAIN WALL"],
    [["科技廠房外牆", "Tech Campus"], ["新竹 · Hsinchu", "HSINCHU"], "mmedia-steel", "SANDWICH PANEL"],
    [["文化中心立面", "Cultural Center"], ["台中 · Taichung", "TAICHUNG"], "mmedia-copper", "CUSTOM FINISH"],
  ];
  return (
    <section className="section alt" id="projects">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{lang === 0 ? "工程實績" : "Selected Projects"}</span>
          <h2>{lang === 0 ? "落成於台灣各地的金屬外牆。" : "Metal façades realized across Taiwan."}</h2>
        </div>
        <div className="proj-grid">
          {projs.map(([name, loc, media, tag], i) => (
            <div className="proj reveal" key={i}>
              <div className={"ph " + media}><span className="tag">{tag}</span></div>
              <div className="meta">
                <h4 className="serif">{name[lang]}</h4>
                <div className="loc">{loc[lang]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact({ lang }) {
  const [sent, setSent] = useState(false);
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{lang === 0 ? "聯絡壹東" : "Get in touch"}</span>
          <h2>{lang === 0 ? "告訴我們您的立面，我們回覆規格。" : "Tell us your elevation. We'll send specs."}</h2>
        </div>
        <div className="contact-grid">
          {sent ? (
            <div className="sent"><strong>{lang === 0 ? "已收到您的需求。" : "Request received."}</strong><br />
              {lang === 0 ? "壹東團隊將於一個工作日內回覆。" : "Our team will respond within one business day."}</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="field"><label>{lang === 0 ? "公司名稱" : "Company"}</label><input required placeholder={lang === 0 ? "貴公司名稱" : "Your company"} /></div>
              <div className="field"><label>{lang === 0 ? "聯絡信箱" : "Email"}</label><input type="email" required placeholder="name@company.com" /></div>
              <div className="field"><label>{lang === 0 ? "專案需求" : "Project brief"}</label><textarea placeholder={lang === 0 ? "立面類型、面積、預計時程…" : "Façade type, area, timeline…"}></textarea></div>
              <button className="btn btn-primary" type="submit">{lang === 0 ? "送出需求" : "Send request"} <i data-lucide="send" className="ico"></i></button>
            </form>
          )}
          <dl className="contact-info">
            <dt>Email</dt><dd>info@idomain.com.tw</dd>
            <dt>Website</dt><dd>idomain.com.tw</dd>
            <dt>{lang === 0 ? "服務" : "Services"}</dt><dd>{lang === 0 ? "設計 · 製造 · 施工" : "Design · Manufacture · Install"}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer({ lang }) {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-top">
          <div>
            <img className="logo" src="assets/logo-horizontal-white.svg" alt="壹東實業" />
            <p>{lang === 0 ? "複層三明治金屬板與金屬帷幕牆的設計、製造與施工。" : "Design, manufacture, and installation of composite sandwich metal panels and metal curtain walls."}</p>
          </div>
          <div><h5>{lang === 0 ? "產品" : "Products"}</h5><ul>
            <li><a href="#products">{lang === 0 ? "三明治金屬板" : "Sandwich panel"}</a></li>
            <li><a href="#products">{lang === 0 ? "金屬帷幕牆" : "Curtain wall"}</a></li>
            <li><a href="#products">{lang === 0 ? "全自動化烤漆" : "Coating"}</a></li>
          </ul></div>
          <div><h5>{lang === 0 ? "公司" : "Company"}</h5><ul>
            <li><a href="#about">{lang === 0 ? "關於壹東" : "About"}</a></li>
            <li><a href="#process">{lang === 0 ? "製程" : "Process"}</a></li>
            <li><a href="#projects">{lang === 0 ? "工程實績" : "Projects"}</a></li>
          </ul></div>
          <div><h5>{lang === 0 ? "聯絡" : "Contact"}</h5><ul>
            <li><a href="#contact">info@idomain.com.tw</a></li>
            <li><a href="#contact">idomain.com.tw</a></li>
          </ul></div>
        </div>
        <div className="ftr-bot">
          <span>© 2026 壹東實業有限公司 · I Domain Industrial Co. · {lang === 0 ? "創立五十週年 1975–2025" : "50th Anniversary 1975–2025"}</span>
          <span>Identity v1.0 — MSD 都會空間設計</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Products, Process, Projects, Contact, Footer });
