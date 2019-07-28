import Vue from 'vue'
import Dialog from '~/modules/nuxt-dialog/index'

Vue.use(Dialog)

export default function (ctx, inject) {
  inject('dialog', Dialog)
}
