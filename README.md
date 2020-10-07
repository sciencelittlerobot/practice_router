# practice_router

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 子路由的简单用法
```
<router-link to="/page"></router-link>
<router-view></router-view>

// router/index.js
import About1 from '../components/About1.vue'
children: [
  {
    path: '/about1',
    component: About1
  }
]
```
