# Changelog

所有重要的專案變更都會記錄在此文件中。
格式參考 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)。

---

## [Unreleased]

---

## [2026-03-13]

### Performance — `index.html` & `services.html`（載入速度優化）
- 精簡 Google Fonts 載入字重（Roboto 18 變體 → 3，Inter 9 → 2，Cardo 4 → 3），減少外部 CSS 請求大小
- Banner 第一張圖加上 `fetchpriority="high"`，提升 LCP 優先順序
- Banner 第 2–4 張圖、Gallery 全部 8 張圖加上 `loading="lazy"`，減少首次網路請求
- 所有 gallery / banner 圖片補上語意化 `alt` 文字（同步改善 SEO 與無障礙）
- 壓縮全站主要圖片（品質 75%），共節省約 **2.4 MB**：
  - `index/visual.jpg` : 296KB → 137KB
  - `index/onepage.jpg` : 334KB → 161KB
  - `index/showdaily.jpg` : 434KB → 207KB
  - `index/graphic.jpg` : 255KB → 121KB
  - `index/index_image.jpg` : 436KB → 175KB
  - `onepage/2023UNO.jpg` : 264KB → 118KB
  - `onepage/2023Hyperion_Max.jpg` : 363KB → 142KB
  - `profile-img.jpg` : 原圖 3535×4550px / 1.2MB → 縮至 1200×1545px / **168KB**
  - `testimonials-1~5.jpg` : 共省約 66KB
- 待辦：Cookiebot `data-blockingmode="auto"` 會阻塞渲染，建議與 GDPR 需求評估後調整

### Fixed — `services.html`（連結 & 文字）
- 修正服務項目「Onepage」Read more 連結：原指向 `portfolio/visual/visual.html` → 更正為 `portfolio/onepage/onepage.html`
- 修正服務項目「ShowDaily」Read more 連結：原指向 `portfolio/visual/visual.html` → 更正為 `portfolio/showdaily/showdaily.html`
- 修正服務項目「Graphic」Read more 連結：原指向 `portfolio/visual/visual.html` → 更正為 `portfolio/graphic/grapghic_new.html`
- 修正「ShowDaily」描述文字：原為複製 Visual 的內容，已更新為正確說明

---

## [2026-03-12]

### Fixed — `index.html`
- 補上遺漏的 `</head>` 結束標籤（原本 `<body>` 在 `<head>` 尚未關閉前就出現）
- 補上 Banner section 中 `<div class="container-fluid">` 的 `</div>` 結束標籤
- 補上電話號碼 `<p>` 的 `</p>` 結束標籤

### Fixed — `index.html`（文字、連結、排版）
- 同步修正（詳見下方 services.html 條目）

### Fixed — `services.html`（文字、連結、排版）
- 補上遺漏的 `</head>` 結束標籤
- 修正 `<body>` class：`index-page` → `services-page`
- 移除 Logo 區塊中巢狀的 `<a>` 標籤（無效 HTML），改為單層連結
- 移除導覽列 Home 的 `class="active"`，改為 Services 加上 `class="active"`
- 移除 Home 連結多餘的 `<br>`
- 修正 Portfolio 下拉選單連結路徑（`../../portfolio/` → `portfolio/`）
- 補上缺少的「Before Portfolio」選單項目
- 移除「諮詢服務」按鈕內多餘的 `<br>`
- 修正重複的 `id="services"`：第二個 section 改為 `id="service-items"`
- 修正拼字錯誤：`Design Manger` → `Design Manager`
- 修正拼字錯誤：`Project Manger` → `Project Manager`
- 修正 Footer 社群連結：Facebook 與 Instagram 原本全部指向 LINE 網址，已分別更正
