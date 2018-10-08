import { AsyncStorage } from 'react-native'
import LikedStore from './LikedStore'

const LikedIds = 'LikedIds'

export const asyncStorageKeys = {
    LikedIds
}

export const getObjectFromAsynStorage = (itemName) => {
    return  (async () => {  await AsyncStorage.getItem(itemName)
    .then(item=> {
        if(item) 
        {
            JSON.parse(item)
            LikedStore.likedIds=JSON.parse(item)
        }
        else{
            reject(Error('Sonuç Boş'))
        }
    }).catch(error => console.log(error))})();
}

export const setObjectInAsyncStorage = (key, value) => {
    const valueString = JSON.stringify(value)
    AsyncStorage.setItem(key,valueString)
}

 
