export class DBConflictError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
