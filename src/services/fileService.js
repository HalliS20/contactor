import * as FileSystem from "expo-file-system"
import "react-native-get-random-values"
import {v4 as uuidv4} from "uuid"

const contactDirectory = `${FileSystem.documentDirectory}contacts/`

const onException = (cb, errorHandler) => {
    try {
        return cb()
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err)
        }
        console.error(err)
    }
}

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(contactDirectory)
}

const setupDirectory = async () => {
    const dirInfo = await FileSystem.getInfoAsync(contactDirectory)
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(contactDirectory)
    }
}

export const getOneContact = async (fileName) => {
    return await FileSystem.readAsStringAsync(`${contactDirectory}${fileName}`)
}

export const getAllContacts = async () => {
    await setupDirectory()
    const fileNames = await FileSystem.readDirectoryAsync(contactDirectory) //gets all filenames
    const contacts = await Promise.all(
        //////// maps filenames to contacts and gets data from file ////////
        fileNames.map(async (fileName) => {
            const contactData = await getOneContact(fileName) //gets data from file
            const contact = JSON.parse(contactData) //parses data from json
            contact.fileName = fileName // adds filename to contact
            return contact
        }),
    )
    contacts.sort((a, b) => a.name.localeCompare(b.name)) // Sorts contacts
    return contacts
}

export const removeContact = async (fileName) => {
    await FileSystem.deleteAsync(`${contactDirectory}${fileName}`)
}

export const addContact = async (content) => {
    "this is a docstring, or is it?"
    const uuid = uuidv4()
    const fileName = `${content.name}-${uuid}.json`
    await FileSystem.writeAsStringAsync(
        `${contactDirectory}${fileName}`,
        JSON.stringify(content),
    )
}
