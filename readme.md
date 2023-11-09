# Wednesday, November 8, 2023

---

convert jpg to png
```sh
for file in *.jpg; do convert "$file" "${file%.jpg}.png"; done
```

optimize all png images
```sh
for file in *.png; do pngquant --force --ext .png --quality=65-80 $file; done
```

convert png to webp with cwebp
```sh
for file in *.png; do cwebp -q 80 "$file" -o "${file%.png}.webp"; done
```

---
