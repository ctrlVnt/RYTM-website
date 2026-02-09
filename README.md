# RYTM Website

Yeah, we got tired of YouTube ads too. So we built something about it.

Check it out → [rytmapp.netlify.app](https://rytmapp.netlify.app)

## What's this?

This is the landing page for RYTM - a YouTube player that actually respects your time. No ads, no distractions, just the content you came for.

We built this site because the app needed a home on the web. Something clean, fast, and actually pleasant to look at.

## The vibe

- **Animations that don't suck** - Framer Motion doing the heavy lifting
- **Fast as hell** - Vite + React, because waiting is boring
- **Looks good everywhere** - Tailwind CSS making responsive design not painful
- **Actually accessible** - Radix UI components that work for everyone

## Running this locally

```bash
# Get the code
git clone <repository-url>
cd RYTM-website

# Install stuff
npm install

# Fire it up (opens on port 3000)
npm run dev
```

That's it. No magic spells required.

## What you can do

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview the build
npm run lint     # Check your code
```

## How it's built

React + Vite for the foundation. Tailwind for styling because utility classes just hit different. Framer Motion for those smooth animations. Lucide icons because they're clean AF.

The whole thing is hosted on Netlify - push to main and it deploys. Simple.

## The structure

```
src/
├── components/          # All the UI pieces
│   ├── Hero.jsx        # The big landing section
│   ├── Features.jsx    # What makes RYTM worth using
│   ├── Footer.jsx      # Bottom stuff
│   └── ui/             # Reusable components
├── pages/              # Right now just the home page
└── App.jsx             # Where it all comes together
```

## Want to contribute?

Found a bug? Got an idea? PRs are welcome. Just keep it clean and make sure it works.

## TODO

- [ ] Add actual app screenshots to feature section (currently just icons)
- [ ] Maybe add some user testimonials if anyone actually uses this
- [ ] Analytics? Probably should track something
- [ ] More pages? Docs? Who knows

## License

MIT - do whatever you want with it

---

Built with coffee and frustration over YouTube ads