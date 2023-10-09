import {response} from "express";
import {pool} from "../models/db.js";

export const renderData = async (req, res) => {
    res.render("index.hbs", {car_data: "Hello world....."});
}