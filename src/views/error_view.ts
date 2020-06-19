import Error from "../errors/errors";

export default function errorView(err: Error): object {
    return {
        code: err.code(),
        message: err.renderMessage(),
        context: err.context(),
        devMessage: err.devMessage(),
    };
}
