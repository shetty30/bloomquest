# BloomQuest (offline app)

Everything in this folder is the whole app. It has no server and sends no data anywhere.
Your data is stored only on your phone.

## Put it online once (free), then install

The phone needs to load the app from an https address one time. After that it runs with no internet.

**Option A: Netlify Drop (about 2 minutes, no coding)**
1. On a computer, go to https://app.netlify.com/drop and sign up for a free account.
2. Drag this whole `pwa` folder onto the page.
3. Open the address it gives you (like `https://something.netlify.app`) on your phone.

**Option B: GitHub Pages**
1. Create a public repo, upload the contents of this folder, then go to Settings → Pages → Deploy from branch `main` and choose `/ (root)`.
2. Open `https://<your-username>.github.io/<repo>/` on your phone.

## Install on the phone
- **Android (Chrome):** open the address, tap ⋮ → *Install app* (or use the Install button in Profile).
- **iPhone (Safari only):** open the address, tap Share → *Add to Home Screen*.

Open it once from the new icon while you're still online. From then on it works in airplane mode.

## Keep your data safe
- Data lives in that installed app only. Deleting the app or clearing Safari/Chrome data deletes it.
- Profile → **Export backup** every week or so. **Import backup** restores it, even on a new phone.
- iPhone note: Safari can clear data for home-screen apps you haven't opened in a long time. Regular use plus backups covers this.

## Updating the app later
Replace the files where they're hosted and change `VERSION` in `sw.js`. Phones pick up the update the next time the app is opened online. Your data is not touched.
