export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({},"", event.target.href)

    this.handle()
  }

  // Função para manipular as rotas
  handle() {
    const { pathname } = window.location
    // Variável que mostrará a rota do arquivo
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
    .then(function(data) {
      return data.text()
    })
    .then(function(html) {
      document.querySelector('#app').innerHTML = html
    })
  }
}

