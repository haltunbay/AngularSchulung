import { ProvideModule } from './provide.module';

describe('ProvideModule', () => {
  let provideModule: ProvideModule;

  beforeEach(() => {
    provideModule = new ProvideModule();
  });

  it('should create an instance', () => {
    expect(provideModule).toBeTruthy();
  });
});
