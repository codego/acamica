interface Error {
        code(): string;
        renderMessage(): string;
        context(): object;
        devMessage(): string;
}

export default Error;
