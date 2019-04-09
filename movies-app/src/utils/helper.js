class Helper{
    classNames = (baseClass, config) => {
        const classNames = [baseClass];
        Object.keys(config).forEach((_key) => {
            if (Object.prototype.hasOwnProperty.call(config, _key)) {
                if (config[_key]) {
                    classNames.push(_key);
                }
            }
        });
        return classNames.join(' ').trim();
    };
};

const helper = new Helper();
Object.freeze( helper );

export default helper;
