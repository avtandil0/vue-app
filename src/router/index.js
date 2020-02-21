import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleDetails from '../components/ArticleDetails.vue'
import QuoraDetails from '../components/QuoraDetails.vue'
import Article from '../components/Article.vue'
import Quora from '../components/Quora.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Article',
    name: 'Article',
    component: Article
  },
  {
    path: '/Article/ArticleDetails/:id',
    name: 'ArticleDetails',
    component: ArticleDetails
    // component: () => import(/* webpackChunkName: "ArticleDetails" */ '../components/ArticleDetails.vue')
  },
  {
    path: '/Quora',
    name: 'Quora',
    component: Quora
  },
  {
    path: '/Quora/QuoraDetails/:id',
    name: 'QuoraDetails',
    component: QuoraDetails
    // component: () => import(/* webpackChunkName: "ArticleDetails" */ '../components/ArticleDetails.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


]

const router = new VueRouter({
  routes
})

export default router
