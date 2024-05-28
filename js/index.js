  import { Router } from './router.js'

  // Mapeando as rotas 
  const router = new Router()
  router.add('/', '/pages/home.html')
  router.add('/universe', '/pages/universe.html')
  router.add('/exploration', '/pages/exploration.html')
  router.add(404, '/pages/404.html')
   
    
  router.handle()

  window.onpopstate = function () {
    router.handle()
  }

  window.route = function () {
    router.route()
  }

    
    