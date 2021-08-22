console.log("nodeRTSP")
console.log("xxxx")


const R = require('node-rtsp-recorder').Recorder
var rec = new R({
	url:'rtsp://admin:0987654321qaz@192.168.1.121/cam/realmonitor?channel=1&subtype=0',
	folder:'/home/pi/Documents/nodeRTSP',
	name:'cam1',
	type:'image'
})


rec.captureImage(()=>{
	console.log('image cap')
})
