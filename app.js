module.exports.main = {
    greet(names) {
        if (!names) {
            return 'Hello, my friend.';
        }

        names = names.filter(
            (name) => name !== null && name !== undefined && name !== ''
        );

        if (names.length === 0) {
            return 'Hello, my friend.';
        }

        let language = 'en';
        if (
            names[names.length - 1] === 'fr' ||
            names[names.length - 1] === 'en' ||
            names[names.length - 1] === 'nl'
        ) {
            language = names.pop();
        }
        if (names.length === 0) {
            if (language === 'fr') return 'Bonjour, mon ami.';
            if (language === 'en') return 'Hello, my friend.';
            if (language === 'nl') return 'Hallo, mijn vriend.';
        }

        const upper = names.filter((name) => name.toUpperCase() === name);
        const normal = names.filter((name) => name.toUpperCase() !== name);

        let message;
        let messageNormal;
        let messageUpper;

        const messageNormalLanguage = {
            fr: 'Bonjour, ',
            en: 'Hello, ',
            nl: 'Hallo, ',
        };

        const messageUpperLanguage = {
            fr: 'BONJOUR, ',
            en: 'HELLO, ',
            nl: 'HALLO, ',
        };

        const andLanguague = {
            fr: 'et',
            en: 'and',
            nl: 'en, ',
        };

        const andUpperLanguage = {
            fr: 'ET',
            en: 'AND',
            nl: 'EN',
        };

        messageNormal = messageNormalLanguage[language];
        messageUpper = messageUpperLanguage[language];
        const and = andLanguague[language];
        const andUpper = andUpperLanguage[language];

        for (let index = 0; index < normal.length; index++) {
            if (index === 0) {
                messageNormal += normal[index];
            } else if (normal.length > 2 && index !== normal.length - 1) {
                messageNormal += ', ' + normal[index];
            } else {
                messageNormal += ` ${and} ` + normal[index];
            }
        }
        messageNormal += '.';

        for (let index = 0; index < upper.length; index++) {
            if (index === 0) {
                messageUpper += upper[index];
            } else if (upper.length > 2 && index !== upper.length - 1) {
                messageUpper += ', ' + upper[index];
            } else {
                messageUpper += ` ${andUpper} ` + upper[index];
            }
        }
        messageUpper += '!';

        if (normal.length > 0 && upper.length === 0) {
            message = messageNormal;
        }
        if (upper.length > 0 && normal.length === 0) {
            message = messageUpper;
        }
        if (normal.length > 0 && upper.length > 0) {
            message = messageNormal + ` ${andUpper} ` + messageUpper;
        }

        return message;
    },
};
