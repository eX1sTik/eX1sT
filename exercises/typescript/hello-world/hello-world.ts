class HelloWorld {
    static hello(name?: string) {
        if (name === undefined) {
            return "Hello, World!";
        } else {
        	return `Hello, ${name}!`;
        }
    }
}

export default HelloWorld
