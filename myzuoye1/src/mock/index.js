import Mock from 'mockjs'
import address from './address.json'
import swipers from './swiper.json'
import addres from './addres.json'
Mock.mock("/add/data", address)
Mock.mock('/swiper/data', swipers)
Mock.mock('/addres/data', addres)