export class Resource {
    constructor(src) {
        for (const prop in src) {
            if (src.hasOwnProperty(prop)) {
                if (prop === '_links') {
                    const links = src._links;
                    for (const link in links) {
                        if (links.hasOwnProperty(link)) {
                            this[link] = links[link].href;
                        }
                    }
                }
                this[prop] = src[prop];
            }
        }
    }
}