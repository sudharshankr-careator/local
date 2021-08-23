import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

<<<<<<< HEAD
const uri = `http://localhost:9000/graphql`; // <-- add the URL of the GraphQL server here
// const uri = `nestjs-postgraphile`; // <-- add the URL of the GraphQL server here
=======
//const uri = `http://localhost:9000/graphql`; // <-- add the URL of the GraphQL server here
 const uri = `nestjs-postgraphile`; // <-- add the URL of the GraphQL server here
>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
