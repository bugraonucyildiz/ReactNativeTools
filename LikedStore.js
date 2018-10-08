import { observable , action } from 'mobx'
import { AsyncStorage } from 'react-native'
import { asyncStorageKeys, getObjectFromAsynStorage , setObjectInAsyncStorage } from './LikedAsyncStorage'


class LikedStore {
    
@observable likedIds = []

    constructor()
    {
        getObjectFromAsynStorage(asyncStorageKeys.LikedIds)
    }

    @action LikedIdSetAny (likeId) {
        const saveNewArray = []
        if(this.likedIds!=null)
        {
            const likedIdStatus = this.likedIds.some( liked => liked === likeId);
            if(likedIdStatus==false)
            {
                this.likedIds=  this.likedIds.concat([likeId])
            }
            this.saveNewArray= this.likedIds;
        }
        else
        {
            this.saveNewArray= this.likeId;
        }
        setObjectInAsyncStorage (asyncStorageKeys.LikedIds, this.saveNewArray)
      }


        UnLikedIdSet (likeId)  {
          const index = this.likedIds.indexOf(likeId)
                     if(index > -1)
                     { 
                         this.likedIds.splice(index,1)
                     }
        setObjectInAsyncStorage(asyncStorageKeys.LikedIds,this.likedIds)
      }

}
export default new LikedStore();
