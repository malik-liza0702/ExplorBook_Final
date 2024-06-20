import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"

// creating a new hotel
export const createHotel=async(req,res,next)=>{
    const newHotel=new Hotel(req.body);
    try{
        const savedHotel=await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch(err){
        next(err);

    }
}
// updating the hotel information
export const updateHotel=async(req,res,next)=>{
    try{
        const updatedHotel=await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true},
        )

    }
    catch(err){
        next(err);

    }
}
// deleting an existing hotel
export const deleteHotel=async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    }
    catch(err){
        next(err);
    }
}
// fetching detail of a hotel
export const getHotel=async(req,res,next)=>{
    try{
        const hotel=await Hotel.findById(req.params.id);
        res.status(200).json(hotel)

    }
    catch(err){
        next(err);   

    }

}
// fteching details of all hotels
export const getHotels=async (req,res,next)=>{
    const {min,max,limit,...others}=req.query;
    const parsedLimit = parseInt(limit,10);
    const finalLimit =isNaN(parsedLimit)?10 : Math.max(1, Math.min(parsedLimit,100));
    try{
        const hotels=await Hotel.find({
            ...others,
            cheapestPrice:{
                $gt:min||1,
                $lt:max||999
            },
        }).limit(finalLimit);
        res.status(200).json(hotels);

    }
    catch(err){
        next(err);
    }
}
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };
  export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };
  export const countByType = async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  };
  