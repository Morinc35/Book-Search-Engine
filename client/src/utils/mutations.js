import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;
export const LOGIN_USER = gql`
mutatation loginUser($email: String!, $password: String!){
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;
export const ADD_BOOK = gql`
mutation saveBook(
    $bookId: String
    $authors: [String]
    $title: String
    $description: String
    $image: String
    $link: String
){
    saveBook(
        bookId: $bookId
        authors: $authors
        title: $title
        description: $decsription
        image: $image
        link: $link
        
    ){
        _id
        username
        savedBooks{
            bookId
            authors
            title 
            description
            image
            link
        }

    }
}
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBoook(bookId: $bookId) {
            username
            savedBooks{
                bookId
                authors
                title 
                decsription
                image
                link
            }
        }
    }
`;