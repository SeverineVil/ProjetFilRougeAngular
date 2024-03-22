import { MajusculeUneSurXPipe } from './majuscule-une-sur-x.pipe';

describe('MajusculeUneSurXPipe', () => {
  const pipe = new MajusculeUneSurXPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('simple word should works', () => {
    expect(pipe.transform('HELLOWORLD')).toBe('HELLOWORLD')

    expect(pipe.transform('helloworld')).toBe('HeLlOwOrLd')
  })

  it('undefined is managed', () => {
    expect(pipe.transform(null)).toBeUndefined();
  })

  it('Une majuscule sur trois fonctionne', () => {
    expect(pipe.transform('good bye', ...[3])).toBe('GooD bYe')
  });
});
