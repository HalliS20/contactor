import * as FileSystem from 'expo-file-system';
const contactDirectory = `${FileSystem.documentDirectory}contacts/`;

const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}