module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    'package.json': ['prettier --write'],
    '*.vue': ['prettier --write'],
    '*.{scss,less,styl,css,html}': ['prettier --write'],
    '*.md': ['prettier --write'],
};
