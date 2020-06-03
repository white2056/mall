import Toast from './toast'

const obj = {}

obj.install = function(Vue){
  //创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //创建一个组件对象
  const toast = new toastContrustor()

  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)//括号里就是上面的div 
  
  Vue.prototype.$toast = toast
}

export default obj