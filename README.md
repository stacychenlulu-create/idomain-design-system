# idomain-design-system

壹東實業（I DOMAIN INDUSTRIAL）品牌設計系統的**唯一機器真源**。
Claude Design、Cowork skill（idomain-design）、Claude Code 全部指向本 repo。
品牌改版時**只改這裡**，下游全部同步。

法定源頭：《企業視覺標準規範 Version 1.0》(2021.07.15)，識別設計 by MSD 都會空間設計。

## 結構

```
design-system-spec.json   ← Claude Design 匯入用的地圖（入口）
designSystem.md           ← 給 AI 讀的完整品牌規則（顏色/字體/LOGO/版面/語氣/禁忌）
tokens/
  design-tokens.json      ← 機器可讀 token（W3C 格式）
  colors_and_type.css     ← 全部 token 的 CSS 變數（權威版）
  styles.css              ← 入口檔
components/
  manifest.json           ← 元件清單
  website/                ← 官網 UI kit（React，品牌網頁參考實作）
  stationery/             ← 名片信紙 kit
  specimens/              ← 按鈕/卡片/表單/色票/字體樣本
assets/
  logos/                  ← 標準 LOGO 全套 SVG
  logos-50th/             ← 50 週年 LOGO PNG（⚠ 只限週年物料）
```

## 上線步驟（一次性，約 10 分鐘）

1. 登入或註冊 GitHub（github.com）。
2. 右上角「＋」→ New repository → 名稱 `idomain-design-system` → 選 **Public** → Create。
3. 進入新 repo → 「uploading an existing file」→ 把本資料夾**裡面的全部內容**（不是外層資料夾本身）拖進去 → Commit changes。
4. 打開 `design-system-spec.json`（repo 頁面點檔名 → 鉛筆編輯），把 `repositoryUrl` 裡的
   `REPLACE-WITH-YOUR-GITHUB-USERNAME` 換成你的 GitHub 帳號名 → Commit。

## 日常使用

**Claude Design**（claude.ai/design 或桌面版側欄）
新 session → 「Import Design System」→ 貼上 repo 網址。
之後所有生成物自動用壹東的元件、色票、字體，並依 designSystem.md 的禁忌自動校正。
管理員可開 brand-lock 鎖定品牌。

**Claude Code / Cowork**
做完設計後在 Claude Design 打 `/design-sync`，版面與元件直接推進 Claude Code。
Cowork 的 idomain-design skill 內容與本 repo 同源；改版時先改 repo，再同步 skill。

**同事 / 設計外包**
直接把 repo 網址給對方；LOGO 抓 `assets/logos/`，色號字體查 `designSystem.md`。

## 維護規則

- 唯一真源是本 repo 的 `tokens/colors_and_type.css` 與 `designSystem.md`。
- `tokens/design-tokens.json` 是它的機器可讀鏡像，改 CSS 後必須同步重生。
- Google Drive 的「壹東品牌資產」資料夾降級為人用素材庫（POTX 範本、規範 PDF、印刷用 OTF 字體），不再是機器真源。
- 網頁字體全走 Google Fonts CDN（Noto Sans TC 100–900、Noto Serif TC 200–900）；
  印刷用 OTF 母檔留在 Drive `03_字體_fonts`，不進 repo。

## 授權

LOGO 與識別元素 © 壹東實業，僅供壹東品牌用途。
字體 Noto Sans/Serif TC 為 SIL Open Font License，經 Google Fonts CDN 載入。
