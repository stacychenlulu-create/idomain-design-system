# 壹東實業 IDOMAIN — 品牌設計系統 designSystem.md

> **這份檔案的用途**：給 Cowork / Claude Chat 讀的「壹東長什麼樣子」單一真相。
> 當你（AI）幫 Stacy 做簡報、報價單、簽呈、LINE OA 月報、對外文件、網頁或任何視覺產出時，
> 一律以本檔的顏色、字體、語氣、版面規則為準。
>
> **法定源頭**：壹東實業《企業視覺標準規範 Version 1.0》(2021.07.15)，識別設計 by MSD 都會空間設計。
> 本檔由 Claude Design 從該手冊重建之 token 整理而成。若本檔與口頭記憶衝突，**以本檔為準**。
> 維護規則：壹東品牌一旦改版，只改這一份；下游（Claude Design / Cowork / Chat）全部指向它。

---

## 0 · 一句話品牌定位

> 一家精密製造商的安靜自信 — serif 標題、大量留白、藍與鋼灰、一點暖銅。
> 工程能力說話，不靠形容詞。industrial / precise / architectural / trust-forward。

壹東實業（I DOMAIN INDUSTRIAL）：複層三明治金屬板與金屬帷幕牆的設計、製造、施工一貫服務，
具全自動化烤漆線。B2B 建築外牆系統。網域 `idomain.com.tw`。

---

## 1 · 顏色 COLORS

### 1.1 日常品牌色（everyday — 99% 的場合用這組）

| 角色 | 名稱 | HEX | RGB | 備註 |
|---|---|---|---|---|
| **主色（螢幕）** | 數位標準藍 | `#1d3eb1` | 29,62,177 | 一切數位／簡報的品牌藍，預設用這個 |
| **主色（印刷）** | 印刷標準藍 | `#324a9a` | 50,74,154 | CMYK 92/82/2/0，送印時用 |
| 輔色 | 亮藍 | `#418af2` | 65,138,242 | 只用於 active 狀態、數據強調，少量 |
| **唯一暖色** | 銅 copper | `#d68549` | 214,133,73 | 唯一的暖色點綴，極少量（一條線、一個重點）|

**中性灰階**

| 角色 | HEX | RGB | 用途 |
|---|---|---|---|
| 墨（近黑／主文字）| `#2d2d2d` | 45,45,45 | 內文主色、深底 |
| 石墨（次文字）| `#414042` | 65,64,66 | 次要文字 |
| 中灰（分隔線）| `#cacac9` | 202,202,201 | 1px 細線、divider |
| 淺灰填色 | `#d1d3d4` | 209,211,212 | 淺色填充 |
| 紙白（淺底）| `#efefef` | 239,239,239 | off-white 表面 |
| 白 | `#ffffff` | — | — |

**藍色階（UI 狀態用，oklch 調和）**：`900 #0f2467` / `700 #16308c`（hover）/ `600 #1d3eb1`（=主色）/ `500 #2a4fc6` / `300 #7ea2ee` / `100 #dbe4f8` / `50 #eef2fc`（淺底襯色）。

**語意角色**：主色 `--brand #1d3eb1`；強調 `--brand-strong #16308c`；淺襯 `--brand-soft #eef2fc`；點綴 `--accent` = 銅 `#d68549`；連結 = 主藍，hover = `#16308c`；狀態 success `#1f8a5b` / warning = 銅 / danger `#c0392b`。

**顏色紀律**：色彩以**平塗色塊**呈現，日常識別**沒有漸層**。銅色與亮藍是僅有的兩個輔色，務必克制。

### 1.2 50週年紀念色（2025 anniversary — ⚠️ 只限週年專案）

> **僅用於 50 週年（1975–2025）相關物料**。平日一律回到上面的標準藍 `#1d3eb1`。
> 金色是**紀念性點綴**，不取代日常的銅色 accent。

| 名稱 | HEX | 用途 |
|---|---|---|
| 週年藍 | `#324a90` | 週年皇家藍 |
| 深週年藍 | `#2b3d7e` | 深藍 |
| 香檳金（主）| `#c8a368` | 主金 |
| 淺金 | `#e2bf8c` | — |
| 深金 | `#b88a4e` | 淺底上需對比時 |
| 金色漸層 | `linear-gradient(135deg, #e6c896, #cba978, #b88a4e)` | 招牌「5」金扇掃 |
| 藍色漸層 | `linear-gradient(140deg, #4a63a8, #324a90, #2b3d7e)` | 週年波浪 |

