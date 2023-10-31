
const typeDefs = `
    type Book {
        bookId: String
        title: String
        authours: [String]
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
`

module.exports = typeDefs;