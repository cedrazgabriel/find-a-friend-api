export class OrgAlreadyExistsErros extends Error {
  constructor() {
    super('Organization already exists')
  }
}
