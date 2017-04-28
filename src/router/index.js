import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/page/index'
import logList from '@/view/page/logList'
import logAdd from '@/view/page/logAdd'
import projectDetail from '@/view/page/projectDetail'
import projectList from '@/view/page/projectList'
import projectAdd from '@/view/page/projectAdd'
import schedule from '@/view/page/schedule'
import board from '@/view/page/board'

Vue.use(Router)

export default new Router({
  routes: [

    //기본메인화면
    {
      path: '/',
      name: 'index',
      component: index
    },

    //프로젝트 리스트
    {
      path: '/projectList',
      name: 'projectList',
      component: projectList
    },

    //프로젝트 등록
    {
      path: '/projectAdd',
      name: 'projectAdd',
      component: projectAdd
    },                

    //프로젝트 상세
    {
      path: '/projectDetail',
      name: 'projectDetail',
      component: projectDetail
    },            

    //전체 로그 리스트
    {
      path: '/logList',
      name: 'logList',
      component: logList
    },    

    //로그 등록
    {
      path: '/logAdd',
      name: 'logAdd',
      component: logAdd
    },       

    //일정관리
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule
    },           

    //게시판
    {
      path: '/board',
      name: 'board',
      component: board
    }

  ]
})
