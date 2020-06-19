import Error from "../errors";

export default abstract class HttpError implements Error {
  public abstract renderMessage(): string;

  public abstract devMessage(): string;

  public code() {
    return this.renderMessage();
  }

  public context() {
    return {};
  }
}
