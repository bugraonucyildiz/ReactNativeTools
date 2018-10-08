import { observable , action } from 'mobx'
import { AsyncStorage } from 'react-native'
import { asyncStorageKeys, getObjectFromAsynStorage , setObjectInAsyncStorage } from './myAsyncStorage'

@observable likedIds = []

class LikedStore {
    constructor()
    {
        getObjectFromAsynStorage(asyncStorageKeys.LikedIds)
        .then(likedIds.map(likedIds => 
            this.likedIds.push = likedIds))
    }

    @action LikedIdSetAny (likeId) {
        const saveNewArray = []
        if(this.likedIds!=null)
        {
            const likedIdStatus = this.likedIds.some( liked => liked === likeId);
            if(likedIdStatus==false)
            {
                this.likedIds.concat([likeId])
            }
            saveNewArray= this.likedIds;
        }
        else
        {
            saveNewArray= likeId;
        }
        setItemInAsyncStorage(asyncStorageKeys.LikedIds, saveNewArray)
      }
}
