# Create a folder structure for a portfolio website
import os

folders = [
    "root/",
    "root/assets/",
    "root/assets/css/",
    "root/assets/images/",
    "root/assets/models/",
]

files = {
    "root/index.html": "",
    "root/about.html": "",
    "root/portfolio.html": "",
    "root/services.html": "",
    "root/contact.html": "",
    "root/assets/css/styles.css": "",
    "root/README.md": "",
}

# Create folders
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# Create files
for file_path, content in files.items():
    with open(file_path, "w") as file:
        file.write(content)

print("Folder structure created!")
