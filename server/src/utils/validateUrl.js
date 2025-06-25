import validUrl from 'valid-url';

export const isValidUrl = (url) => validUrl.isWebUri(url);