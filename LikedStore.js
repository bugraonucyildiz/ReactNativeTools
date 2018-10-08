import { observable , action } from 'mobx'
import { AsyncStorage } from 'react-native'
import { asyncStorageKeys, getObjectFromAsynStorage , setObjectInAsyncStorage } from './LikedAsyncStorage'


class LikedStore {
    
@observable likedIds = []

    constructor()
    {
        getObjectFromAsynStorage(asyncStorageKeys.LikedIds)
        .then(likedIds.map(liked => 
            this.likedIds.push = liked))
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
            this.saveNewArray= this.likedIds;
        }
        else
        {
            this.saveNewArray= likeId;
        }
        setObjectInAsyncStorage (asyncStorageKeys.LikedIds, this.saveNewArray)
      }
}
