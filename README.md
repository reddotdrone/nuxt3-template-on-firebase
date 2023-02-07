# Nuxt3 Template on Firebase
A template project for nuxt3 on Firebase
https://v3.nuxtjs.org
https://firebase.google.com

# nuxt version
3.0.0

# Run nuxt
```bash
cd app
npm run dev
```

## Start emulators and Deploy
```bash
cd app
NITRO_PRESET=firebase npm run build
npm run clean
cd ..
firebase emulators:start or firebase deploy
```
or
```bash
sh ./build.sh
firebase emulators:start or firebase deploy
```

https://nitro.unjs.io/deploy/providers/firebase.html#local-preview

you need to run 'npm run clean' due to an issue (https://github.com/nuxt/framework/issues/4961)

## Demo
Web: https://nuxt3-template-on-firebase.web.app/
Cloud functions: https://us-central1-nuxt3-template-on-firebase.cloudfunctions.net/helloWorld

## Library
Tailwind CSS (https://tailwindcss.com/)
Pinia(https://pinia.vuejs.org)

## Organize multiple functions
this project has 2 codebases in firebase.json for cloud functions. please check the further details of organizing multiple functions.
https://firebase.google.com/docs/functions/organize-functions

## Issues

Installing pinia (https://github.com/vuejs/pinia/issues/853)
```bash
npm install --legacy-peer-deps pinia
```
