import Hotel from '../../Model/hotelModel'
import {CreateHotel, DeleteHotel} from './type'
import {UpdateHotel} from './type'

const HotelResolver = {
    Query: {
     allHotels: async ()=>{
        try {
            const listing = await Hotel.find({})
            return listing
        } catch (err) {
          console.log(err)  
        }
     }
    },
    Mutation: {
    createHotel: async (_:unknown,args:CreateHotel)=>{
        try {
            const newlisting = {
                description: args.input.description,
                image: args.input.image,
                address: args.input.address,
                price: args.input.price,
                numOfBeds: args.input.numOfBeds,    
                numOfBaths: args.input.numOfBaths,
                ratings: args.input.ratings
            }

            const listings = await Hotel.create(newlisting)
            if (listings){
                return listings
            }
        } catch (err) {
            console.log(err)
        }
    },

    UpdateHotel: async (_:unknown,args:UpdateHotel)=>{
        try{
           const id = args.input.id

           const UpdateListing ={
                id: args.input.id,
                description: args.input.description,
                image: args.input.image,
                address: args.input.address,
                price: args.input.price,
                numOfBeds: args.input.numOfBeds,    
                numOfBaths: args.input.numOfBaths,
                ratings: args.input.ratings
           }

          const updateNew = await Hotel.
          findByIdAndUpdate(id, UpdateListing, {new:true}) //new:true is used to return the updated data
            if(updateNew){
                return updateNew
            }
        }catch(err){
            console.log(err)
        }
    

    },
  
    deleteHotel: async (_:unknown,args:DeleteHotel)=>{
        try{
            const id = args.id
            const deleted = await Hotel.findByIdAndDelete(id)
            if(deleted){
                return deleted
            }
        }catch(err){
            console.log(err)
        }
    }

}
}

export default HotelResolver