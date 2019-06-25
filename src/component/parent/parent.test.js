import parent from './parent';

describe('parent component test', () => {
  it('render parent ', () => {
    var parentInstance=new Child();
    var parentValue=childInstance.getChildValue();
       expect(parentValue).toBe("parent value");//to.have.length(1);
  });
});