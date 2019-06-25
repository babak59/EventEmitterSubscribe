import Child from './child';

describe('child component test', () => {
  it('render child ', () => {
    var childInstance=new Child();
    var childValue=childInstance.getChildValue();
       expect(childValue).toBe("child value");//to.have.length(1);
  });
});