---

## 2 · 字體 TYPOGRAPHY

### 2.1 字體家族與角色

| 角色 | 品牌指定 | = Google Fonts | 權重 |
|---|---|---|---|
| **標題／display** | 思源宋體 Source Han Serif TC | **Noto Serif TC** | Semibold (600)，≥15pt |
| **內文 body** | 思源黑體 Source Han Sans TC | **Noto Sans TC** | Regular (400)，8–15pt（預設 9pt）|
| Latin 次要／tagline | Helvetica Light | 系統 Helvetica / Arial fallback | — |

> **核心排版動作**：serif 標題壓在中性 sans 內文之上（文學感標題 × 理性內文）。這是壹東的字體signature。
> CJK 內文行高跑寬鬆（line-height ~1.8）以利閱讀。
> Tagline「I DOMAIN INDUSTRIAL」用**大寫＋寬字距**（letter-spacing 0.18em）。

### 2.2 字級階 (px)

xs 12 · sm 14 · base 16 · md 18 · lg 22 · xl 28 · 2xl 36 · 3xl 48 · 4xl 64 · 5xl 84。
行高：tight 1.15 / snug 1.3 / normal 1.6 / loose 1.8（CJK 內文）。
字距：tight −0.02em / normal 0 / wide 0.08em / caps 0.18em。

### 2.3 ⚠️ 字體現實（給 Cowork 做 PPTX 時看）

- **網頁／HTML／Claude Design**：用 Noto Serif TC + Noto Sans TC（CDN 已載，視覺與品牌字一致）。
- **pptxgenjs / Windows 簡報**：若環境裝不到思源字體，**才**退回微軟正黑體當 fallback——
  這是務實妥協，不是品牌標準。能用思源就用思源。
- 過去 showcase 用的「微軟正黑體」屬此類 fallback，非官方識別字體。

---

## 3 · LOGO 使用規則

**標記本體**：單一書法**毛筆筆觸**（流動的墨筆轉折，呼應「壹」字／捲曲金屬板）。
通常搭配**壹東實業**字標（Noto Serif TC）；完整 lockup 再加寬字距小寫 tagline「I DOMAIN INDUSTRIAL」。

### 3.1 日常 LOGO 檔案（standard）

| 檔案 | 用途 |
|---|---|
| `logo-mark.svg` | 只有筆觸標記（數位藍）|
| `logo-mark-white.svg` | 反白，深底／照片底 |
| `logo-mark-dark.svg` | 墨色 `#2d2d2d` 單色 |
| `logo-mark-copper.svg` | 銅色版 |
| `logo-horizontal.svg` | 標記＋壹東實業＋tagline |
| `logo-horizontal-white.svg` | 橫式 lockup 反白 |
| `logo-lockup.svg` | 標記＋壹東實業字標（無 tagline）|
| `logo-lockup-white.svg` | 字標 lockup 反白 |

### 3.2 50週年 LOGO（`assets/50th/`，⚠️ 只限週年）

`logo-50th-gradient.png`（主：金＋藍漸層，淺底）/ `-blue.png`（實藍＋金）/ `-gray.png`（單色灰）/ `-white.png`（全白，深底）/ `-solid-white.png`（白色挖空）。

### 3.3 LOGO 守則

- **保留空間**：四周至少留「標記眼睛高度」的 padding。
- **禁止改色**：標記不得用藍／墨／銅／白以外的顏色。
- 在雜亂影像上：用白色標記＋淡 scrim。

---

## 4 · 版面與元件 LAYOUT & COMPONENTS

- **間距**：8px 基準網格 — 4/8/12/16/24/32/48/64/96/128。
- **容器**：1200px（wide 1440px），gutter 24px。margins 大方、留白多、grid 安靜。signature 是**細直線分欄**。
- **圓角**：方正到微圓（0–4px，最多 8px）。建築感，不柔軟。
- **細線 hairline**：1px，`#cacac9` / `#e3e4e6`。**直向分欄細線是壹東招牌手法**。
- **卡片**：白底＋1px `#e3e4e6` 邊＋4–8px 圓角＋可選極淡陰影。可用藍或銅的頂線／eyebrow 標示分類。**禁**純色左邊框卡、**禁**漸層填充。
- **陰影**：極簡、冷調。`--shadow-sm/md`。靠邊框＋幾 px blur 表現層次，不用厚重 drop shadow 或 glow。
- **背景**：平塗色塊（封面黑／內容白／強調用深品牌藍）。識別本身無紋理、無照片噪點、無裝飾圖樣。
- **動畫**：克制、功能性。入場短 fade＋8–16px 上移，ease-out ~200–320ms。hover ~120ms。無彈跳、無 parallax。尊重 `prefers-reduced-motion`。
- **狀態**：hover = 藍變深至 `#16308c`（中性 +6%）＋連結底線；press = 更深＋1px 位移或 `scale(.98)`；focus = 2px 品牌藍外框、2px offset。
- **透明／模糊**：少用。可用於 sticky header scrim（白 80–90%＋輕 backdrop-blur）或照片遮罩。非裝飾主題。
- **icon**：原識別無 icon。數位場合標準化用 **Lucide**（細幾何、1.5–2px 線），單色（墨／藍／重點用銅），20–24px、1.75px stroke。**永不填色、不多色、不用 emoji**。

