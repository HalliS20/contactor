import * as FileSystem from 'expo-file-system';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

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

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(contactDirectory)
}

const setupDirectory = async () => {
    const dirInfo = await FileSystem.getInfoAsync(contactDirectory);
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(contactDirectory);
    }
}

export const getOneContract = async fileName => {
    return await FileSystem.readAsStringAsync(`${contactDirectory}${fileName}`)
}

export const getAllContacts = async () => {
    await setupDirectory();
    const dirInfo = await FileSystem.readDirectoryAsync(contactDirectory);
    return await Promise.all(dirInfo.map(getOneContract));
}

export const removeContact = async fileName => {
    await FileSystem.deleteAsync(`${contactDirectory}${fileName}`);
}


export const addContact = async (name, content) => {
    "this is a docstring, or is it?"
    const uuid = uuidv4();
    const fileName = `${name}-${uuid}.json`;
    await FileSystem.writeAsStringAsync(`${contactDirectory}${fileName}`, content);
}

