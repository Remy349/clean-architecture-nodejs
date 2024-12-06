import { ApiError } from "./api.error";

export class InputParseError extends ApiError {
  constructor(message: string, options?: ErrorOptions) {
    super(message, 400, options);
  }
}
