import openbook from './openbook.png'
import clock from './clock.png'
import live from './live.png'
import scholarship from './scholarship.png'
import noAd from './noAd.png'
const feature =[
    {
        id:1,
        image:openbook,
        text:<h2><color>100+ </color>Job relevant courses</h2>
    },
    {
        id:2,
        image:clock,
        text:<h2><color>20,000+ </color>Hours of content</h2>
    },
    {
        id:3,
        image:live,
        text:<h2><color>Exclusive </color>webinar access</h2>
    },
    {
        id:4,
        image:scholarship,
        text:<h2>Scholarship worth <color>₹94,500</color></h2>
    },
    {
        id:5,
        image:noAd,
        text:<h2><color>Ad Free </color>learning experience</h2>
    },
]

export default feature

const plan =[
    {
        id:1,
        months:'12 Months Subscription ',
        suggest:"Recommanded",
        total:179,
        permonth:15,
        value:true,
    },
    {
        id:2,
        months:'6 Months Subscription ',
        total:149,
        permonth:25,
        value:false,
    },
    {
        id:3,
        months:'3 Months Subscription ',
        total:99,
        permonth:33,
        value:false,
    },
]

export {plan}