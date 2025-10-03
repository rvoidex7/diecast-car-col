import time
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    base_url = "http://localhost:8000"
    print("Starting verification...")

    try:
        # 1. Verify Marketplace Screen
        print("Navigating to Marketplace...")
        page.goto(f"{base_url}/marketplace.html", timeout=20000)
        expect(page.get_by_text("Pazaryeri").first).to_be_visible(timeout=10000)
        print("Title visible. Waiting for content to render...")
        time.sleep(3) # Wait for styles and content to apply
        expect(page.get_by_text("Porsche 911 GT3 RS").first).to_be_visible()
        page.screenshot(path="jules-scratch/verification/01_marketplace.png")
        print("Screenshot of Marketplace taken.")

        # 2. Verify My Collection Screen
        print("Navigating to My Collection...")
        page.goto(f"{base_url}/mycollection.html", timeout=20000)
        expect(page.get_by_text("Koleksiyonum").first).to_be_visible()
        print("Title visible. Waiting for content to render...")
        time.sleep(3)
        expect(page.get_by_text("Ford Mustang Shelby GT500").first).to_be_visible()
        page.screenshot(path="jules-scratch/verification/02_mycollection.png")
        print("Screenshot of My Collection taken.")

        # 3. Verify Wanted Screen
        print("Navigating to Wanted...")
        page.goto(f"{base_url}/wanted.html", timeout=20000)
        expect(page.get_by_text("Arananlar Listesi").first).to_be_visible()
        print("Title visible. Waiting for content to render...")
        time.sleep(3)
        page.screenshot(path="jules-scratch/verification/03_wanted.png")
        print("Screenshot of Wanted taken.")

        # 4. Verify Profile Screen
        print("Navigating to Profile...")
        page.goto(f"{base_url}/profile.html", timeout=20000)
        expect(page.get_by_text("diecast_master").first).to_be_visible()
        print("Title visible. Waiting for content to render...")
        time.sleep(3)
        page.screenshot(path="jules-scratch/verification/04_profile.png")
        print("Screenshot of Profile taken.")

    except Exception as e:
        print(f"An error occurred during verification: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")
    finally:
        context.close()
        browser.close()
        print("Verification script finished.")

with sync_playwright() as playwright:
    run(playwright)