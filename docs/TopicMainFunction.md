# 寵物 Topic 主要 Function

# v.1.1

## 1. 寵物地圖

```
- 寵物友好既 餐廳、診所、酒店/托管、放狗路線、沖涼點(清潔地點)
- 1. 先show 地圖
     。 地圖入面會有以上場所既旗仔
  2. 禁Filtering button 出新Function
     。 篩選
        - 地區
        - For 狗狗 / 貓貓
        - 提供咩服務
     。 排序
        - 由近到遠 (做 / 唔做?)
        - 由評分高到評分低
        - 由評輪多到評輪少
        - 由A 至Z
        - 由Z 至A
     。 Searching bar
        - Search 名稱
        - Based on 篩選Function 做 searching
        - 如果篩選地區後  該地點冇匹配既名稱就唔會有結果
  3. Filtering button 下面會display 地點 (Default Setting)
     。 show 圖片 / 地理位置 (唔包距離?)
     。 show 名
     。 show 評分
     。 show 類型tag
  4. 禁場所轉入場所既Page (場所Page 係所有主要Function入面通用)
```

## 2. 評論場所

```
- 評論會以Post型式出現
- 1. 先show 所有評論Post
     。 每個Post 都以圖 (依張圖要tune size) + Title展示
     。 (做 / 唔做Searching bar)
  2. 禁圖轉入評論既Page (評論Page 係所有主要Function入面通用)
     。 Post內: 圖 (原圖size?) + Title + 評論 + 評分 (用分數 / Like&Dislike?) + 場所tag
     。 禁場所tag轉入場所既Page
  3. 禁Button 開Post
     。 選擇一張圖
     。 寫Title
     。 選擇一個場所tag (Searching bar黎)
     。 評分 / 選擇Like & Dislike
     。 寫評論
```

## 3. 交流

```
- 前2部份好似Function 2咁
- 禁Button 開Post
  。 選擇分享照片 / 開Event
     - 分享照片
       。 開Post選項好似Function 2咁
     - 開Event (冇留言功能, Po主留低聯絡方式俾users再溝通)
       。 寫Title
       。 選擇Event tag
       。 選擇日期 & 時間
       。 寫內容
       。 禁個制自動入 Google日曆 / 入User Profile
```

## 4. 心得區 / 小貼士

```
- 前2部份好似Function 2咁
- 限制User (Admin)先可以開Post
- 開Post填內容可以選擇圖片插入位置 (最理想ver.) / 限制內容要一段段黎
```

## 5. User Profile

```
- 1. 幫寵物開File (一隻寵物一個File)
     。 選擇圖片 (做 / 唔做)
     。 寫名
     。 選擇貓狗分類
     。 (出生日期 / 打針日期) <- 睇下想加咩
  2. Display 一位User 所有既寵物File
  3. 寵物File 可以新增內容
     。 尺寸 & 體重 (數字記錄)
     。 成長樹 (圖片記錄)
     。 電子針卡 (圖片記錄)
     。 杜左蟲未 (入Google日曆 / 入User Profile)
- User 日程表
  。 如果入唔到Google 日曆
  。 show 日曆, 有Event 個日就加提示
  。 (Bonus: 收藏Function)
```

## 提問位

```
1. 寫心得 / 小貼士:
   可以寫description, 如果allow user插入圖片, 點樣可以令user想放邊行就放邊行

2. 建立Event/評論:
   可以tag埋商舖/診所/地點, 係咪可以控制search bar一次show幾多樣野 (show太多係咪會display得好慢)

3. 更新日程表:
   User可以將Event直接插入Google日曆 -> 需唔需要Link埋Google AC
```

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

# v.1.0

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
