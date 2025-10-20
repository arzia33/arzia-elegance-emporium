# ARZIA - Mobile GitHub Upload Guide

This file explains how to upload the site to GitHub using a phone.

1. Download and unzip `arzia-customer-github-ready.zip` on your phone.
2. Open the GitHub app or mobile browser and create a new repository named `arzia-customer-site`.
3. In the repo, use **Upload files** and select all files/folders from the unzipped folder (select `src`, `public`, `package.json`, etc.).
4. Commit the upload to the `main` branch.
5. In GitHub web (mobile), go to **Settings → Pages** and set Source to `main / root` then Save.
6. Wait a few minutes and visit: `https://arzia-elegance-emporium.github.io/arzia-customer-site`

To replace Coming Soon with the full site later: edit `src/App.js` and set `COMING_SOON = false`, then push changes to GitHub.

To add your Paystack public key, create a `.env` file in the repo root with:
```
REACT_APP_PAYSTACK_PUBLIC_KEY=pk_live_xxx
REACT_APP_PAYSTACK_SECRET_KEY=sk_live_xxx
```
Note: GitHub Pages will not use `.env`—replace keys in code or use GitHub Actions for build with secrets when you switch to automated deployments.
