from playwright.sync_api import sync_playwright
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
# Connect to locatlhost and port 27017
client = MongoClient(MONGO_URI, 27017)
# Use the database wikipedia
db = client.openricedb

with sync_playwright() as p:

    # Run the browser in headless mode
    browser = p.chromium.launch(headless=True)

    page = browser.new_page(
        user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    )
    for page_number in range(1, 18):  # 1,2,3,...,17
        page.goto(
            "https://www.openrice.com/zh/hongkong/restaurants?where=%E4%B8%8A%E7%92%B0&page={}".format(
                page_number
            )
        )

        # Use document query selector to get the data
        restaurant_texts = page.evaluate(
            """

        function jsScript() {
            const allRes = document.querySelectorAll('.content-cell-wrapper')
            const allData = []
            allRes.forEach(res => {
                const data = {}
                data['restaurant_name'] = res.querySelector('.title-name').innerText
                data['likes'] = res.querySelector('.smile-face').querySelector('.score').innerText
                data['dislikes'] = res.querySelector('.sad-face').querySelector('.score').innerText
                data['address'] = res.querySelector('.address').innerText.substring(1)
                data['price_range'] = res.querySelector('.icon-info-food-price').innerText.substring(1)
                data['genres'] = []
                res.querySelector('.pois-categoryui-list').querySelectorAll('li').forEach(elem => data["genres"].push(elem.innerText))
                data['restaurant_url'] = res.querySelector('.title-name').querySelector('a').href
                allData.push(data)
            })
            return allData
        }
            """
        )

        # Write data to MongoDB or files
        db.openricedb.insert_many(restaurant_texts)

    browser.close()
