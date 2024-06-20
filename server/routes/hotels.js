import express from "express";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel,
  } from "../controllers/hotel.js";
const router = express.Router();
// creating route
router.post("/", verifyAdmin, createHotel);
// update route
router.put("/:id", verifyAdmin, updateHotel);
// deleting hotel route
router.delete("/:id", verifyAdmin, deleteHotel);
// getHotel route
router.get("/find/:id", getHotel);

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/rooms/:id",getHotelRooms)
export default router;

