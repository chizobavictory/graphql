import Hotel from '../../Model/hotelModel'
import {CreateHotel} from './type'
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
                title: args.input.title,
                image: args.input.image,
                address: args.input.address,
                price: args.input.price,
                numOfBeds: args.input.numOfBeds,    
                numOfBaths: args.input.numOfBaths,
                rating: args.input.rating
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
                title: args.input.title,
                image: args.input.image,
                address: args.input.address,
                price: args.input.price,
                numOfBeds: args.input.numOfBeds,
                numOfBaths: args.input.numOfBaths,
                rating: args.input.rating
           }

          const updateNew = await Hotel.
          findByIdAndUpdate(id, UpdateListing, {new:true}) //new:true is used to return the updated data
            if(updateNew){
                return updateNew
            }
        }catch(err){
            console.log(err)
        }
    

    }
    // DeleteHotel: async (_:unknown,args:DeleteHotel)=>{
    //  try{
    // const deleteListing = await Hotel.findOneAndDelete(id:args.id )
    // if(deleteListing){
    //     return {
    //         message: "Listing deleted successfully"
    //     }
    // }
    //  }catch(err){
    //      console.log(err)
    //  }
    // }
}
}

export default HotelResolver