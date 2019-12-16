// 这是专门配置路由的文件
import Vue from 'vue'
import VueRouter from 'vue-router'; //注意这里采用npm包的模式，引入后要使用，直接使用文件的话默认帮我们处理好了
import heroList from '../views/herolist/rightlist.vue';
import weaponList from '../views/weapon/weapon-router.vue';
import equipmentList from '../views/equipment/equipment-router.vue';
import addHero from '../views/herolist/add.vue'
import editHero from '../views/herolist/edit.vue'
import container from '../views/herolist/container.vue'
Vue.use(VueRouter)
export default new VueRouter({
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            redirect: '/hero'

        }, {
            path: '/hero',
            component: container,
            children: [{
                path: '/hero/addHero',
                component: addHero
            }, {
                path: '/hero/editHero/:id',
                component: editHero
            }, {
                path: '',
                component: heroList
            }]
        }, {
            path: '/weapon',
            component: weaponList
        }, {
            path: '/equipment',
            component: equipmentList
        },
        // {
        //     path: '/addHero',
        //     component: addHero
        // }, {
        //     path: '/editHero/:id',
        //     component: editHero
        // }
    ]

})