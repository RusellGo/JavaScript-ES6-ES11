const btn = document.querySelector('#btn');
btn.onclick = function () {
  import('./05-hello.js').then(module => {
    module.hello();
  })
}
