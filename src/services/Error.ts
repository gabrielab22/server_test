export class GenericError extends Error {
  constructor(message: string) {
    super(message);

    this.stack = null;
  }
}
