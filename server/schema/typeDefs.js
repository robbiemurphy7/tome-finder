const { gql } = require("apollo-server-express");

// me: Which returns a User type
type Query {
    me: User
}

type Mutation {

}