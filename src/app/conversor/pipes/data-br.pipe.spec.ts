import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2023-01-31 para 31/01/2023', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2023-01-31')).toEqual('31/01/2023');
  });
});
