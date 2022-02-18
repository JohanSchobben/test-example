import { AmountPipe } from './amount.pipe';

describe('AmountPipe', () => {
  it('create an instance', () => {
    const pipe = new AmountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the amount of items as a string if there are items', function () {
    const pipe = new AmountPipe();
    const data = [{}, {}, {}, {}]

    const result = pipe.transform(data);

    expect(result).toEqual("4")
  });

  it('should return none if the length of the resource is 0', function () {
    const pipe = new AmountPipe();
    const data: any[] = [];

    const result = pipe.transform(data);

    expect(result).toEqual("none")
  });


  it('should return none if the resource is undefined', function () {
    const pipe = new AmountPipe();
    const data = undefined;

    const result = pipe.transform(data);

    expect(result).toEqual("none")
  });
});
