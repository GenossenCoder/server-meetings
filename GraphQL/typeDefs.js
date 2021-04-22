const {gql}= require('apollo-server-express');
module.exports=gql`
    type Query{
        Meetings:[Meetings]
}
    type Meetings{
    id: ID!
    Fach: String!
    Link:String!
    Datum: String!
    Uhrzeit: String!
    Plattform: String!
    }
    type Delete{
        Deleted: String
    }
    type Mutation{
        createMeeting(
            Fach: String!
            Link:String!
            Uhrzeit: String!
            Plattform: String!
            Datum: String!
        ):Meetings!
        deleteMeetings(
            id: String
        ):Delete
    }

`