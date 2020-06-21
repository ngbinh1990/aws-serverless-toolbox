import { ExpressionAttributeNameMap, ExpressionAttributeValueMap } from 'aws-sdk/clients/dynamodb';
export default class UpdateExpression {
  private setClause?;
  private removeClause?;
  private addClause?;
  private deleteClause?;
  readonly attributeNames: ExpressionAttributeNameMap;
  readonly attributeValues: ExpressionAttributeValueMap;
  constructor(
    attributeNames?: ExpressionAttributeNameMap,
    attributeValues?: ExpressionAttributeValueMap,
    setClause?: string,
    removeClause?: string,
    addClause?: string,
    deleteClause?: string
  );
  get expression(): string;
  set(attribute: string, to: any): UpdateExpression;
  static set(attribute: string, to: any): UpdateExpression;
  setIfNotExists(attribute: string, to: any, attributeToCheck?: string): UpdateExpression;
  static setIfNotExists(attribute: string, to: any, attributeToCheck?: string): UpdateExpression;
  increment(attribute: string, by: number): UpdateExpression;
  decrement(attribute: string, by: number): UpdateExpression;
  appendToList(listName: string, items: Array<any>): UpdateExpression;
  appendToBeginingOfList(listName: string, items: Array<any>): UpdateExpression;
  addToSet(setName: string, items: Array<any>): UpdateExpression;
  deleteFromSet(setName: string, items: Array<any>): UpdateExpression;
  remove(attribute: string): UpdateExpression;
  removeFromList(listName: string, index: number): UpdateExpression;
  private addAttributeName;
  private addAttributeValue;
  private copyAddingSetClause;
  private copyAddingRemoveClause;
  private copyAddingAddClause;
  private copyAddingDeleteClause;
  private buildClause;
}