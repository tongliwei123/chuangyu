import request from './request.js'

const getIndexImgList = () => request.get('/getIndexImgList')
const login = (params) => request.post('/login', {params})

export {
	getIndexImgList,
	login
}