const {ApolloServer} = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('./GraphQL/typeDefs');
const resolvers= require('./GraphQL/resolvers');

const PORT = process.env.PORT || 4000

const startServer = async ()=>{
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    server.applyMiddleware({app})
    const MongoURL = "mongodb+srv://adim:ksXsxpOSlmKNjkhm@cluster0.jm8cc.mongodb.net/Meetingplan?retryWrites=true&w=majority";
    await mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true});
    app.listen({port: PORT});
    
}
startServer();