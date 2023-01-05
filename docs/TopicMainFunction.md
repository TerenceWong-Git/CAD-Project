# 寵物 Topic 主要 Function

# 最新意見 v.1.0

```
格價
- 格價做Main Function唔夠吸引
- 寵物用品價格其實唔重要, 養得寵物就更加在意品質
- 格價可以係點綴, 用排行榜show產品再順便比較埋價格更好

Info Function
- 用地圖show曬寵物友好既 餐廳、診所、酒店/托管、放狗路線、沖涼點(清潔地點)
- 新手小貼士

User Function
- 除左針卡, 寵物成長線、杜蟲提示日曆、體重/體型記錄(圖片+文字)
- 俾人約埋組團: 放狗 / 參與活動(提供平台俾養寵物人士自己搞)

```

## 1. 格價

```
- 貓狗糧
- 個件產品需要出現係所有目標商店入面
- Playwright 去拎data
- Category選項
  - 排序 (History State)
  - 頁面 (舊ver. 做法: 拎data個位set好拎幾多)
    - 幾多件貨一頁
    - 分幾多頁
- 點擊率排行榜
  - Product個頁整個counter俾佢 (預估)
```

## 2. Search Engine

```
- 主要用黎Search產品先
- 有Global Search
- 亦都要有局部Search
  - 先選擇左Category
  - 例如: 選擇牌子A, 再search產品「haha」, 只會出牌子A既「haha」
```

## 3. 分享

```
- 分享相 + 文字 = 一個Post
  - 出Post時有唔同選項
    - (心情tag / 伏tag) & (產品tag / 診所醫生tag)
    - 伏tag trigger得多會入伏list
- Post可以link埋文章 / 產品 / 診所
- Comment (未必做 / 淡化User互動性)
```

## 4. Profile (針卡)

```
- 整個Profile類既頁面
- 入針卡(暫定係圖片)
- 入寵物資料
```

## 5. Extra / 細微野

```
- 伏list
- 地圖
- 新聞 / 消息 / 教學 / 小貼士
```
