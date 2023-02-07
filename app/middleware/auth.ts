// middleware to chech user authentication for eg:dashboard
export default defineNuxtRouteMiddleware((to, from) => {
  if(isLoggedIn()) {
    console.log("logged in")
  } else {
    console.log("not logged in")
    return navigateTo('/')
  }
})