---

## 5 · 語氣與文案 VOICE & COPY

- **語言**：繁體中文為主＋拉丁文支援。雙語：壹東實業 / I DOMAIN INDUSTRIAL。
- **語氣**：節制、事實、能力優先。講「做什麼、多精密」，不堆形容詞。
- **人稱**：中文用公司第三人稱（「壹東實業…」）；拉丁行銷可用克制的 "we"，稱客戶「您 / your」。避免炒作。
- **大小寫**：拉丁標題與 tagline 用**大寫＋寬字距**（`I DOMAIN INDUSTRIAL`）；拉丁內文 sentence case；中文用全形標點（，、。）。
- **數字／規格**：規格先行。尺寸、塗裝、製程（全自動化烤漆線）就是賣點，平實呈現。
- **emoji**：**完全不用**。工業 B2B 品牌，emoji off-brand。

**示範文案（on-brand）**
- 標題：「精密尺寸 · 全自動化烤漆」 / "Precision panels, engineered to your façade."
- 副標：「複層三明治金屬板 — 設計、製造、施工一貫服務」
- CTA：「索取規格」 / 「聯絡我們」

---

## 6 · 影像 IMAGERY

冷調、日光、偏藍。玻璃、刷紋金屬、天空。全出血建築／外牆攝影，去飽和、blue-leaning。
**避免暖／夕陽色調**（會跟銅色 accent 與藍色識別打架）。需要真實照片處用 placeholder。

---

## 7 · 禁忌清單 DON'Ts（彙整）

1. 不用藍／墨／銅／白以外的顏色改 LOGO。
2. 日常物料不用 50週年金色／漸層。
3. 不在識別上加紋理、漸層、裝飾圖樣（平塗色塊為準）。
4. 不用厚重 drop shadow、glow、彈跳動畫、parallax。
5. 不用 emoji、不用多色／填色 icon。
6. 不用暖／夕陽色調攝影。
7. 不堆形容詞炒作；規格與能力說話。

---

## 8 · 🚩 兩個必須正視的落差（建檔時的決策點）

> 這兩點是 single source of truth 過程中要拍板的，留給 Stacy 決定，AI 不要自行假設。

1. **官方識別 vs PPTX showcase 配色**
   - 官方 CVI v1.0：主藍 `#1d3eb1`、輔銅 `#d68549`、思源宋體／黑體。
   - 過去 PPTX showcase：navy `#1E2761`、ice blue `#CADCFC`、微軟正黑體。
   - 這兩套並存會造成「兩個壹東的長相」。需決定：showcase 那套是否退役、或正名為「簡報專用衍生套件」並向官方靠攏。

2. **字體**
   - 官方＝思源宋體（標題）＋思源黑體（內文）。
   - 微軟正黑體僅為 pptxgenjs / Windows 跑不到思源時的 fallback，非品牌字。

---

## 附錄 · 對應的原始檔案（在品牌資產資料夾）

- `colors_and_type.css` — 全部 token 的 CSS 變數（給 Claude Design / Claude Code 直接 import）。
- `styles.css` — 入口檔（@import colors_and_type.css）。
- `SKILL.md`（`idomain-design`）— Claude Design 產的 Agent Skill manifest，可整包當 Cowork skill。
- `assets/` — LOGO 全套 SVG ＋ `assets/50th/` 週年 PNG ＋ `assets/reference/` 重建識別頁。
- `企業視覺標準規範_v1.0_2021.pdf` — 法定源頭手冊（MSD）。

**版本**：designSystem.md v1.0 · 整理自 Claude Design 匯出（源頭 CVI v1.0, 2021.07.15）
