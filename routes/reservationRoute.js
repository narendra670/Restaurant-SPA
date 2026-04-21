import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router(); // to create a router object

router.post("/send", send_reservation);

export default router;
