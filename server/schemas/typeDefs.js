
const typeDefs = `
    type Book {
        bookId: String
        title: String
        authors: [String]
        decsription: String
        image: String
        link: String
    }
    type User {
        _id; ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
        bookCount: Int

    }
    type Auth {
        token: ID!
        profile: Profile
    }
    type Query {
        user: User
        users: [User]
    }
    type Mutation {
        addUser($username: String!, $email: String!, $password: String!): Auth
        loginUser($email: String!, $password: String!): Auth
        saveBook(
            bookID: String!
            title: String
            author: [String]
            decsription: String!
            image: String
            link: String

        ): User
        removeBook(bookId: String): User
    }
`

module.exports = typeDefs;