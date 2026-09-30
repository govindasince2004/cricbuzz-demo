import requests
from bs4 import BeautifulSoup
import json

def analyze_cricbuzz():
    url = "https://www.cricbuzz.com/"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
    }

    print(f"Fetching {url}...")
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')

    data = {
        "navigation": [],
        "images": [],
        "structure": {}
    }

    # 1. Extract Navigation
    # Cricbuzz often uses a top nav bar. We'll look for <a> tags in common nav areas.
    nav_links = soup.find_all('a')
    for link in nav_links:
        text = link.get_text(strip=True)
        href = link.get('href')
        if text and href:
            data["navigation"].append({"label": text, "href": href})

    # 2. Record Image URLs
    images = soup.find_all('img')
    for img in images:
        data["images"].append({
            "src": img.get('src'),
            "alt": img.get('alt', ''),
            "class": img.get('class', [])
        })

    # 3. Basic structure analysis (since we can't get computed styles without JS)
    # We'll look for major IDs/Classes that match the blueprint
    blueprint_targets = {
        "SiteHeader": ["cb-nav-main", "header"],
        "MatchHub": ["cb-col-100", "cb-sc-match-card"],
        "HomeSections": ["cb-col-100", "cb-nav-list"],
        "SiteFooter": ["footer", "cb-footer"]
    }

    for key, markers in blueprint_targets.items():
        found = []
        for marker in markers:
            found.extend([str(el)[:100] + "..." for el in soup.find_all(class_=marker) or soup.find_all(id=marker)])
        data["structure"][key] = found[:5] # limit to first 5 examples

    with open("cricbuzz_analysis.json", "w") as f:
        json.dump(data, f, indent=2)

    print("Analysis saved to cricbuzz_analysis.json")

if __name__ == "__main__":
    analyze_cricbuzz()
