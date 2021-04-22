const Meetings = require('../models/Meetings')
module.exports = {
    Query:{
        Meetings: ()=>Meetings.find(),
    },
    Mutation:{
        createMeeting: async(_,{Fach,Link,Datum,Uhrzeit,Plattform})=>{
            const meetings = new Meetings({Fach,Link,Datum,Uhrzeit,Plattform})
            await meetings.save()
            return meetings
        },
        deleteMeetings: async(_,{id})=>{
            const meetings = await Meetings.findById(id)
            await meetings.delete()
            return(id)
        }
    }
}