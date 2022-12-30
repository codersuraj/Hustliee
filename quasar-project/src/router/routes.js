import {db, auth} from "../../firestore/firestore";


const routes = [
    {
        path: '/',

        component: () => import ('src/layouts/AuthLayout.vue'),
        // beforeEnter: (to, from, next) => {
        //     // auth.onAuthStateChanged((user) => {
        //     // console.log(user);
        //     // if (user) {
        //     //     console.log("in");
        //     //     next("/user/home")
        //     // } else {
        //     //     console.log("out");
        //     //     next("/")
        //     // }
        //     // next(to)
        //     // })
        //     next(to)
        //     this.$router.push("/")

        // },
        meta: {
            auth: false
        },
        children: [
            {
                path: '/',
                component: () => import ('src/pages/HomePage.vue'),
                meta: {
                    auth: false
                }
            },
            {
                path: '/staff/login',
                component: () => import ('src/pages/admin/LoginPage.vue'),
                meta: {
                    auth: false
                }
            },
            {
                path: '/staff/signin',
                component: () => import ('src/pages/admin/SignIn.vue'),
                meta: {
                    auth: false
                }
            },
            {
                path: '/user/signup',
                component: () => import ('src/pages/user/SignUp.vue'),
                meta: {
                    auth: false
                },
                props: true
            }, {
                path: '/user/signin',
                component: () => import ('src/pages/user/SignIn.vue'),
                meta: {
                    auth: false
                },
                props: true
            },
        ]
    }, {
        path: '/home',

        component: () => import ('src/layouts/MainLayout.vue'),
        meta: {
            auth: true
        },
        children: [
            {
                path: '/staff/home',
                component: () => import ('src/pages/admin/HomePage.vue'),
                meta: {
                    auth: true
                }
            }, {
                path: '/history',
                component: () => import ('src/pages/HistoryPage.vue'),
                meta: {
                    auth: true
                }
            }, {
                path: '/user/home',
                component: () => import ('src/pages/user/HomePageSt.vue'),
                meta: {
                    auth: true
                }
            },
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import ('pages/ErrorNotFound.vue')
    }
]

// routes.beforeEach((to, from, next) => {

//     auth.onAuthStateChanged((user) => {
//         if (user) { // User is signed in.
//             if (to.meta.auth) {
//                 console.log('out be');
//                 next(to);
//             } else if (!to.meta.auth) {
//                 next('user/home')
//             } else { // No user is signed in.
//                 next("/")
//             }
//         }
//     })

// })


export default routes
