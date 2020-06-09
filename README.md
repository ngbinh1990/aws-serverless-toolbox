
## Install notes:
- AWS SDK

## Wish List

- [ ] Cognito Auth
- [ ] Aurora MySQL wrapper
- [ ] Aurora MySQL Object Store
- [ ] Aurora MySQL Data Provider
- [ ] SNS subscriber (w/ mobile push notifications)
- [ ] GraphQL object store interface
- [ ] GraphQL data provider interface
- [ ] Aurora PostreSQL wrapper
- [ ] Aurora PostreSQL Object Store
- [ ] Aurora PostreSQL Data Provider

## Object Stores

For the purpose of working with single objects. Supports `get`, `put`, and `delete`. Also supports custom reducers for updates. 

#### Interface:
```TypeScript
export default interface ObjectStore<T> {
  get(id: string): Promise<T | undefined>;
  put(id: string, item: T): Promise<T>;
  delete(id: string): Promise<void>;
  updateState(id: string, action: Action, reducer: Reducer<T>): Promise<T>;
}
```

#### Store types
- S3
- DynamoDB
- Aurora (Coming Soon)

## API Gateway

#### Routing

#### WebSockets