import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from '@apollo/client/utilities';
import { gql } from 'apollo-angular';
import { GraphQLClient, request } from 'graphql-request';
=======
import { gql } from 'apollo-angular';
import {  request } from 'graphql-request';
>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4

const UPLOADFILE = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;
<<<<<<< HEAD
const endpoint = 'http://localhost:4001/graphql';
const graphQLClient = new GraphQLClient(endpoint, {
  credentials: 'include',
  mode: 'cors',
});
=======
//const endpoint = 'http://localhost:4001/graphql';
const endpoint = 'backend-bulljs';

>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}
  uploadFile(file: any) {
    return request(endpoint, UPLOADFILE, {
      file: file,
    });
  }
}
